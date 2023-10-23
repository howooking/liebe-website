export default function Typography() {
  return (
    <>
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center">
        <span className="text-secondary">리베</span>
        <span className="text-primary">동물메디컬센터</span>
      </h1>
      <p className="text-stone-600 text-sm md:text-base lg:text-2xl text-center my-6">
        사랑과 케어로 함께하는
        <br className="block md:hidden" /> 건강한 반려생활의 길로 안내합니다
      </p>
    </>
  );
}
