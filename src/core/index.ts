import Koa from 'koa'
import log from '../log'

class Server {
  private port: number
  constructor ({ port }: { port: number}) {
    this.port = port
  }
  start () {
    const app = new Koa()

    app.use(async ctx => {
      ctx.body = `${ctx.request.host}${ctx.req.url}`
    })

    // 错误监听在 listen 之前时，koa 不会再默认输出错误
    app.on('error', (error) => {
      log.error(`发生错误!!!`, error)
    })

    app.listen(this.port, () => {
      log.info(`服务已在 ${this.port} 启动`)
    })

  }
}

export default Server