export const TOGGLE_DEVICE = 'TOGGLE_DEVICE'

export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'

export const EXPAND_MENU = 'EXPAND_MENU'

export default {
  SET_USER: (state, user) => {
    state.user = user
  },
  UPDATE_TYPE: (state, type) => {
    state.type = type
  },
  UPDATE_DATA: (state, data) => {
    state.data = data
  }
}
