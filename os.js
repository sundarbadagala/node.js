const os = require('node:os')

//os
// cpu info
// memory
// home/temp dir

const platform = os.platform()
console.log("platform", platform)

const homedir = os.homedir()
console.log("homedir", homedir)

const freememory = os.freemem()
console.log("free memory", freememory / 1024 / 1024 / 1024)

const totalmemory = os.totalmem()
console.log("total memory", totalmemory / 1024 / 1024 / 1024)

const release = os.release()
console.log("release", release)

const type = os.type()
console.log("type", type)

const cpus = os.cpus()
console.log("cpus", cpus.length)

const uptime = os.uptime()
console.log("uptime", uptime)

const hostname = os.hostname()
console.log("hostname", hostname)

const networkInterfaces = os.networkInterfaces()
console.log("networkInterfaces", networkInterfaces)