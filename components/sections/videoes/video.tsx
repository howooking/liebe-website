"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type VideoType = { videoId: string; title: string };

export default function Video({ title, videoId }: VideoType) {
  return (
    <div className="overflow-hidden rounded-md">
      <LiteYouTubeEmbed id={videoId} title={title} />
    </div>
  );
}
