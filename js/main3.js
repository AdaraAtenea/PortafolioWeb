function toggleCard(card) {
  const allCards = document.querySelectorAll('.project-card');
  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('expanded');
    }
  });
  card.classList.toggle('expanded');
}      