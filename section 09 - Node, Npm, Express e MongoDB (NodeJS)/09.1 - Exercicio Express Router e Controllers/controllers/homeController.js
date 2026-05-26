exports.paginaInicial = (req, res) => {
    res.send(`
        <h1> Sistema de tarefas </h1>
        <ul>
            <li><a href="/tarefas"> Ver todas as tarefas </a></li>
        </ul> 
    `);
};

