import Card from "components/card";
import CardGrid from "components/card/grid";
import Item from "components/card/grid/item";
import Chart from "components/chart";

export default function Bond() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid gap-4">
          <Card title={"채권 상세정보"}>
            <CardGrid>
              <Item title={"채권 종류"} content={"회사채"}></Item>
              <Item title={"채권 이자 지급 방식"} content={"이표채"}></Item>
              <Item title={"채권 평균 수익률"} content={"5.25%"}></Item>
              <Item title={"채권 신용 등급"} content={"AA"}></Item>
            </CardGrid>
          </Card>
          <Card title={"채권 속성"}>
            <CardGrid>
              <Item title={"액면가"} content={"10,500원"}></Item>
              <Item title={"상환일(만기일)"} content={"2025-08-25"}></Item>
              <Item title={"표면이자율(표면금리)"} content={"5.75%"}></Item>
              <Item title={"이자 지급 주기"} content={"3개월"}></Item>
              <Item title={"옵션"} content={"콜 옵션"}></Item>
            </CardGrid>
          </Card>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Bond Price History</h2>
          <Chart />
        </div>
      </div>
    </div>
  );
}
