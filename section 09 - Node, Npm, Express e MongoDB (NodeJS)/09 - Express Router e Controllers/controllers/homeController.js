exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Cliente: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        <a href="http:/contato"> Contato </a>   
    `)
};

exports.trataPost = (req, res) => {
    res.send('Sou sua rota de post')
};
