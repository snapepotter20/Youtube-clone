import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become Entrepreneurship"
          views="1.5M views"
          timestamp="4 days ago"
          channelImage="/Images/avatar2.jpg"
          channel="Lakshay Chaudhry"
          image="/Images/channelimage1.jpg"
        />
        <VideoCard
          title="Weird food review"
          views="674K views"
          timestamp="1 day ago"
          channelImage="/Images/avatar3.png"
          channel="Thugesh"
          image="/Images/channelimage7.jpg"
        />
        <VideoCard
          title="Design Technologies"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar4.png"
          channel="Ray"
          image="/Images/channelimage8.jpg"
        />
        <VideoCard
          title="Code with John"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar5.png"
          channel="Ray"
          image="/Images/channelimage9.jpg"
        />
        <VideoCard
          title="Learn 3 AI tools"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar6.jpg"
          channel="Ray"
          image="/Images/channelimage3.jpeg"
        />
        <VideoCard
          title="Video editing by AI"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar4.png"
          channel="Ray"
          image="/Images/channelimage10.jpg"
        />
        <VideoCard
          title="India is growing"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar2.jpg"
          channel="Ray"
          image="/Images/channelimage6.jpeg"
        />
        <VideoCard
          title="Relatives everywhere"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar6.jpg"
          channel="Ray"
          image="/Images/channelimage2.jpeg"
        />
        <VideoCard
          title="Maid se pangaa"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar3.png"
          channel="Ray"
          image="/Images/channelimage5.jpeg"
        />
        <VideoCard
          title="Learn web dev tools"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar5.png"
          channel="Ray"
          image="/Images/channelimage1.jpg"
        />
        <VideoCard
          title="Instagram Reelers"
          views="112K views"
          timestamp="6 days ago"
          channelImage="/Images/avatar4.png"
          channel="Ray"
          image="/Images/channelimage4.jpeg"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
