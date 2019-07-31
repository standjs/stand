import *  as Koa from 'koa'
import registerTo from './middleware'

import { Application } from 'koa'

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
    const app: Koa = new Application()

    const middlewareOptions = this.getMiddlewareOptions(options)

    registerTo(app, middlewareOptions)

    app.listen(this.port, () => {
      console.log('server has been open ')
    })

    app.on('error', (error: any, ctx: Koa.Context) => {
      console.log(error)
    })
  }
}

export default ServerCore