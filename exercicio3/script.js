const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const retornaCaixaAlta = (objeto) => {
    for (let chave in objeto){
        objeto[chave] = objeto[chave].toUpperCase()
    }
    return objeto
}

console.log(retornaCaixaAlta(infosPessoa))

const retornaTexto = (objeto) => {
    for (let chave in objeto){
        console.log(`O valor da propriedade ${chave} é ${objeto[chave]}.`)
    }    
}

retornaTexto(infosPessoa)

const funcaoMista = (objeto, callback) => {
    console.log(objeto , callback(objeto))

}

funcaoMista(infosPessoa, retornaTexto)