import Section from "@/components/common/section";
import Container from "@/components/common/container";
import Video from "./video";
import { VIDEOS } from "@/constants/videos";

export default function VideosSection() {
  return (
    <Section>
      <div className="bg-stone-100 py-6 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VIDEOS.map((video) => (
              <Video
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
              />
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}
