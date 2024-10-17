document.getElementById("cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Validação de CPF
    const cpf = document.getElementById("cpf").value;
    if (!validarCPF(cpf)) {
        document.getElementById("mensagem").innerText = "CPF inválido!";
        return;
    }
    // Consumo de API fictícia para buscar endereço baseado no CPF (aqui poderia ser substituído por uma API real)
    fetch(`https://viacep.com.br/ws/${cpf}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById("mensagem").innerText = "Erro ao buscar o endereço!";
            } else {
                document.getElementById("endereco").value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
                document.getElementById("mensagem").innerText = "Cadastro realizado com sucesso!";
            }
        })

 });
 function validarCPF(cpf) {
    // Função simples de validação de CPF
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove tudo que não é número
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto > 9 ? 0 : resto;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto > 9 ? 0 : resto;
    return digito1 === parseInt(cpf.charAt(9)) && digito2 === parseInt(cpf.charAt(10));
 }
 
 