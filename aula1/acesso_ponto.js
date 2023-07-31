const cliente = {
    nome: "Guilherme",
    idade: 24,
    cpf: "11323212323",
    email: "guicastro@uepg.br"
}; 

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`)

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`)
