import Container from "@/components/common/container";
import Section from "@/components/common/section";

export default function Footer() {
  return (
    <div className="scroll-snap mb-[48px] bg-stone-900 py-5 text-[11px] text-stone-50 sm:mb-0 sm:py-10 sm:text-sm">
      <Container>
        <div className="flex justify-between">
          <div>
            <p>리베동물메디컬센터</p>
            <p>서울특별시 송파구 삼전로 56</p>
            <p>liebeamc2@daum.net</p>
            <p>
              Copyright (c) 2014 <br className="md:hidden" /> 리베동물메디컬센터
              <br className="md:hidden" />
              All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col justify-between text-end">
            <p className="text-xl text-primary sm:text-2xl">02.6953.7502</p>
            <div>
              <p>사업자등록번호 5303601377</p>
              <p>대표 김홍석</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
