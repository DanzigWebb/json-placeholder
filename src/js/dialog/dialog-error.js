import { Dialog } from './dialog'

export class DialogError extends Dialog {
  constructor(data) {
    super(data)
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
            <button data-dialog-action="cancel" class="button is-danger">Cancel</button>
          </div>
        </div>
      </div>
    `)
  }
}
