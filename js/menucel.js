// Seleciona o elemento com a classe 'hamburger' e armazena na variável 'hamburguer'
const hamburguer = document.querySelector('.hamburger');

// Seleciona o elemento com a classe 'l2' e armazena na variável 'l2'
const l2 = document.querySelector('.l2');

// Seleciona o elemento com a classe 'links_cel' e armazena na variável 'linccell'
const linccell = document.querySelector('.links_cel');

// Inicializa uma variável booleana 'verifica' como 'true'
let verifica = true;

// Define uma função a ser executada quando o elemento 'hamburguer' é clicado
hamburguer.onclick = (ele) => {
    // Alterna a classe 'active' no elemento 'hamburguer'
    hamburguer.classList.toggle('active');
    
    // Alterna a classe 'opaco' no elemento 'l2'
    l2.classList.toggle('opaco');

    // Verifica o estado da variável 'verifica' e executa a ação correspondente
    if (verifica == true) {
        // Move o elemento 'linccell' para a posição inicial
        linccell.style.transform = 'translateX(0px)';
        // Altera o valor da variável 'verifica' para 'false'
        verifica = false;
    } else {
        // Move o elemento 'linccell' para fora da tela
        linccell.style.transform = 'translateX(-2000px)';
        // Altera o valor da variável 'verifica' para 'true'
        verifica = true;
    }
}

// Imprime o elemento 'hamburguer' no console do navegador
console.log(hamburguer);
   