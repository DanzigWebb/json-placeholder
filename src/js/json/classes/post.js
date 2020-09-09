import { DefaultTemplate } from './user'

export function Post(data) {
  DefaultTemplate.call(this, data)
  this.body = data.body

  this.template = function () {
    return (`
      <h2 class="title is-5">${this.id}: ${this.title}</h2>
      <p>${this.body}</p>
    `)
  }
}
