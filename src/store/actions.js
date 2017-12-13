import * as types   from './mutation-types'

export const toggleNavbar = ({ commit },
  opened) => commit(types.TOGGLE_NAVBAR, opened)

export const toggleDevice = ({ commit },
  device) => commit(types.TOGGLE_DEVICE, device)

export const expandMenu = ({ commit },
  menuItem) => {
  if (menuItem) {
    menuItem.expanded = menuItem.expanded || false
    commit(types.EXPAND_MENU, menuItem)
  }
}
