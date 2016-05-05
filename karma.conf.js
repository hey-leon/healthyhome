module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['nyan'],
    browsers: ['PhantomJS'],
    files: [
      './_tests/**/*js'
    ]
  })
}
