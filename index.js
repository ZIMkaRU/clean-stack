'use strict';
module.exports = stack => stack.replace(/\s+at.*\((?:(?:internal\/)?\w+\.js:\d+:\d+|native)\)/g, '');