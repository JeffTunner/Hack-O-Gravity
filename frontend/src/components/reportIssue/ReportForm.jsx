import React, { useState } from 'react';
import { useIssues } from '../../context/IssueContext';

const categories = [
  'Pothole',
  'Garbage',
  'Street Light',
  'Water Leakage',
  'Other',
];

const cities = {
  Delhi: [28.6139, 77.2090],
  Mumbai: [19.0760, 72.8777],
  Chennai: [13.0827, 80.2707],
};

const ReportForm = () => {
  const [form, setForm] = useState({
    category: '',
    description: '',
    city: '',
    location: '',
    anonymous: false,
    media: null,
    voice: null,
  });

  const { addIssue } = useIssues();

  // Location detection (browser geolocation)
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          setForm(f => ({
            ...f,
            location: `${pos.coords.latitude}, ${pos.coords.longitude}`,
            city: '', // Clear city if using geolocation
            position: [pos.coords.latitude, pos.coords.longitude],
          }));
        },
        () => alert('Unable to detect location.')
      );
    }
  };

  // Media input handler
  const handleMedia = e => {
    setForm(f => ({ ...f, media: e.target.files[0] }));
  };

  // Voice input handler (basic, uses browser SpeechRecognition API)
  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.onresult = event => {
        setForm(f => ({
          ...f,
          description: f.description + ' ' + event.results[0][0].transcript,
        }));
      };
      recognition.start();
    } else {
      alert('Voice input not supported in this browser.');
    }
  };

  // City selection handler
  const handleCityChange = e => {
    const city = e.target.value;
    setForm(f => ({
      ...f,
      city,
      position: city ? cities[city] : undefined,
      location: city ? `${cities[city][0]}, ${cities[city][1]}` : '',
    }));
  };

  // Form submit handler
  const handleSubmit = e => {
    e.preventDefault();
    addIssue({
      category: form.category,
      description: form.description,
      status: 'Active',
      city: form.city,
      position: form.position,
      location: form.location,
      anonymous: form.anonymous,
      // media, voice can be added as needed
    });
    alert('Issue reported! (Demo)');
    setForm({
      category: '',
      description: '',
      city: '',
      location: '',
      anonymous: false,
      media: null,
      voice: null,
      position: undefined,
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Category Dropdown */}
      <div>
        <label className="block text-blue-200 font-semibold mb-2">Category</label>
        <select
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.category}
          onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
          required
        >
          <option value="">Select category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block text-blue-200 font-semibold mb-2">Description</label>
        <textarea
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Describe the issue..."
          value={form.description}
          onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          required
        />
        <button
          type="button"
          onClick={handleVoiceInput}
          className="mt-2 px-4 py-1 rounded-full bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold shadow transition"
        >
          🎤 Voice Input
        </button>
      </div>

      {/* City Dropdown */}
      <div>
        <label className="block text-blue-200 font-semibold mb-2">City</label>
        <select
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.city}
          onChange={handleCityChange}
        >
          <option value="">Select city (or use location detection)</option>
          {Object.keys(cities).map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="block text-blue-200 font-semibold mb-2">Location</label>
        <div className="flex gap-2">
          <input
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700 focus:outline-none"
            type="text"
            placeholder="Detect or enter location"
            value={form.location}
            onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
            required
          />
          <button
            type="button"
            onClick={detectLocation}
            className="px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white font-semibold shadow transition"
          >
            📍 Detect
          </button>
        </div>
      </div>

      {/* Media Input */}
      <div>
        <label className="block text-blue-200 font-semibold mb-2">Media (Image/Video)</label>
        <input
          type="file"
          accept="image/*,video/*"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-blue-700"
          onChange={handleMedia}
        />
      </div>

      {/* Anonymous Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="anonymous"
          checked={form.anonymous}
          onChange={e => setForm(f => ({ ...f, anonymous: e.target.checked }))}
          className="mr-2 accent-blue-600"
        />
        <label htmlFor="anonymous" className="text-gray-200 font-medium">
          Report Anonymously
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg transition transform hover:scale-105"
      >
        Submit Issue
      </button>
    </form>
  );
};

export default ReportForm;