import { Overlay } from './overlay'

export class Sidebar {
  constructor(selector) {
    this.ref = document.querySelector(selector)
    this.overlay = new Overlay()
  }

  isOpen = false

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.isOpen = true
    this.ref.classList.add('active')
    this.overlay.show()
        .then(_ => this.close())
  }

  close() {
    this.isOpen = false
    this.ref.classList.remove('active')
    this.overlay.destroy()
  }
}
