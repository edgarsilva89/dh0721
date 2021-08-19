
const { fr } = require('date-fns/locale');
const {format} = require('date-fns/locale/fr');

const newYears = new Date('2019/01/01');
const formattedDate = format(newYears,'MM/dd/yyyy',{locale: fr});
console.log(formattedDate);

// const formattedDate = format(newYears,‘MMMM DD, YYYY’,
//     { locale: frenchLocale }

// var datefns = require("date-fns");
// var data = format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// console.log(data);