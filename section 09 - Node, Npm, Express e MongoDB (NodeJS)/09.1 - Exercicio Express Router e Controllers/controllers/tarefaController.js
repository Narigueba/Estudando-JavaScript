exports.index = (req, res) => {
    res.send(`
        <h1> Lista de tarefas </h1>

        <form action="/tarefas" method="POST">
        Tarefa: <input type="text" name="tarefa" placeholder="tarefa">
        <button> Adicionar </button>
        </form>
        <hr>
        <ul>
            <li><a href="/"> Voltar para a pagina inicial </a></li>
            <li><a href="/tarefas/1"> Mostrar tarefa </a></li>
            <li><a href="/tarefas/12/editar"> Editar tarefa </a></li>
        </ul>
    `);
};

exports.criar = (req, res) => {
    console.log(req.body)
    res.send(`Tarefa ${req.body.tarefa} criada com sucesso!.`)
};

exports.mostrar = (req, res) => {
    console.log(req.params)
    res.send(`Aqui está sua tarefa: ${req.params.id}`)
}

exports.editar = (req, res) => {
    console.log(req.params)
    res.send(`Editando tarefa ID: ${req.params.id}`)
}