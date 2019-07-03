import Koa, { Context } from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', (ctx: Context, next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = '<div>lalala</div>'
})

app.use(router.routes())

app.listen('3000', () => {
  console.log('server has start')
})