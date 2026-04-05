import { useState, useEffect } from 'react';
import URLShortener from './components/URLShortener';
import URLHistory from './components/URLHistory';

export default function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  // Load URLs from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('shortenedUrls');
    if (saved) {
      setShortenedUrls(JSON.parse(saved));
    }
  }, []);

  // Save URLs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('shortenedUrls', JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const addShortenedUrl = (urlData) => {
    setShortenedUrls([urlData, ...shortenedUrls]);
  };

  const clearHistory = () => {
    setShortenedUrls([]);
  };

  const deleteUrl = (shortUrl) => {
    setShortenedUrls(shortenedUrls.filter(item => item.shortUrl !== shortUrl));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">URL Shortener</h1>
          <p className="text-xl text-gray-600">Powered by AWS Lambda & DynamoDB</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-1">
            <URLShortener onUrlShortened={addShortenedUrl} />
          </div>

          {/* History */}
          <div className="lg:col-span-2">
            <URLHistory
              urls={shortenedUrls}
              onClearHistory={clearHistory}
              onDeleteUrl={deleteUrl}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-600">
          <p>Built with React, Vite, Tailwind CSS & AWS CDK</p>
        </footer>
      </div>
    </div>
  );
}
