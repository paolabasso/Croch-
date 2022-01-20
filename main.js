const scrollReveal = ScrollReveal({
  origin: '#home',
  distance: '50px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `
 
  #crocheteiras .cards, .card,
  #tutoriais .videos, .video,
  footer
  `,
  { interval: 50 }
)

//Quando o mouse estiver dentro do card, o card precisa ficar cinza claro

var cartoes = document.getElementsByClassName('card')

console.log(cartoes)

function entrar() {
  alert('Deu certo!')
}
//cartoes.addEventListener('mouseenter', entrar)

//entrar()

console.log(cartoes[0])

for (let i = 0; i < cartoes.length; i++) {
  cartoes[i].addEventListener('mouseenter', entrar)
}
