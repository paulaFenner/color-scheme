function generateColorScheme() {
  const colorHex = document.getElementById('seed-color').value.slice(1);
  const schemeMode = document.getElementById('scheme-mode').value;

  fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${schemeMode}&count=5`)
    .then((res) => res.json())
    .then((data) => renderColorScheme(data))
    .catch((e) => {
      console.error('There was a problem with the fetch operation:', e);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  generateColorScheme();
});

// // Submit on the form will work either by clicking the submit button or pressing Enter in an input field
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  generateColorScheme();
});

document.querySelector('main').addEventListener('click', function (e) {
  if (e.target.dataset.color) {
    navigator.clipboard.writeText(e.target.dataset.color).then(() => {
      showToast();
    });
  }
});

function renderColorScheme(data) {
  const html = data.colors
    .map(
      (color) => `
        <div class="color-container">
            <div class="color-display" style="background-color:${color.hex.value}" data-color="${color.hex.value}"></div>
            <p class="color-hex-code" data-color="${color.hex.value}">${color.hex.value}</p>
        </div>
        `
    )
    .join('');

  document.querySelector('.scheme-color-container').innerHTML = html;
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}
