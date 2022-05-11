import MonthLists from './constants/month.json';

export const formatedTime =(dateI)=>{
    if (dateI) {
        const date = new Date(dateI);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
  
        var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        var dayName = days[date.getDay()];
  
        const monthName = MonthLists.filter(el => el?.id == month)[0]?.shortName;
  
        return `${dayName}, ${monthName} ${day}`;
      }
  
      return '';
}