import BaseData from './BaseData'
import * as Koa from 'koa'

function register(koaApp: Koa): void {
  const task: any[] = []

  task.push(BaseData)

  async function initiate(ctx: Koa.Context, next: any) {
    task.forEach(item => item(ctx))

    console.log('请求开始了')

    return next()
  }

  koaApp.use(initiate)
}

export default register