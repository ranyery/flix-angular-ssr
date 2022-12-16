const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');

minify({
  compressor: htmlMinifier,
  input: './dist/browser/index.html',
  output: './dist/browser/index.html',
  callback: function (err) {
    console.log(err ? '🔴 Minify error' : '🟢 Minify success');
  },
});
