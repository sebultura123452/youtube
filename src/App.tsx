import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 ml-64">
          <div className="p-4">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {['Tümü', 'Müzik', 'Oyun', 'Canlı', 'Spor', 'Eğitim', 'Belgesel', 'Yemek', 'Seyahat'].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 whitespace-nowrap"
                >
                  {tag}
                </button>
              ))}
            </div>
            <VideoGrid />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;