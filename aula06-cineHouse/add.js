function addFilme(filme){
    filme.push({
        código: 3,
        titulo: 'A era do gelo',
        duração: 1.30,
        atores: ["Aprigio", "Edgar", "Giovanna"],
        anoDeLancamento: 2021,
        emCartaz: true
    })
}
module.exports = addFilme;