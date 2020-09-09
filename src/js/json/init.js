import { getAndParseItems } from './parse'


export function renderItems(afterCall) {
  const itemsTrigger = document.querySelectorAll('.sidebar .menu-list a')
  const wrapper = document.querySelector('.wrapper')

  renderByTrigger('posts')

  itemsTrigger.forEach(btn => (
      btn.addEventListener('click', ({target: currentBtn}) =>
          renderByTrigger(currentBtn.dataset.items)
      )
  ))

  async function renderByTrigger(trigger) {
    setActiveClass(trigger)
    render(getAndParseItems(trigger))
        .then(afterCall)
  }

  async function render(html) {
    wrapper.innerHTML = await html
  }

  function setActiveClass(trigger) {
    itemsTrigger.forEach(item => {
      if (item.dataset.items === trigger) {
        item.classList.add('is-active')
      } else {
        item.classList.remove('is-active')
      }
    })
  }
}

