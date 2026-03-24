exports.paginaInicial = (req, res) => {
    res.render('index')
};

exports.trataPost = (req, res) => {
    res.send('Sou sua rota de post')
};
