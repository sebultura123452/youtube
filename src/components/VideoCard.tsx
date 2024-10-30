import React from 'react';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ thumbnail, title, channel, views, timestamp }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer group">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="flex gap-2">
        <div className="w-9 h-9 rounded-full bg-gray-100 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{channel}</p>
          <div className="text-sm text-gray-600">
            {views} görüntüleme • {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;