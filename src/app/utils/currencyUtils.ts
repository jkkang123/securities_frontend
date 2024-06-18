const currencyUtils = {
  getKorCurrencyFormat: (amount: number) => {
    return amount.toLocaleString("ko-KR") + "원";
  },
};

export default currencyUtils;
