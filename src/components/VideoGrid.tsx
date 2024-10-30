import React from 'react';
import VideoCard from './VideoCard';

const VideoGrid = () => {
  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      title: "Doğada Muhteşem Bir Gün | 4K Belgesel",
      channel: "Doğa Belgeselleri",
      views: "1.2M",
      timestamp: "3 gün önce"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
      title: "En İyi Yemek Tarifleri | Şef Özel",
      channel: "Mutfak Sanatları",
      views: "856B",
      timestamp: "1 hafta önce"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
      title: "Teknoloji Dünyasındaki Son Gelişmeler",
      channel: "Tech Günlüğü",
      views: "425B",
      timestamp: "2 gün önce"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
      title: "Uzay ve Evren | Bilim Belgeseli",
      channel: "Bilim Kanalı",
      views: "2.1M",
      timestamp: "5 gün önce"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
      title: "Sağlıklı Yaşam Rehberi",
      channel: "Sağlık Plus",
      views: "334B",
      timestamp: "1 gün önce"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?w=800&q=80",
      title: "Müzik Teorisi | Temel Eğitim",
      channel: "Müzik Akademi",
      views: "945B",
      timestamp: "6 gün önce"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;