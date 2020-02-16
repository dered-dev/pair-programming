const taks = arr => arr.join()

module.exports = {
  'hooks': {
    'pre-commit': taks([
      'npm run standard'
    ])
  }
}