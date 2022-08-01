const epochToDate = (time: number) => {
  const timeConv = new Date(time * 1000);

  const year = timeConv.getFullYear();
  const month = ("0" + (timeConv.getMonth() + 1)).slice(-2);
  const day = ("0" + timeConv.getDate()).slice(-2);

  const hour = ("0" + timeConv.getHours()).slice(-2);
  const minutes = ("0" + timeConv.getMinutes()).slice(-2);
  const seconds = ("0" + timeConv.getSeconds()).slice(-2);

  // const merge = "".concat(
  //   year,
  //   "-",
  //   month,
  //   "-",
  //   day,
  //   " ",
  //   hour,
  //   ":",
  //   minutes,
  //   ":",
  //   seconds
  // );

  // return "hi";
};

export default epochToDate;
