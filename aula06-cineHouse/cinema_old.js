let filmeAdd = require('./add');

let catalogo = [
    {
        código: 1,
        titulo: 'Lagrimas do sol',
        duração: 1.20,
        atores: ['João', 'Lucas', 'Annita'],
        anoDeLancamento: 2000,
        emCartaz: true
    },
    {
        código: 2,
        titulo: 'Homens de Preto',
        duração: 1.40,
        atores: ['Will', 'Smith', 'Aprigio'],
        anoDeLancamento: 2005,
        emCartaz: false
    }
]

filmeAdd(catalogo)
console.log(catalogo)