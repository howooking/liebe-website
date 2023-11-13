import Title from "@/components/common/title";
import InfoCard from "./time-card";
import Container from "@/components/common/container";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaTruckMedical } from "react-icons/fa6";
import { MdLunchDining } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import Progress from "./progress";

export default function TimeTab() {
  return (
    <div>
      <div className="mt-8 text-center">
        <Title>진료시간 안내</Title>
      </div>
      <Container>
        <div className="my-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <InfoCard
            Icon={FaBriefcaseMedical}
            title="일반진료"
            footer={<p>* 예약환자가 우선적으로 진료를 받습니다.</p>}
          >
            <>
              <div className="mb-4 font-semibold">365일 / 연중무휴</div>
              <div className="flex flex-col gap-2">
                <Time time="오전 10시 - 오후 8시" title="주간진료" />
                <Time time="오후 8시 - 자정" title="야간진료" />
              </div>
            </>
          </InfoCard>
          <InfoCard
            Icon={FaTruckMedical}
            title="심야응급"
            footer={
              <div>
                <p>* 생명이 위급한 환자의 경우 바로 응급진료를 실시합니다.</p>
                <p>* 심야응급진료비(50,000원)와 30% 할증 비용이 발생합니다.</p>
              </div>
            }
          >
            <>
              <div className="mb-4 font-semibold">365일 / 연중무휴</div>
              <Time time="자정 - 오전 10시" title="심야야간" />
            </>
          </InfoCard>
          <InfoCard
            Icon={MdLunchDining}
            title="식사/회진시간"
            footer={<p>* 입원환자는 오전5시 / 오후5시 처방식이 급여됩니다.</p>}
          >
            <div className="flex flex-col gap-2">
              <Time time="오후 12시 - 오후 1시" title="점심시간" />
              <Time time="오후 1시 - 오후 1시 30분" title="회진시간" />
              <Time time="오후 5시 - 오후 6시" title="저녁시간" />
            </div>
          </InfoCard>
        </div>
      </Container>
      <Progress />
    </div>
  );
}

const Time = ({ title, time }: { title: string; time: string }) => (
  <div className="flex items-center gap-1">
    <Badge className="rounded-full bg-slate-800 text-sm font-normal">
      {title}
    </Badge>
    <p>{time}</p>
  </div>
);
