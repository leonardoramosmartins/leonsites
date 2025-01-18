// Seleciona o elemento com o atributo 'data-shrink' definido como 'yes'
const content = document.querySelector('[data-shrink="yes"]');

// Seleciona o elemento 'span' dentro do elemento com 'data-shrink' definido como 'yes'
const span = document.querySelector('[data-shrink="yes"] span');

// Adiciona a classe 'aparecer' ao elemento 'span'
span.classList.add('aparecer');

// Define um intervalo para alternar a classe 'shrink' no elemento 'content' a cada 5000 milissegundos (5 segundos)
setInterval(function () {
  content.classList.toggle('shrink');
}, 5000);

// Define um atraso de 100 milissegundos e, em seguida, inicia um intervalo para alternar a classe 'aparecer' no elemento 'span' a cada 5000 milissegundos
setTimeout(function () {
  setInterval(function () {
    span.classList.toggle('aparecer');
  }, 5000);
}, 100);

// Repete o mesmo processo para outro conjunto de elementos com atributos 'data-shrinki' e 'data-shrinki="yesi"'
const contenti = document.querySelector('[data-shrinki="yesi"]');
const spani = document.querySelector('[data-shrinki="yesi"] span');
spani.classList.add('apareceri');

setInterval(function () {
  contenti.classList.toggle('shrinki');
}, 5000);

setTimeout(function () {
  setInterval(function () {
    spani.classList.toggle('apareceri');
  }, 5000);
}, 100);
