function RetornarContrario(nomeContrario) {

    let invertido = '';

    for (let i = nomeContrario.length - 1; i >= 0; i--) {
        invertido += nomeContrario[i];
    }
    return invertido;
}

console.log(RetornarContrario("socorro"));
