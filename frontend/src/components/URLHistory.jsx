import { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/';

export default function URLHistory({ urls, onClearHistory, onDeleteUrl }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getShortUrlLink = (shortUrl) => {
    return `${API_BASE_URL}${shortUrl}`;
  };

  const openUrl = (shortUrl) => {
    window.open(getShortUrlLink(shortUrl), '_blank');
  };

  if (urls.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-gray-400 mb-3">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">No URLs yet</h3>
        <p className="text-gray-600">Shorten your first URL to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">URL History</h2>
        <button
          onClick={onClearHistory}
          className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium transition"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-3">
        {urls.map((item, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition">
            <div className="mb-3">
              <p className="text-xs text-gray-500 mb-1">Original URL</p>
              <p className="text-sm text-gray-700 break-all truncate">{item.url}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Short URL</p>
                <div className="flex gap-2">
                  <code className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm font-mono text-blue-600 break-all">
                    {getShortUrlLink(item.shortUrl)}
                  </code>
                  <button
                    onClick={() => copyToClipboard(getShortUrlLink(item.shortUrl), index)}
                    className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded font-medium transition text-sm whitespace-nowrap"
                  >
                    {copiedIndex === index ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Created</p>
                <p className="text-sm text-gray-700 py-2">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => openUrl(item.shortUrl)}
                className="px-3 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded text-sm font-medium transition"
              >
                Open
              </button>
              <button
                onClick={() => onDeleteUrl(item.shortUrl)}
                className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded text-sm font-medium transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
        Total URLs: <span className="font-semibold text-gray-900">{urls.length}</span>
      </div>
    </div>
  );
}
