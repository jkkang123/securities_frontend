import BondComponent from "components/page/bond";
import { Suspense } from "react";

async function fetchBondData(bondId: string) {
  // const res = await fetch(`https://api.example.com/data/${bondId}`);
  // const data = await res.json();
  const data: Securities.BondData = {
    isinCodeName: "한국전력공사",
    issuerCode: "",
    grade: "AAA",
    issueDate: new Date("2024-05-19"),
    surfaceInterestRate: 5.75,
    expiredDate: new Date("2025-05-19"),
    securitiesItemKindCode: "회사채",
    issueCurrencyCode: "USC",
    interestChangeCode: "변동금리",
    interestTypeCode: "이표채",
    price: 10500,
    pricedDate: new Date("2024-06-18"),
  };
  return data;
}

export default async function Bond() {
  const data = await fetchBondData("");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BondComponent {...data} />
    </Suspense>
  );
}
