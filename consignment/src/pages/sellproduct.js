import React, { useState } from 'react';
import './sellproduct.css';

function SellProductRequest() {
  const [photos, setPhotos] = useState([null, null, null]);

  // Fungsi untuk menangani unggah foto
  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    setPhotos((prevPhotos) => {
      const newPhotos = [...prevPhotos];
      files.forEach((file, index) => {
        if (index < 3) {
          newPhotos[index] = URL.createObjectURL(file);
        }
      });
      return newPhotos;
    });
  };

  // Fungsi untuk menghapus foto dari pratinjau
  const handleRemovePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.map((photo, i) => (i === index ? null : photo)));
  };

  return (
    <div className="sell-product-request">
      <button className="back-button">Back</button>
      <h1>Sell Product Request</h1>
      <p>Fill out the form to request a product</p>
      <hr className="divider" />

      <form>
        <div className="input-group">
          <label className="section-label">Name</label>
          <div className="name-section">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>

        <p className="instructions">
          Before uploading your product to our website, please ensure that it complies with the following rule:
          <br />
          1. It does not offend any group of people (race, gender, religion, circumstances, etc.), including the brand name, product name, product description, and product type.
          <br />
          2. The product and its branding should not be offensive or misleading.
          <br />
          3. High-quality, clear images of the product are required, showing different angles and uses.
          <br />
          4. Products must be tested first before being sold.
        </p>

        <div className="form-row">
          <div className="form-col">
            <div className="input-group">
              <label>Product Name</label>
              <input type="text" maxLength="25" />
              <span className="small-text">Maximum 25 Characters</span>
            </div>

            <div className="input-group">
              <label>Price</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Telephone Number</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>E-Commerce Number</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Product Website Link</label>
              <input type="url" />
            </div>
          </div>

          <div className="form-col">
            <div className="input-group delivery-option-wrapper">
              <textarea className="delivery-option" placeholder="Available Delivery Option"></textarea>
            </div>
          </div>
        </div>

        <div className="photo-upload-section">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handlePhotoUpload}
            className="file-input"
          />
          <button
            type="button"
            className="upload-photo-button"
            onClick={() => document.querySelector('.file-input').click()}
          >
            Upload Product Photo
          </button>
          <div className="divider-vertical"></div>
          <div className="photo-preview-container">
            {photos.map((photo, index) => (
              <div className="photo-preview" key={index}>
                <div
                  className="preview-box"
                  style={{
                    backgroundImage: photo ? `url(${photo})` : 'none',
                    backgroundColor: photo ? 'transparent' : '#FCDC00',
                  }}
                ></div>
                <span className="photo-label">Photo</span>
                {photo && (
                  <button
                    type="button"
                    className="remove-photo"
                    onClick={() => handleRemovePhoto(index)}
                  >
                    X
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="input-group description-group">
          <label>Description</label>
          <textarea maxLength="500"></textarea>
          <span className="small-text">Maximum 500 Characters</span>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default SellProductRequest;
