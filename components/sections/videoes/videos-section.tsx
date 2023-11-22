import Section from "@/components/common/section";
import ContainerWide from "@/components/common/container-wide";
import Video from "./video";
import { VIDEOS } from "@/constants/videos";

export default function VideosSection() {
  return (
    <Section>
      <div className="bg-stone-100 py-6 sm:py-12">
        <ContainerWide>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VIDEOS.map((video) => (
              <Video
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
              />
            ))}
          </div>
        </ContainerWide>
      </div>
    </Section>
  );
}
