const soma = function(x,y){
    return x +y
}

const imprimirResultado = function (a, b, op = soma){
    console.log(op(a,b))
}

imprimirResultado(3,15)
imprimirResultado(35, 14, function(x,y){
    return x -y
})
imprimirResultado(3,4,(x,y) => x*y)

const pessoa = {
    falar: function(){
        console.log('O começo é difícil')
    }
}

pessoa.falar()