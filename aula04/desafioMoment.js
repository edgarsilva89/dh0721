const moment = require('moment')
moment.locale('pt-br')

// Obter a diferença de dias entre 15/09/2010 e 10/06/2020
const difDias1 = moment('20100915')
const difDias2 = moment('20200610')
console.log('A diferença de dias entre as datas é de: '+ difDias2.diff(difDias1,'days')+' dias')

// obter a diferença de meses entre 15/09/2011 e 28/06/2021
const difMeses1 = moment('20110915')
const difMeses2 = moment('20210628')
console.log('A diferença de meses entre as datas é de: '+ difMeses2.diff(difMeses1,'months')+' meses')

// adicionar 32 dias na data 20/03/2021
const addDias = moment('20210320').add(32,'days')
console.log('O acrescimo de 32 dias a data acontecerá no dia: '+ addDias.format('L'))