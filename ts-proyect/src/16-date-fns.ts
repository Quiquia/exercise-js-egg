import { format, subDays } from 'date-fns';

const date = new Date(1994, 2, 28); //0 = enero,1, febrero
const rta = subDays(date, 30);
const str = format(rta, 'yyy/MM/dd');

console.log('🚀 ~ str:', str);
