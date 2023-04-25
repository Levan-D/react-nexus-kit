#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Set the source and destination paths
const sourcePath = __dirname;
const destinationPath = process.cwd();

// Function to copy files and folders recursively
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to);
  }

  const files = fs.readdirSync(from);

  files.forEach(file => {
    const fromPath = path.join(from, file);
    const toPath = path.join(to, file);
    const stat = fs.statSync(fromPath);

    if (stat.isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath);
    }
  });
}

// Exclude certain files from being copied, such as cli.js and package.json
const excludedFiles = ['cli.js', 'package.json', 'package-lock.json'];

excludedFiles.forEach(file => {
  const filePath = path.join(sourcePath, file);
  if (fs.existsSync(filePath)) {
    const index = files.indexOf(file);
    if (index > -1) {
      files.splice(index, 1);
    }
  }
});

// Copy the template files and folders to the user's working directory
copyFolderSync(sourcePath, destinationPath);
