import { config } from './wdio.conf.js'

export const configChrome = {
  ...config,

  maxInstances: 1,

  capabilities: [{
    browserName: 'chrome',

    'goog:chromeOptions': {
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

export { configChrome as config }