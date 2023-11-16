"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type VideoType = { videoId: string; title: string };

export default function Video({ title, videoId }: VideoType) {
  return <LiteYouTubeEmbed id={videoId} title={title} />;
}
