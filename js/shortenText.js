const shortenText = () => {
  const cardTexts = document.querySelectorAll('[data-max-words]');

  cardTexts.forEach((cardText) => {
    const maxWords = parseInt(cardText.getAttribute('data-max-words'));
    const originalText =
      cardText.getAttribute('data-original-text') ||
      cardText.textContent.trim();

    if (!cardText.getAttribute('data-original-text')) {
      cardText.setAttribute('data-original-text', originalText);
    }

    if (window.matchMedia('(max-width: 350px)').matches) {
      const wordsArray = originalText.split(/\s+/);
      if (wordsArray.length > maxWords) {
        const updatedText = wordsArray.slice(0, maxWords).join(' ') + '...';
        cardText.textContent = updatedText;
      } else {
        cardText.textContent = originalText;
      }
    } else {
      cardText.textContent = originalText;
    }
  });
};

window.addEventListener('load', shortenText);
window.addEventListener('resize', shortenText);
