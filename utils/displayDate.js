export const displayDate = (timestamp, format) => {
  const datenew = new Date(timestamp);
  const date = datenew.getDate();
   const month = datenew.getMonth();
  const year = datenew.getFullYear();
   if(format=='YYYY-MM-DD'){
    let yearMonthDate =  year +'-'+(month+1) + '-' + date;
    return yearMonthDate
  }
  /* istanbul ignore else */
   if(format=='DD/MM/YYYY') {
   let DateMonthYear =  date +'/'+(month+1) + '/' + year;
   return DateMonthYear
  }
 };

 