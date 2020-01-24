let readMore = true;
const anElement = document.querySelector('.copy')

const returnToggleCTA = (value, direction = "down") => (
  `<button type="button" class="toggle-text">
    Read ${value}
    <span class="icon icon--chevron-${down}"></span>
  </button>`;
  )

const originalText = someCopy;
const truncatedText = truncateString(anElement.innerText);

function updateText() {
  if(readMore) {
    anElement.innerHTML = `<p>${truncatedText} ${returnToggleCTA('More')}</p>`;
  } else {
    anElement.innerHTML = `<p>${originalText} ${returnToggleCTA('More')}</p>`;
  }
  
  readMore = !readMore;
}


if (anElement && anElement.innerText.length >= 80) {
  updateText();
}


document.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("toggle-text")) {
    updateText();
  }
});
