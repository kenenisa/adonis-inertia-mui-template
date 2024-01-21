import Route from '@ioc:Adonis/Core/Route'




Route.get('/', async ({ inertia }) => {
  const user = await new Promise((res) => setTimeout(() => res('Keni'), 3000))
  return inertia.render('app', { user })
})
Route.get('/app/:page', async ({ inertia, request }) => {
  const { page } = request.params()
  return inertia.render(page)
})
