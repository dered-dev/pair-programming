const taks = arr => arr.join()

module.exports = {
  'hooks': {
    'precommit': taks([
      'npm run standard'
    ])
  }
}