import ContainerWide from "@/components/common/container-wide";
import MainLogo from "@/components/common/main-logo";

export default function FooterSection() {
  return (
    <footer className="mb-12 bg-slate-900 py-6 text-sm text-white lg:mb-0 lg:py-12 lg:text-base">
      <ContainerWide>
        <div className="flex flex-col justify-between gap-6 px-3 text-center lg:flex-row lg:text-left">
          <div className="order-2 space-y-2 sm:space-y-4 lg:order-1 lg:flex-1">
            <p>주소 : 서울특별시 송파구 삼전로 56</p>
            <p>전화번호 : 0507.1448.7502</p>
          </div>

          <div className="order-1 space-y-2 text-center sm:space-y-4 lg:order-2 lg:flex-1">
            <div className="flex justify-center">
              <MainLogo footer />
            </div>
            <div className="text-sm">
              Copyright ⓒ 2014 리베동물메디컬센터 <br className="sm:hidden" />
              All Rights Reserved.
            </div>
          </div>

          <div className="order-3 space-y-2 text-center sm:space-y-4 lg:flex-1 lg:text-right">
            <p>사업자등록번호 : 530-36-01377</p>
            <p>대표 : 김홍석</p>
          </div>
        </div>
      </ContainerWide>
    </footer>
  );
}
