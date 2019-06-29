import Server from './core'
import config from './config'

const server = new Server({port: config.port})
server.start()