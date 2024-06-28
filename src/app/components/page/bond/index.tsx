import Card from "@common/card";
import CardGrid from "@common/card/grid";
import Item from "@common/card/grid/item";
import Chart from "@common/chart";
import currencyUtils from "@utils/currencyUtils";
import dateUtils from "@utils/dateUtils";

function BondComponent(props: Securities.BondData) {
  const {
    isinCodeName,
    issuerCode,
    issueDate,
    grade,
    surfaceInterestRate,
    expiredDate,
    securitiesItemKindCode,
    issueCurrencyCode,
    interestChangeCode,
    interestTypeCode,
    price,
    pricedDate,
  } = props;
  return (
    <div>
      <h4 className="flex justify-end mb-5">{`업데이트일시 : ${"2024-06-25 오전 10:00:00"}`}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid gap-4">
          <Card title={"채권 상세정보"}>
            <CardGrid>
              <Item title={"채권 이름"} content={isinCodeName}></Item>
              <Item
                title={"채권 발행일"}
                content={dateUtils.getStringDate(issueDate)}
              ></Item>
              <Item title={"채권 종류"} content={securitiesItemKindCode}></Item>
              <Item
                title={"채권 이자 지급 방식"}
                content={interestTypeCode}
              ></Item>
              <Item title={"채권 평균 수익률"} content={"5.25%"}></Item>
              <Item title={"채권 신용 등급"} content={grade}></Item>
            </CardGrid>
          </Card>
          <Card title={"채권 속성"}>
            <CardGrid>
              <Item
                title={"액면가"}
                content={currencyUtils.getKorCurrencyFormat(price)}
              ></Item>
              <Item
                title={"상환일(만기일)"}
                content={dateUtils.getStringDate(expiredDate)}
              ></Item>
              <Item title={"표면이자율(표면금리)"} content={"5.75%"}></Item>
              <Item title={"이자 지급 주기"} content={"3개월"}></Item>
              <Item title={"옵션"} content={"콜 옵션"}></Item>
            </CardGrid>
          </Card>
        </div>
        <Card title={"최근 1년 채권 가격 추이"}>
          <Chart />
        </Card>
      </div>
    </div>
  );
}

export default BondComponent;
