const cliente = {
    nome: "Guilherme",
    idade: 24,
    cpf: "11323212323",
    email: "guicastro@uepg.br"
}; 

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`)




const chaves = ["nome", "idade", "cpf", "email", ""];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]} `)
})