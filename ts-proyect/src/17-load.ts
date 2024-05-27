import _ from 'lodash';

const data = [
  {
    userName: 'vane',
    role: 'adm',
  },
  {
    userName: 'claudia',
    role: 'seller',
  },
  {
    userName: 'emil',
    role: 'adm',
  },
  {
    userName: 'carlos',
    role: 'customer',
  },
];

const rpt = _.groupBy(data, (item) => item.role);
console.log('🚀 ~ rpt:', rpt);
