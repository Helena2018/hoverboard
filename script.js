const container = document.getElementById('container')
const colors  = ['#ee0979', '#ff6a00', '#DCE35B', '#45B649', '#FC466B', '#3F5EFB', '#40E0D0', '#FF8C00', '#FF0080', '#8A2387', '#E94057', '#FF0080']

const SQUARE = 500

for(let i = 0; i < SQUARE; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseenter', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))
  container.appendChild(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element) {
  element.style.background = ''
  element.style.boxShadow = ''
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}