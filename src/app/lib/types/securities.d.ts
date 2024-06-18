declare namespace Securities {
  interface BondData {
    isinCodeName: string; // 채권 이름
    issuerCode: string;
    grade: string; // 채권 등급
    issueDate: Date; // 채권 발행 일자
    surfaceInterestRate: number; // 채권 표면 이자율
    expiredDate: Date; // 채권 만기 일자
    securitiesItemKindCode: string; // 회사채와 같은 유가증권 종목 종류
    issueCurrencyCode: string; // 채권 발행 통화
    interestChangeCode: string; // 금리 변동 구분
    interestTypeCode: string; // 채권 이자 유형
    price: number; // 채권 가격
    pricedDate?: Date; // 채권 종가일
  }
}
