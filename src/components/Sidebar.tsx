import React from 'react';
import { Home, Compass, Library, History, Clock, ThumbsUp, PlaySquare, Folder } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Ana Sayfa' },
    { icon: Compass, label: 'Keşfet' },
    { icon: Library, label: 'Kitaplık' },
    { icon: History, label: 'Geçmiş' },
    { icon: Clock, label: 'Daha Sonra İzle' },
    { icon: ThumbsUp, label: 'Beğendiklerim' },
    { icon: PlaySquare, label: 'Videolarım' },
    { icon: Folder, label: 'Koleksiyonlar' },
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-16 p-4 border-r border-gray-200">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
        >
          <item.icon className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;