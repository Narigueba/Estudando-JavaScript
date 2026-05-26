class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
        this.carros = this.carregarCarros();
        this.carrosContainer = document.querySelector('.carros-container');
        this.renderizarCarros();
        this.carroEditando = null;
        
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.checaCampos();

        if(camposValidos) {
            const carro = this.pegarDadosFormulario();

            if(this.carroEditando !== null) {
                this.carros[this.carroEditando] = carro;
                this.carroEditando = null;
                alert('Carro atualizado com sucesso');
            } else {
                if(this.placaJaExiste(carro.placa)) {
                    alert('Essa placa ja existe')
                    return;
                }
            }

            this.carros.push(carro);
            alert('Carro cadastrado com sucesso');
        }

        this.salvarCarros();
        this.renderizarCarros();
        this.formulario.reset();
    }

    checaCampos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode ser vazio`);
                valid = false;
            }

            if(campo.classList.contains('ano-modelo')) {
                if(!this.validaAno(campo)) valid = false;
            }

            if(campo.classList.contains('placa')) {
                if(!this.validaPlaca(campo)) valid = false;
            }

            if(campo.classList.contains('cor')) {
                if(!this.validaCor(campo)) valid = false;
            }
        }

        return valid
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    validaAno(campo) {
        const ano = Number(campo.value);
        let valid = true;
        
        if(isNaN(ano) || campo.value.trim() === '') {
            this.criaErro(campo, 'Insira somente números.');
            valid = false;
        }

        return valid;
    }

    validaPlaca(campo) {
        let valid = true;
        const placa = campo.value.trim().toUpperCase();

        if(placa.length !== 8) {
            this.criaErro(campo, 'A placa precisa ter 7 caracteres (ABC-1D34)')
            valid = false;
            return valid;
        };

        const campoArray = Array.from(placa);

        // Posição ABC
        for(let i = 0; i < 3; i++) {
            if(!/[A-Z]/.test(campoArray[i])) {
                this.criaErro(campo, `Posição ${i+1} deve ser letra`);
                valid = false;
            }
        }
        if(campoArray[3] !== '-') {
            this.criaErro(campo, 'Falta o hífen após as 3 letras');
            valid = false;
        }

        if(!/\d/.test(campoArray[4])) {
            this.criaErro(campo, 'Posição 5 deve ser número');
            valid = false;
        }

        if(!/[A-Z0-9]/.test(campoArray[5])) {
            this.criaErro(campo, 'Posição 6 deve ser uma letra ou um número');
            valid = false;
        }

        for(let i = 6; i < 8; i++) {
            if(!/\d/.test(campoArray[i])) {
                this.criaErro(campo, `Posição ${i+1} deve ser um número`)
                valid = false;
            }
        }
        
        return valid;
    }

    validaCor(campo) {
        let valid = true;
        const cor = campo.value.trim();

        if(!/^[A-Za-zÀ-ÿ\s]+$/.test(cor)) {
            this.criaErro(campo, 'A cor deve conter apenas letras');
            valid = false;
        }

        return valid;
    }

    pegarDadosFormulario() {
        return {
            marca: document.querySelector('.marca').value.trim(),
            modelo: document.querySelector('.modelo').value.trim(),
            anoModelo: document.querySelector('.ano-modelo').value.trim(),
            placa: document.querySelector('.placa').value.trim(),
            cor: document.querySelector('.cor').value.trim()
        };
    }

    renderizarCarros() {
        this.carrosContainer.innerHTML = '';
        
        if(this.carros.length === 0) {
            this.carrosContainer.innerHTML = '<div class="vazio"> Nenhum carro cadastrado ainda"'
        }

        this.carros.forEach((carro, index) => {
                    const carroDiv = document.createElement('div');
                    carroDiv.classList.add('carro-item');
                    carroDiv.innerHTML = `
                        <div class="carro-info">
                            <p><strong>Marca:</strong> ${carro.marca}</p>
                            <p><strong>Modelo:</strong> ${carro.modelo}</p>
                            <p><strong>Ano:</strong> ${carro.ano} | <strong>Placa:</strong> ${carro.placa} | <strong>Cor:</strong> ${carro.cor}</p>
                        </div>
                    <div class="carro-acoes">
                        <button class="btn-editar" onclick="valida.editarCarro(${index})">Editar</button>
                        <button class="btn-excluir" onclick="valida.excluirCarro(${index})">Excluir</button>
                    </div>
                `;
            this.carrosContainer.appendChild(carroDiv);
        });
    }

    placaJaExiste(placa) {
        return this.carros.some((carro, index) => {
            if(index === this.carroEditando) return false;
            return carro.placa === placa;
        })
    }

    editarCarro(index) {
        const carro = this.carros[index];
        this.carroEditando = index;

        document.querySelector('.marca').value = carro.marca;
        document.querySelector('.modelo').value = carro.modelo;
        document.querySelector('.ano-modelo').value = carro.anoModelo;
        document.querySelector('.placa').value = carro.placa
        document.querySelector('.cor').value = carro.cor;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    salvarCarros() {
        localStorage.setItem('carros', JSON.stringify(this.carros));
    }

    carregarCarros() {
        const carros = localStorage.getItem('carros');
        return carros ? JSON.parse(carros) : [];
    }

}

const valida = new ValidaFormulario();