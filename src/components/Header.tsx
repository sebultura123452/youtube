import React from 'react';
import { Search, Menu, Bell, User, Video } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
          <h1 className="text-xl font-bold text-red-600">VideoTube</h1>
        </div>
        
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Ara..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute right-4 top-2.5 w-5 h-5 text-gray-500" />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Video className="w-6 h-6 text-gray-600 cursor-pointer" />
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;