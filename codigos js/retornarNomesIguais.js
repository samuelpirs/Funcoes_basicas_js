function retornarMaiorTamanho(nameOne, nameTwo) {
    if(nameOne.length > nameTwo.length) {
        return nameOne;
    } else if(nameTwo.length > nameOne.length) {
        return nameTwo;
    } else {
        return "Nomes iguais";
    }
}

console.log(retornarMaiorTamanho("Maçaaaaaaaaaaaa", "Tiooooo"));