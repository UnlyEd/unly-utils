import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import fs from 'fs';

const files = fs.readdirSync('./src', { withFileTypes: true });
const filesToKeep = files.filter(fileName => !/^\w*..test.js$/.test(fileName));

const plugins = [
  babel(),
  resolve(),
  commonjs(),
];

const watch = {
  exclude: 'node_modules/**',
  include: 'src/**',
};

const filesConfiguration = (files) => {
  return files.map(fileName => {
    return {
      input: `./src/${fileName}`,
      output:
        {
          file: `./lib/${fileName}`,
          format: 'cjs',
        },
      plugins,
      watch,
    };
  });
};

export default filesConfiguration(filesToKeep);
