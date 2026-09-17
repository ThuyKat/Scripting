import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
// old version <Node 20.11: __dirname doesn't work with ES module so we need to use this instead
// import { fileURLToPath } from 'url';
// READ FILE
/**
 *
 * readFile(): Asynchronously reads the entire contents of a file.
 * Parameters:
 *          - path: file name
 *          - options: default null
 *          - callback: function to be called when error happens or data is present
 *
 */
function readFile(filename) {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.log(`Error reading file ${filename}`);
    } else {
      console.log(data);
    }
  });
}

// WRITE FILE
/*
 * writeFile(): asynchronously writes data to the file, replacing the file if it already exists
 * - Parameters:
 *        -  data: string of buffer
 *        - file: file name
 *        - options : encoding (default 'utf-8') is ignored if data is buffer
 *        - mode : permission access owner/group/other
 *        - error: callback function triggered when error happens
 */
function createFileAndWrite(filename) {
  const data = `File created at ${new Date().toString()}`;
  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.log(`Unable to write to file ${filename}`);
    }
    console.log(`Wrote to ${filename}`);
  });
}

// file path
/**
 * path.dirname(path) : returns the directory name of a path
 * path.extname(path) : returns the file type after last dot(.), or empty string if there is no dot, or the dot itself if there is nothing behind the dot
 * path.join([...paths]): joins all given path segments together  using the platform-specific separator as a delimiter, then normalises the resulting path.
 * path.parse(path): returns an object whose properties represent significant elements of the path: dir, root, base (filename=name+ext), name,ext
 * path.relative(from,to): returns the relative path from "from path" to "to path" based on the curent working directory (from path)
 * __dirname: current directory
 */
function logFilePath(filename) {
  const dirname = import.meta.dirname;
  console.log('the directory I am in now', dirname);
  const filePath = path.join(dirname, filename);
  console.log('full path: ', filePath);
  console.log('file name: ', path.basename(filePath));
  console.log('current directory: ', path.dirname(filePath));
  console.log('file extension: ', path.extname(filePath));
  console.log('path info in json format: ', path.parse(filePath));
}

// read .env file
function readEnvFile() {
  //load env variables into process.env
  dotenv.config();
  const apiKey = process.env.API_KEY;
  const apiUrl = process.env.API_URL;
  console.log('API key:', apiKey);
  console.log('API URL:', apiUrl);
}
// take CLI args
/**
 *
 *  process.argv contains command line arguments
 *   [0] = node path, [1] = script path, [2+] = your arguments
 * node path: '/opt/homebrew/Cellar/node/24.1.0/bin/node',
 * script path: '/Users/katiem/Desktop/scripting-practice/node-script.js'
 */
function runWithCustomFilename() {
  console.log(process.argv);
  const args = process.argv.slice(2);
  const filename = args[0];
  console.log(`Creating file ${filename}...`);
  createFileAndWrite(filename);
}
const filename = `first_file.txt`;
createFileAndWrite(filename);
readFile(`./${filename}`);
logFilePath(filename);
readEnvFile();
runWithCustomFilename();
