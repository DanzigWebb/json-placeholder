export class Overlay {
  overlay

  show() {
    this.overlay = document.createElement('div')
    this.overlay.classList.add('overlay')
    return this.setListener()
  }

  destroy() {
    this.overlay && this.overlay.remove()
  }

  setListener() {
    return new Promise(resolve => {
      document.body.append(this.overlay)
      this.overlay.addEventListener('click', (e) => {
        this.destroy()
        resolve(this)
      }, {once: true})
    })
  }
}
