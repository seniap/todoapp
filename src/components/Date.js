function dateToday() {
  //Get date
  const date = new Date();

  const weekday = date.toLocaleString('default', {weekday : 'long'});
  const day = String(date.getDate());
  const month = date.toLocaleString('default', {month : 'long'});
  
  return `${weekday}, ${month} ${day}`;
};

export default dateToday;
