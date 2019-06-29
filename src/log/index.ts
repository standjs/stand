const log = {
  info (...msgs: any[]) {
    console.log(...msgs)
  },
  error (...msgs: any[]) {
    console.error(...msgs)
  }
}

export default log
