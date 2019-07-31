import * as Koa from 'koa'

function initiate(ctx: Koa.Context) {
  ctx.stand.start = Date.now()
  // ctx.stand.toLog = 
}