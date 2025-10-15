import React, { useState, useRef } from 'react';
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
    voice: '',
    position: undefined,
  });
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [locationLoading, setLocationLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const recognitionRef = useRef(null);

  const { addIssue } = useIssues();

  // Location detection (browser geolocation)
  const detectLocation = () => {
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          setForm(f => ({
            ...f,
            location: `${pos.coords.latitude}, ${pos.coords.longitude}`,
            city: '',
            position: [pos.coords.latitude, pos.coords.longitude],
          }));
          setLocationLoading(false);
        },
        () => {
          alert('Unable to detect location.');
          setLocationLoading(false);
        }
      );
    } else {
      alert('Geolocation not supported.');
      setLocationLoading(false);
    }
  };

  // Media input handler
  const handleMedia = e => {
    setForm(f => ({ ...f, media: e.target.files[0] }));
  };

  // Voice input handlers
  const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      setVoiceActive(true);
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = event => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setVoiceTranscript(transcript);
      };
      recognitionRef.current = recognition;
      recognition.start();
    } else {
      alert('Voice input not supported in this browser.');
    }
  };

  const stopVoiceInput = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setVoiceActive(false);
      setForm(f => ({
        ...f,
        description: f.description
          ? f.description + ' ' + voiceTranscript
          : voiceTranscript,
      }));
      setVoiceTranscript('');
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
      media: form.media,
    });
    setShowSummary(true);
  };

  // Popup for summary
  const SummaryPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full border-2 border-blue-600">
        <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">Report Summary</h2>
        <ul className="space-y-2 text-blue-100">
          <li><span className="font-semibold text-blue-300">Category:</span> {form.category}</li>
          <li><span className="font-semibold text-blue-300">Description:</span> {form.description}</li>
          <li><span className="font-semibold text-blue-300">City:</span> {form.city}</li>
          <li><span className="font-semibold text-blue-300">Location:</span> {form.location}</li>
          <li><span className="font-semibold text-blue-300">Anonymous:</span> {form.anonymous ? 'Yes' : 'No'}</li>
          <li><span className="font-semibold text-blue-300">Media:</span> {form.media ? form.media.name : 'None'}</li>
        </ul>
        <button
          className="mt-6 w-full py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg transition"
          onClick={() => {
            setShowSummary(false);
            setForm({
              category: '',
              description: '',
              city: '',
              location: '',
              anonymous: false,
              media: null,
              voice: '',
              position: undefined,
            });
          }}
        >
          Close
        </button>
      </div>
    </div>
  );

  // Popup for location loading
  const LocationPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-blue-900 rounded-xl shadow-xl p-6 flex flex-col items-center border-2 border-blue-400">
        <span className="text-3xl mb-2 animate-bounce">📍</span>
        <span className="text-blue-100 font-semibold">Adding location...</span>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <form
        className="space-y-8 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 rounded-2xl shadow-2xl p-10 border-2 border-blue-700 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
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
          <div className="flex gap-2 mt-2">
            {!voiceActive ? (
              <button
                type="button"
                onClick={startVoiceInput}
                className="px-4 py-1 rounded-full bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold shadow transition"
              >
                🎤 Start Voice Input
              </button>
            ) : (
              <button
                type="button"
                onClick={stopVoiceInput}
                className="px-4 py-1 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-semibold shadow transition"
              >
                ⏹ Stop & Fill
              </button>
            )}
            {voiceTranscript && (
              <span className="px-3 py-1 rounded bg-blue-900 text-blue-100 text-xs font-mono">
                {voiceTranscript}
              </span>
            )}
          </div>
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
          className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold text-lg shadow-lg transition transform hover:scale-105"
        >
          Submit Issue
        </button>
      </form>

      {/* Popups */}
      {locationLoading && <LocationPopup />}
      {showSummary && <SummaryPopup />}
    </div>
  );
};

export default ReportForm;