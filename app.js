const readline = require('readline-sync');
const livros = require('./database');

// Simular a entrada de uma pessoa usuária
const entradaInicial = readline.question('Deseja buscar um livro? (S/N) ');

// Se for sim, mostrar as categorias disponíveis, pergunta qual categoria ela escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis:');

  console.log('----------------------------------');
  livros.map(categorias => {
    console.log(categorias.categoria);
    console.log('----------------------------------');
  });

  console.log('\n');
  const entradaCategoria = readline.question('Qual categoria você escolhe: ');
  const retornoDaEscolha = livros.filter(livro => livro.categoria === entradaCategoria);
  console.table(retornoDaEscolha);
}

// Se for não, mostrar todos os livros em ordem crescente pela quantidade de páginas
if (entradaInicial.toLocaleUpperCase() === 'N') {
  const livrosOrdenadosPorQuantidadePaginas = livros.sort((a, b) => a.paginas - b.paginas);

  console.log('Esses são todos os livros disponíveis:');
  console.table(livrosOrdenadosPorQuantidadePaginas);
}