import { config } from './wdio.conf.js'

export const configEdge = {
  ...config,

  maxInstances: 1,

  capabilities: [{
    browserName: 'MicrosoftEdge',

    'ms:edgeOptions': {
      args: [
        '--headless',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--window-size=1920,1080'
      ]
    }
  }]
}

export { configEdge as config }