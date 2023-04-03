export default function ({ store, route, redirect }) {
  const user = store.state.authentication.user
  const blockedRoute = /\/dashboard\/*/g
  let admin
  user !== null ? admin = user.role === 'admin' : admin = false
  const adminBlock = /\/admin\/*/g

  if (!user && route.path.match(blockedRoute)) {
    // redirect('/login')
    console.log('nothing')
  }

  if (!admin && route.path.match(adminBlock)) {
    // redirect('/login')
    console.log('nothing')
  }
}
