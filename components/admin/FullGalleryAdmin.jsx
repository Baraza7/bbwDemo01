import React, { useState } from 'react';
import FloatingAdminNav from './FloatingAdminNav';

const FullGalleryAdmin = ({ config, setConfig }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSettingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig(prevConfig => ({
      ...prevConfig,
      settings: {
        ...prevConfig.settings,
        [name]: type === 'checkbox' ? checked : (type === 'number' ? parseInt(value) : value),
      }
    }));
  };

  const handleImageChange = (index, e) => {
    const { name, value } = e.target;
    const newImages = [...config.images];
    newImages[index] = { ...newImages[index], [name]: value };
    setConfig(prevConfig => ({ ...prevConfig, images: newImages }));
  };

  const addImage = () => {
    const newImage = {
      id: `full-img-${Date.now()}`,
      title: 'New Image',
      imageUrl: 'https://placehold.co/800x800/EEE/31343C?text=New+Image',
      alt: 'New image description',
      description: 'Description for the new image'
    };
    setConfig(prevConfig => ({ ...prevConfig, images: [...prevConfig.images, newImage]}));
  };

  const removeImage = (index) => {
    const newImages = config.images.filter((_, i) => i !== index);
    setConfig(prevConfig => ({ ...prevConfig, images: newImages}));
  };

  // Save to Firestore via API
  const handleSaveChanges = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/fullgallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      if (!res.ok) throw new Error('Failed to save');
      setMessage('FullGallery configuration saved successfully!');
    } catch (err) {
      setMessage('Error saving gallery: ' + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-8 font-sans">
      <FloatingAdminNav />
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">FullGallery Settings</h1>
            <p className="text-gray-600">Manage the 3x3 image grid for the Media page</p>
          </div>
          <button 
            onClick={handleSaveChanges} 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors" 
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
        
        {message && (
          <div className={`mb-4 text-center text-sm p-3 rounded ${
            message.includes('Error') ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
          }`}>
            {message}
          </div>
        )}

        {/* General Settings */}
        <div className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">General Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Grid Columns</label>
              <input 
                type="number" 
                name="gridColumns" 
                value={config.settings.gridColumns} 
                onChange={handleSettingChange} 
                className="w-full p-2 border rounded-md"
                min="1"
                max="5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Grid Rows</label>
              <input 
                type="number" 
                name="gridRows" 
                value={config.settings.gridRows} 
                onChange={handleSettingChange} 
                className="w-full p-2 border rounded-md"
                min="1"
                max="5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Total Images</label>
              <input 
                type="number" 
                name="totalImages" 
                value={config.settings.totalImages} 
                onChange={handleSettingChange} 
                className="w-full p-2 border rounded-md"
                min="1"
                max="25"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <input 
              type="checkbox" 
              id="hoverEffect" 
              name="hoverEffect" 
              checked={config.settings.hoverEffect} 
              onChange={handleSettingChange} 
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="hoverEffect" className="ml-2 block text-sm text-gray-900">
              Enable Hover Effects
            </label>
          </div>
        </div>

        {/* Image Management */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-700">Manage Images</h2>
            <button 
              onClick={addImage} 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              + Add Image
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {config.images.map((image, index) => (
            <div key={image.id} className="p-4 border rounded-lg bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-medium text-gray-800">Image {index + 1}</h3>
                <button 
                  onClick={() => removeImage(index)} 
                  className="text-red-500 hover:text-red-700 font-semibold text-sm"
                >
                  Remove
                </button>
              </div>
              
              {/* Image Preview */}
              <div className="mb-4">
                <img 
                  src={image.imageUrl} 
                  alt={image.alt} 
                  className="w-full h-32 object-cover rounded-md border"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/800x800/EEE/31343C?text=Image+Not+Found';
                  }}
                />
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Image URL</label>
                  <input 
                    type="url" 
                    name="imageUrl" 
                    value={image.imageUrl} 
                    onChange={(e) => handleImageChange(index, e)} 
                    className="w-full p-2 border rounded-md text-sm"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
                  <input 
                    type="text" 
                    name="title" 
                    value={image.title} 
                    onChange={(e) => handleImageChange(index, e)} 
                    className="w-full p-2 border rounded-md text-sm"
                    placeholder="Image title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Alt Text</label>
                  <input 
                    type="text" 
                    name="alt" 
                    value={image.alt} 
                    onChange={(e) => handleImageChange(index, e)} 
                    className="w-full p-2 border rounded-md text-sm"
                    placeholder="Alt text for accessibility"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                  <textarea 
                    name="description" 
                    value={image.description} 
                    onChange={(e) => handleImageChange(index, e)} 
                    className="w-full p-2 border rounded-md text-sm"
                    rows="2"
                    placeholder="Brief description of the image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {config.images.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No images added yet. Click "Add Image" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullGalleryAdmin; 