export function User(userId) {
  this.userId = userId
}

export function DefaultTemplate(data) {
  User.call(this, data.userId)
  this.title = data.title
  this.id = data.id

  this.render = function () {
    return (`
      <div class="json-item">
        ${this.template()}
      </div>
    `)
  }

  this.template = function () {
    return (`
      <h2>${this.id}: ${this.title}</h2>
    `)
  }
}
