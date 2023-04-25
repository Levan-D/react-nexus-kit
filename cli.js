#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const projectName = process.argv[2];
const templatePath = path.join(__dirname, 'src');
const projectPath = path.join(process.cwd(), projectName);

if (!projectName) {
  console.error('Please provide a project name.');
  process.exit(1);
}

fs.copySync(templatePath, projectPath);

console.log('Installing dependencies...');
execSync(`cd ${projectName} && npm install`);

console.log('Project setup complete!');

