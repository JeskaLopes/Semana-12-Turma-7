var usuarios = [
    {
      nome: 'Bruna',
      habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
      nome: 'Gabriela',
      habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
  ];

function exibeHabilidade(usuario){
    for(element of usuario){
        console.log(`A ${elemento.nome} possui as habilidades: ${elemento.habilidade.join('-')}`)
    }
}

//console.log(`A ${usuarios.nome[0]}`);