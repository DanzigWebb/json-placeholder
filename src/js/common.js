import 'regenerator-runtime/runtime'
import './json/parse'
import { Sidebar } from './sidebar/sidebar'
import { renderItems } from './json/init'
import { Dialog } from './dialog/dialog'

document.addEventListener('DOMContentLoaded', () => {
  // sidebar
  const sidebar = sidebarInit()
  renderItems(() => sidebar.close())
  // dialog
  dialogInit()
})

function sidebarInit() {
  const trigger = document.getElementById('sidebar-trigger')
  const sidebar = new Sidebar('.sidebar')

  trigger.addEventListener('click', () => sidebar.toggle())
  return sidebar
}

function dialogInit() {
  const trigger = document.getElementById('dialog-trigger')
  const dialog = new Dialog({
    title: 'Im Dialog',
    message: 'Confirm me please!'
  })

  const openDialog = () => dialog.open()
      .then(res => res && alert('Success!'))

  trigger.addEventListener('click', openDialog)
}
