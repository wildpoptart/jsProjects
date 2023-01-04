function generateCard() {
  // Get the form element
  var form = document.getElementById('cmykForm');

  // Get the value of each input field
  var cyan = form.elements['cyan'].value = Math.floor(Math.random() * 101);
  var magenta = form.elements['magenta'].value = Math.floor(Math.random() * 101);
  var yellow = form.elements['yellow'].value = Math.floor(Math.random() * 101);
  var key = form.elements['key'].value = Math.floor(Math.random() * 101);

  // Convert CMYK values to RGB values
  var red = Math.round(255 * (1 - cyan / 100) * (1 - key / 100));
  var green = Math.round(255 * (1 - magenta / 100) * (1 - key / 100));
  var blue = Math.round(255 * (1 - yellow / 100) * (1 - key / 100));

  // Create a new card element
  var card = document.createElement('div');
  card.classList.add('card');
  card.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

  // Add the card to the card container
  var cardContainer = document.getElementById('cardContainer');
  cardContainer.insertBefore(card,cardContainer.firstChild);
}
