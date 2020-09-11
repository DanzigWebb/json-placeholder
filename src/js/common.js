import 'regenerator-runtime/runtime'
import './json/parse'
import { Sidebar } from './sidebar/sidebar'
import { renderItems } from './json/init'
import { Dialog } from './dialog/dialog'
import { DialogError } from './dialog/dialog-error'

document.addEventListener('DOMContentLoaded', () => {
  // sidebar
  const sidebar = sidebarInit()
  renderItems(() => sidebar.close())
  // dialogs
  dialogInit()
  dialogErrorInit()
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

function dialogErrorInit() {
  const trigger = document.getElementById('dialog-trigger-error')
  const dialog = new DialogError({
    title: 'Error',
    message: '500 server error'
  })

  const openDialog = () => dialog.open()
      .then(res => res && alert('Success!'))

  trigger.addEventListener('click', openDialog)
}
