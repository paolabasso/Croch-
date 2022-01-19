const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `
  #home,
  #crocheteiras, .cards, .card,
  #tutoriais, .videos, .video,
  footer
  `,
  { interval: 50 }
)
