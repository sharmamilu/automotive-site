import React, { useState, useEffect, useRef } from "react";
import { renderAsync } from "docx-preview";
import "../styles/documents.css";

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentDocs, setRecentDocs] = useState([]);
  const containerRef = useRef();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch("/documents/list.json")
      .then((res) => res.json())
      .then((data) => {
        // assign "Auto Parts" category to all
        const docsWithCategory = data.map((name, index) => ({
          id: index + 1,
          name,
          category: "Auto Parts",
        }));
        setDocuments(docsWithCategory);
      });
  }, []);

  const filteredDocs = documents.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (documents.length > 0 && !selectedDoc) {
      setSelectedDoc(documents[0]);
    }
  }, [documents, selectedDoc]);

  useEffect(() => {
    if (selectedDoc && containerRef.current) {
      setIsLoading(true);
      setError(null);

      // Simulate network delay for demo purposes
      const timer = setTimeout(() => {
        fetch(`/documents/${selectedDoc.name}`)
          .then((res) => {
            if (!res.ok) throw new Error("Document not found");
            return res.blob();
          })
          .then((blob) => {
            containerRef.current.innerHTML = ""; // clear previous
            renderAsync(blob, containerRef.current);
            setIsLoading(false);

            // Add to recent documents
            setRecentDocs((prev) => {
              const filtered = prev.filter(
                (doc) => doc.name !== selectedDoc.name
              );
              return [selectedDoc, ...filtered.slice(0, 4)];
            });
          })
          .catch((err) => {
            setError(err.message);
            setIsLoading(false);
          });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [selectedDoc]);

  const handleDocSelect = (doc) => {
    setSelectedDoc(doc);
  };

  return (
    <div className="documents-container">
      <header className="documents-header">
        <h1>Document Viewer</h1>
        <p>Browse and preview your documents</p>
      </header>

      <div className="documents-layout">
        {/* Sidebar */}
        <aside className="documents-sidebar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="documents-list">
            <h3>All Documents ({filteredDocs.length})</h3>
            <ul>
              {filteredDocs.map((doc) => (
                <li
                  key={doc.id}
                  className={selectedDoc?.id === doc.id ? "active" : ""}
                >
                  <button onClick={() => handleDocSelect(doc)}>
                    <span className="doc-icon">📄</span>
                    <div className="doc-info">
                      <span className="doc-name">{doc.name}</span>
                      <span className="doc-category">{doc.category}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {recentDocs.length > 0 && (
            <div className="recent-documents">
              <h3>Recently Viewed</h3>
              <ul>
                {recentDocs.map((doc, i) => (
                  <li key={i}>
                    <button onClick={() => handleDocSelect(doc)}>
                      <span className="doc-icon">📄</span>
                      {doc.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="documents-main">
          {selectedDoc ? (
            <div className="preview-container">
              <div className="preview-header">
                <h2>{selectedDoc.name}</h2>
                <div className="doc-meta">
                  <span className="doc-category-badge">
                    {selectedDoc.category}
                  </span>
                </div>
              </div>

              {error && (
                <div className="error-message">
                  <p>⚠️ {error}</p>
                  <button onClick={() => setError(null)}>Dismiss</button>
                </div>
              )}

              {isLoading && (
                <div className="loading-container">
                  <div className="spinner"></div>
                  <p>Loading document preview...</p>
                </div>
              )}

              <div
                ref={containerRef}
                className={`doc-preview ${isLoading ? "loading" : ""}`}
              />
            </div>
          ) : (
            <div className="welcome-message">
              <div className="welcome-icon">📚</div>
              <h2>Welcome to Document Viewer</h2>
              <p>Select a document from the sidebar to start previewing</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Documents;
