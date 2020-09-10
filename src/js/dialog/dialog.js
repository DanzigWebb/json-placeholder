import { Overlay } from '../overlay/overlay'

export class Dialog {
  constructor(data) {
    this.data = {
      title: data.title || '',
      message: data.message || ''
    }
    this.ref = this.updateRef()
    this.overlay = new Overlay()
  }

  open() {
    return new Promise(resolve => {
      this.appendRef()
      this.createOverlay(resolve)
      this.setListeners(resolve)
    })
  }

  appendRef() {
    document.body.append(this.ref)
  }

  createOverlay(resolve) {
    this.overlay.show().then(() => {
      this.destroy()
      resolve(false)
    })
  }

  destroy() {
    this.ref.remove()
  }

  close() {
    this.overlay.destroy()
    this.destroy()
  }

  setListeners(resolve) {
    this.ref.addEventListener('click', e => setActionListener.call(this, e, resolve))
  }

  updateRef() {
    const div = document.createElement('div')
    div.classList.add('dialog__outer')
    div.innerHTML = this.template()
    return div
  }

  template() {
    return (`
      <div class="dialog">
        <div class="dialog__content">
            <h3 class="dialog__title subtitle is-3">
                ${this.data.title}
            </h3>
            <hr>
            <div class="dialog__message">
                ${this.data.message}
            </div>
            <div class="dialog__control">
                <button data-dialog-action="cancel" class="button">Cancel</button>
                <button data-dialog-action="confirm" class="button is-success">Ok</button>
            </div>
        </div>
      </div>
    `)
  }
}

function setActionListener({target}, resolve) {
  if (target.matches('.button')) {
    const {dialogAction} = target.dataset
    this.close()
    dialogAction === 'confirm'
        ? resolve(true)
        : resolve(false)
  }
}

