const {differenceInDays,differenceInMonths,addDays,format} = require('date-fns')

// Obter a diferença de dias entre 15/09/2010 e 10/06/2020
const difDias = differenceInDays(
    new Date(2020, 5, 10),new Date(2010, 8, 15)
)
console.log('A diferença de dias entre as datas é de: '+ difDias +' dias')

// obter a diferença de meses entre 15/09/2011 e 28/06/2021
const difMeses = differenceInMonths(
    new Date(2021, 5, 28),
    new Date(2011, 8, 15)
)
console.log('A diferença de meses entre as datas é de: '+ difMeses +' meses')

// adicionar 32 dias na data 20/03/2021
const addDias = addDays(
    new Date(2021, 2, 20),32)
console.log('O acréscimo de 32 dias a data acontecerá no dia: '+ format(new Date(addDias),'dd/MM/yyyy'))