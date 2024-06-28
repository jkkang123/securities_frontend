const dateUtils = {
  getStringDate: (targetDate: Date) => {
    const year = targetDate.getFullYear(); // 2023
    const month = (targetDate.getMonth() + 1).toString().padStart(2, "0"); // 06
    const day = targetDate.getDate().toString().padStart(2, "0"); // 18

    const dateString = year + "-" + month + "-" + day; // 2023-06-18

    return dateString;
  },
};
export default dateUtils;
