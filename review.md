## What you've done well

- HTML markup is of excellent quality.
  Includes all necessary meta tags
  Includes semantic tags
  Indented
  Commented when necessary
  Mindful of accessibility with aria-label
- very nice, subtle hover effects (consider adding a transition property for a smoother efffect)
- excellent understanding and use of a fetch request process
- including a catch() block is a great addition
- use of .map() to generate HTML
- use of small, modular functions with aparameters and arguments
- use of data attributes to pass data to the markup

All in all, very solid display of technical skills and great app. Congrats!

## What could be improved

- UX
- [] Generate a palette on load: looks better than an empty screen, in my opinion. Hint: use the `value` attribute in the input

- HTML
- [] Trailing slashes on self-closing tags are not necessary
  <input type="color" name="seed-color" class="seed-color" id="seed-color" aria-label="Pick a color" />
- [] Accessibility: The color divs are not keyboard-accessible. Can you figure out why? Do you know of a solution to fix that? How can the click listener be modified to handle keyboard navigation?
- [] Accessibility: using semantic tag + aria-label in the color divs

An example output

`

<figure class="color-container" tabindex="0">
  <div class="color-display" aria-label="Red: #FF0000" style="background-color:#FF0000"></div>
  <figcaption class="color-hex-code">#FF0000</figcaption>
</figure>
`

- JS
- [] Security: Using innerHTML can be a security risk if the data is not trusted. Consider using createElement and appendChild for better safety.

## Stretch goal / Challenge

- Once you've finished the module, refactor this app using async / await syntax + try/catch block
