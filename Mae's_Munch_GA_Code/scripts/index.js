/* Smooth scroll to redirect users to a specific section */

const anchors = Array.from(document.querySelectorAll('header nav ul li a'));

anchors.forEach((anchor) => {
  return anchor.addEventListener('click', navigateToSection);
});

function navigateToSection(event) {
  event.preventDefault();
  const { currentTarget } = event;
  const sectionId = currentTarget.getAttribute('href');
  const elementToGo = document.querySelector(sectionId);
  elementToGo.scrollIntoView({
    behavior: 'smooth',
  });
}

/* When the user enters their email address and clicks subscribe */

var input = document.getElementById('myInput');
input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementByClass('button').click();
  }
});

/* Scroll up arrow */

const scrollUp = document.querySelector('#scroll-up');

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});


/* Toggle search */

const toggleSearchButton = document.querySelector('#js-search-button');
const header = document.querySelector('header');

toggleSearchButton.addEventListener('click', toggleSearch);

function toggleSearch(event) {
  header.classList.toggle('open-search');
}

