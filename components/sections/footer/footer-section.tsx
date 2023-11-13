import Container from "@/components/common/container";

export default function FooterSection() {
  return (
    <div className="mb-[48px] bg-slate-900 px-2 py-4 text-[10px] text-slate-300 sm:text-base lg:mb-0">
      <Container>
        <div className="flex justify-between">
          <div>
            <p>서울특별시 송파구 삼전로 56</p>
            <p>liebeamc2@daum.net</p>
            <p>
              Copyright (c) 2014 <br className="md:hidden" /> 리베동물메디컬센터
              <br className="md:hidden" />
              All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col justify-between text-end">
            <p>02.6953.7502</p>
            <p>사업자등록번호 5303601377</p>
            <p>대표 김홍석</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
