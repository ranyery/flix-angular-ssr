// @ts-check

const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');

const path = require('path');
const { existsSync, readdirSync, lstatSync } = require('fs');

function fromDir(startPath, filter) {
  if (!existsSync(startPath)) {
    console.log('no dir ', startPath);
    return;
  }

  let files = readdirSync(startPath);
  for (const element of files) {
    let filename = path.join(startPath, element);
    let stat = lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter);
    } else if (filename.endsWith(filter)) {
      minify({
        compressor: htmlMinifier,
        input: filename,
        output: filename,
        callback: (err) => {
          const [icon, result] = [err ? '🔴' : '🟢', err ? 'Error' : 'Success'];
          console.log(`${icon} ${result} minify: ${filename}`);
        },
      });
    }
  }
}

fromDir('./dist/browser', '.html');
