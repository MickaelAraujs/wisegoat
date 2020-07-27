const adviceContainer = document.querySelector('.advice-container')
const adviceElement = document.querySelector('.advice-container div h2')
const loader = document.querySelector('p')

async function getAdvice() {
  const advicePromise = await fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())

  const { advice } = advicePromise.slip
  return advice
}

getAdvice().then(text => {
  adviceElement.innerHTML = text

  adviceContainer.classList.toggle('loading')
  loader.classList.toggle('loading-active')
})
