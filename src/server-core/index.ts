import *  as Koa from 'koa'
import registerTo from './middleware'
import KoaApp from 'koa'

interface Server {
  // new(name: string, port: string): void
  getMiddlewareOptions: <T>(options: T) => T
  start: (options: any) => void
}

class ServerCore implements Server {
  private name: string
  private port: string
  constructor (name: string, port: string) {
    this.name = name
    this.port = port
  }

  getMiddlewareOptions(options: any) {
    return options
  }

  start(options: any) {
    const app: any = new KoaApp()

    const middlewareOptions = this.getMiddlewareOptions(options)

    registerTo(app, middlewareOptions)

    app.listen(this.port, (ctx: Koa.Context) => {
      console.log('server has been open ')
    })

    app.on('error', (error: never, ctx: Koa.Context) => {
      console.log(error)
    })
  }
}

export default ServerCore