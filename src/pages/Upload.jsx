import React, { useState } from "react";
import axios from "axios";
import { 
  FiUpload, 
  FiPlus, 
  FiX, 
  FiImage, 
  FiFileText, 
  FiTag, 
  FiList,
  FiSettings,
  FiSave,
  FiRefreshCw
} from "react-icons/fi";
import "../styles/upload.css";

const Upload = () => {


    // usestate to check if user is valid check if isLoggedIn is true in localstorage
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
    //if is logged in is true then only user will be able to access it else he won't
    if (!isLoggedIn) {
    //   redirect to / page 
      window.location.href = "/";
      return null;
    }
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    newCategory: "",
    description: "",
  });
  const [features, setFeatures] = useState([""]);
  const [specifications, setSpecifications] = useState([{ key: "", value: "" }]);
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("basic");

  const categories = ["Air Suspension", "Engine", "Brakes", "Transmission", "Lighting", "Exhaust", "Interior", "Others"];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle features
  const handleFeatureChange = (i, value) => {
    const newFeatures = [...features];
    newFeatures[i] = value;
    setFeatures(newFeatures);
  };

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (i) => setFeatures(features.filter((_, idx) => idx !== i));

  // Handle specifications
  const handleSpecChange = (i, field, value) => {
    const newSpecs = [...specifications];
    newSpecs[i][field] = value;
    setSpecifications(newSpecs);
  };

  const addSpecification = () =>
    setSpecifications([...specifications, { key: "", value: "" }]);

  const removeSpecification = (i) =>
    setSpecifications(specifications.filter((_, idx) => idx !== i));

  // Handle images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 10) {
      setMessage("❌ Maximum 10 images allowed");
      return;
    }
    
    setImages(prev => [...prev, ...files]);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreview(prev => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = preview.filter((_, i) => i !== index);
    setImages(newImages);
    setPreview(newPreviews);
  };

  // Validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      setMessage("❌ Product name is required");
      return false;
    }
    if (!formData.category && !formData.newCategory.trim()) {
      setMessage("❌ Please select or add a category");
      return false;
    }
    if (!formData.description.trim()) {
      setMessage("❌ Description is required");
      return false;
    }
    if (features.filter((f) => f.trim() !== "").length === 0) {
      setMessage("❌ Please add at least one feature");
      return false;
    }
    if (images.length === 0) {
      setMessage("❌ Please upload at least one image");
      return false;
    }
    return true;
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("category", formData.category || formData.newCategory);
      data.append("description", formData.description);
      data.append("features", JSON.stringify(features.filter((f) => f.trim() !== "")));
      data.append(
        "specifications",
        JSON.stringify(
          specifications.filter((s) => s.key.trim() && s.value.trim())
        )
      );

      images.forEach((image) => {
        data.append("images", image);
      });

      await axios.post("https://bavaria-center.onrender.com/api/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Product uploaded successfully!");
      // Reset form
      setFormData({
        name: "",
        category: "",
        newCategory: "",
        description: "",
      });
      setFeatures([""]);
      setSpecifications([{ key: "", value: "" }]);
      setImages([]);
      setPreview([]);
      setActiveTab("basic");
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      category: "",
      newCategory: "",
      description: "",
    });
    setFeatures([""]);
    setSpecifications([{ key: "", value: "" }]);
    setImages([]);
    setPreview([]);
    setMessage("");
  };

  return (
    <div className="upload-container">
      <div className="upload-header">
        <h1>
          <FiUpload /> Upload New Product
        </h1>
        <p>Add your automotive parts to the catalog</p>
      </div>

      <div className="upload-tabs">
        <button 
          className={activeTab === "basic" ? "active" : ""} 
          onClick={() => setActiveTab("basic")}
        >
          <FiFileText /> Basic Info
        </button>
        <button 
          className={activeTab === "specs" ? "active" : ""} 
          onClick={() => setActiveTab("specs")}
        >
          <FiSettings /> Specifications
        </button>
        <button 
          className={activeTab === "images" ? "active" : ""} 
          onClick={() => setActiveTab("images")}
        >
          <FiImage /> Images
        </button>
      </div>

      <form className="upload-form" onSubmit={handleSubmit}>
        {/* Basic Info Tab */}
        {activeTab === "basic" && (
          <div className="form-tab">
            <div className="form-group">
              <label>
                <FiTag /> Product Name *
              </label>
              <input
                type="text"
                placeholder="Enter product name (e.g., Audi A7 Air Suspension)"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FiList /> Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <span className="input-divider">or</span>
              <input
                type="text"
                placeholder="Add new category"
                value={formData.newCategory}
                onChange={(e) => handleInputChange("newCategory", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                <FiFileText /> Description *
              </label>
              <textarea
                placeholder="Describe the product features, benefits, and applications..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows="5"
                required
              />
            </div>
          </div>
        )}

        {/* Specifications Tab */}
        {activeTab === "specs" && (
          <div className="form-tab">
            <div className="form-group">
              <label>Features *</label>
              <div className="features-list">
                {features.map((feature, i) => (
                  <div key={i} className="dynamic-input-group">
                    <input
                      type="text"
                      placeholder={`Feature ${i + 1}`}
                      value={feature}
                      onChange={(e) => handleFeatureChange(i, e.target.value)}
                    />
                    {features.length > 1 && (
                      <button 
                        type="button" 
                        className="remove-btn"
                        onClick={() => removeFeature(i)}
                      >
                        <FiX />
                      </button>
                    )}
                  </div>
                ))}
                <button 
                  type="button" 
                  className="add-btn"
                  onClick={addFeature}
                >
                  <FiPlus /> Add Feature
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Specifications</label>
              <div className="specs-list">
                {specifications.map((spec, i) => (
                  <div key={i} className="spec-row">
                    <input
                      type="text"
                      placeholder="Key (e.g., Position)"
                      value={spec.key}
                      onChange={(e) => handleSpecChange(i, "key", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Value (e.g., Rear)"
                      value={spec.value}
                      onChange={(e) => handleSpecChange(i, "value", e.target.value)}
                    />
                    {specifications.length > 1 && (
                      <button 
                        type="button" 
                        className="remove-btn"
                        onClick={() => removeSpecification(i)}
                      >
                        <FiX />
                      </button>
                    )}
                  </div>
                ))}
                <button 
                  type="button" 
                  className="add-btn"
                  onClick={addSpecification}
                >
                  <FiPlus /> Add Specification
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Images Tab */}
        {activeTab === "images" && (
          <div className="form-tab">
            <div className="form-group">
              <label>
                <FiImage /> Product Images * (Max 10)
              </label>
              <div className="image-upload-area">
                <input
                  type="file"
                  id="product-images"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input"
                />
                <label htmlFor="product-images" className="upload-label">
                  <FiUpload size={24} />
                  <span>Click to upload or drag & drop</span>
                  <small>PNG, JPG, JPEG up to 10MB each</small>
                </label>
              </div>

              {preview.length > 0 && (
                <div className="image-previews">
                  <h4>Selected Images ({preview.length}/10)</h4>
                  <div className="preview-grid">
                    {preview.map((img, i) => (
                      <div key={i} className="preview-item">
                        <img src={img} alt={`Preview ${i + 1}`} />
                        <button
                          type="button"
                          className="remove-image-btn"
                          onClick={() => removeImage(i)}
                        >
                          <FiX />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="form-actions">
          <button 
            type="button" 
            className="clear-btn"
            onClick={clearForm}
            disabled={loading}
          >
            <FiRefreshCw /> Clear Form
          </button>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <FiRefreshCw className="spinner" /> Uploading...
              </>
            ) : (
              <>
                <FiSave /> Upload Product
              </>
            )}
          </button>
        </div>

        {message && (
          <div className={`message ${message.includes("❌") ? "error" : "success"}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Upload;