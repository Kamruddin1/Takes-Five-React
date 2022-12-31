
let page = 1; // current page
const pageSize = 5; // number of items to display per page

const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');
const numberDisplay = document.getElementById('number-display');

function displayPage() {
  // clear current display
  numberDisplay.innerHTML = '';

  // calculate start and end indices for the current page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // get the numbers to display on this page
  const numbers = [];
  for (let i = startIndex + 1; i <= endIndex; i++) {
    numbers.push(i);
  }

  // display the numbers
  numbers.forEach(number => {
    const div = document.createElement('div');
    div.innerHTML = number;
    numberDisplay.appendChild(div);
  });

  // enable/disable back button based on current page
  if (page === 1) {
    backButton.disabled = true;
  } else {
    backButton.disabled = false;
  }
}

// display the initial page on load
displayPage();

// handle clicks on the back button
backButton.addEventListener('click', () => {
  if (page > 1) {
    page--;
    displayPage();
  }
});

// handle clicks on the next button
nextButton.addEventListener('click', () => {
  page++;
  displayPage();
});
