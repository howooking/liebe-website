import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Message() {
  return (
    <Card className="w-1/2 h-1/2 flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-2xl">대표원장 인삿말</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-lg break-keep">
        <p>LIEBE는 독일어로 사랑을 뜻합니다.</p>
        <p>
          이름처럼 사랑으로 가득한 리베동물메디컬에서는 반려동물과 보호자분들을
          위해 최상의 의료 서비스를 제공하고 있습니다.
        </p>
        <p>
          리베동물메디컬센터는 동물들과 함께하는 순간을 소중히 여기며, 그들의
          건강과 행복을 위해 노력하고 있습니다.
        </p>
        <p>
          아이들과 함께하는 시간이 더욱 특별하고 따뜻한 경험이 되도록,
          리베동물메디컬센터가 보호자 여러분들과 함께하겠습니다.
        </p>
      </CardContent>
      <CardFooter className="ml-auto mr-10">
        <p>수의사 김홍석</p>
      </CardFooter>
    </Card>
  );
}
