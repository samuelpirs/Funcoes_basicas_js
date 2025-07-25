function RetornarMaior (nome1, nome2) {
    if (nome1.length > nome2.length) {
        return nome1;
    } else if (nome2.length > nome1.length) {
        return nome2;
    } else {
        return "tamanhos iguais"
    }
}

console.log(RetornarMaior("jorge", "jorge"));