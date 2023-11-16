import Section from "@/components/common/section";
import Video from "./video";
import Container from "@/components/common/container";

export default function VideosSection() {
  return (
    <Section>
      <div className="bg-stone-100 py-6 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VIDEOS.map((video) => (
              <Video
                videoId={video.videoId}
                title={video.title}
                key={video.videoId}
              />
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}

const VIDEOS = [
  {
    videoId: "DsPgA4z2FcA",
    title: "강아지낙상 후 🚨응급수술이 필요한 증상에 대해 알아봐요!",
  },
  {
    videoId: "DYl8F3YzgPI",
    title:
      "고양이심장병은 물론, 강아지 정밀 검사와 특수동물 진료 가능한 병원은?",
  },
  {
    videoId: "eDavx8akNfw",
    title: "강아지와 고양이 외, 특수동물 병원을 찾는다면?",
  },
];
