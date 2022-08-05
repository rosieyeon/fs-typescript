const timeForToday = (time: number) => {
  const today = new Date();
  const timeValue = new Date(time);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return 'now';
  if (betweenTime === 1) return 'a minute ago';
  if (betweenTime < 60) {
    return `${betweenTime} minutes ago`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour === 1) {
    return 'an hour ago';
  }
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour} hours ago`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay === 1) {
    return 'a day ago';
  }
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay} days ago`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
};

export default timeForToday;
