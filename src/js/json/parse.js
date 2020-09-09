import { Task } from './classes/task'
import { Post } from './classes/post'
import { Album } from './classes/albums'

export async function getAndParseItems(type, reqParams = '') {
  const typeInfo = getTypeAssets(type)
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/1/${typeInfo.url}?${reqParams}`)
  const json = await res.json()
  const parsedItems = json.map(item => new typeInfo.useClass(item).render())

  return parsedItems.join('')
}

function getTypeAssets(type) {
  switch (type) {
    case 'posts':
      return {url: 'posts', useClass: Post}
    case 'tasks':
      return {url: 'todos', useClass: Task}
    case 'albums':
      return {url: 'albums', useClass: Album}
  }
}
