const arrayDeNumeros = [13, 24, 8, 79, 69, 1, 45, 10]
console.log(arrayDeNumeros)

const multiplicaPorCinco = arrayDeNumeros.map((item) => {
    const quintuplos = item * 5
    return quintuplos
})

console.log(multiplicaPorCinco)

const dividePorDois = arrayDeNumeros.map((item) => {
    const metades = item / 2
    return metades
})

console.log(dividePorDois)
