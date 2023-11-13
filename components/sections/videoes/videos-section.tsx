import Section from "@/components/common/section";
import Video from "./video";
import Container from "@/components/common/container";
import Title from "@/components/common/title";

export default function VideosSection() {
  return (
    <Section id="video">
      <div className="bg-slate-100 py-8">
        <Container>
          <div className="mb-8 text-center">
            <Title>리베 유튜브 동영상</Title>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
