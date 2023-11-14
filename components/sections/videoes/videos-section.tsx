import Section from "@/components/common/section";
import Video from "./video";
import Container from "@/components/common/container";

export default function VideosSection() {
  return (
    <Section id="video">
      <div className="bg-stone-100 py-6 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VIDEOS.map((video) => (
              <Video src={video} key={video} />
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}

const VIDEOS = [
  "https://www.youtube.com/embed/DsPgA4z2FcA?si=yRNNTuQbekyhgKdY",
  "https://www.youtube.com/embed/DYl8F3YzgPI?si=mRaqrNpwvhQoR0EB",
  "https://www.youtube.com/embed/eDavx8akNfw?si=KxNdOmWbdExPY4FC",
];
