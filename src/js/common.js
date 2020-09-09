import 'regenerator-runtime/runtime'
import './json/parse'
import { Sidebar } from './sidebar/sidebar'
import { renderItems } from './json/init'

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = sidebarInit()
  renderItems(() => sidebar.close())
})

function sidebarInit() {
  const trigger = document.getElementById('sidebar-trigger')
  const sidebar = new Sidebar('.sidebar')

  trigger.addEventListener('click', () => sidebar.toggle())
  return sidebar
}
