import { config } from './wdio.conf.js'

export const configFirefox = {
  ...config,

  maxInstances: 1,

  capabilities: [{
    browserName: 'firefox',

    'moz:firefoxOptions': {
      args: ['-headless']
    }
  }]
}

export { configFirefox as config }