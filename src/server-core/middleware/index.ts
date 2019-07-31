import * as Koa from 'koa'
import initiators from './initiators/index'

interface InitiatorsOption {
  baseData: boolean
  logger: boolean
  requestId: boolean
  gatedToken: boolean
}

interface BlockersOption {
  cors: boolean
  csrf: boolean
  favicon: boolean
  status: boolean
  statics: boolean
}

interface PrePocessorsOptions {
  resolve: boolean
}

interface ProcessorsOptions {
  diagnose: boolean
  method: boolean
  processor: boolean
}

interface SweepersOptions {
  temporaryFiles: boolean
  baseData: boolean
  logger: boolean
  requestId: boolean
}

interface MiddlwareOptions {
  initiators: InitiatorsOption
  blockers: BlockersOption
  preProcessors: PrePocessorsOptions
  processors: ProcessorsOptions
  sweepers: SweepersOptions
}

const defaultOption: MiddlwareOptions = {
  initiators: {
    baseData: true,
    logger: true,
    requestId: true,
    gatedToken: true
  },
  blockers: {
    cors: true,
    csrf: true,
    favicon: true,
    status: true,
    statics: true
  },
  preProcessors: {
    resolve: true
  },
  processors: {
    diagnose: true,
    method: true,
    processor: true
  },
  sweepers: {
    temporaryFiles: true,
    baseData: true,
    logger: true,
    requestId: true
  }
}

function registerTo(koaApp: Koa, options: any): void {
  Object.assign(options, defaultOption)

  initiators(koaApp)
}

export default registerTo