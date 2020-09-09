import { DefaultTemplate } from './user'

export function Task(data) {
  DefaultTemplate.call(this, data)
  this.completed = data.completed

  this.isComplete = () => this.completed ? 'checked' : ''

  this.template = function () {
    return (`
      <label class="checkbox task">
        <input type="checkbox" ${this.isComplete()}>
        <p>${this.id}: ${this.title}</p>
      </label>
    `)
  }
}
