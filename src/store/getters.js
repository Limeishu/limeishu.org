const app               = (state) => state.app
const user              = (state) => state.user
const device            = (state) => state.app.device
const navbar            = (state) => state.app.navbar
const menuitems         = (state) => state.menu.items
const componententry    = (state) => {
  return state.menu.items.filter((c) => c.meta && c.meta.label === 'Components')[0]
}

export {
  app,
  device,
  navbar,
  menuitems,
  componententry,
  user
}
