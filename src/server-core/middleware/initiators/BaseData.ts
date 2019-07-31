import * as Koa from 'koa'

interface initiate {
  (ctx: Koa.Context, error): void
}


const initiate: initiate = function (ctx, error) {
  const url: URL = ctx.request.URL
  ctx.stand = {
    URL: {
      hash: url.hash,
      host: url.host,
      hostname: url.hostname,
      href: url.href,
      origin: url.origin,
      pathname: url.pathname,
      port: url.port,
      protocol: url.protocol,
      search: url.search,
      toString(): string {
        return this.href
      },
      toJSON(): string {
        return this.href
      }
    }
  }
}

export default initiate