import Container from "@/components/container";

export default function Footer() {
  return (
    <div className=" bg-stone-900  py-10 text-sm text-stone-100">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <p>리베동물메디컬센터</p>
            <p>서울특별시 송파구 삼전로 56 리베동물메디컬센터</p>
            <p>liebeamc2@daum.net</p>
            <p>Copyright (c) 2014 리베동물메디컬센터 All Rights Reserved.</p>
          </div>
          <div className="text-end">
            <p className="text-2xl text-primary">02.6953.7502</p>
            <p>사업자 등록번호 : 530-36-01377</p>
            <p>대표 : 김홍석</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
