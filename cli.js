#!/usr/bin/env node
/** @format */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { cwd } from "node:process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Set the source and destination paths
const sourcePath = path.join(__dirname, "template")
const destinationPath = cwd()

// Function to copy files and folders recursively
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to)
  }

  const files = fs.readdirSync(from)

  files.forEach(file => {
    if (excludedFiles.includes(file)) {
      return
    }

    let fromPath = path.join(from, file)
    let toPath = path.join(to, file)

    // If the file is 'package.template.json', copy it as 'package.json'
    if (file === "package.template.json") {
      toPath = path.join(to, "package.json")
    }

    const stat = fs.statSync(fromPath)

    if (stat.isFile()) {
      fs.copyFileSync(fromPath, toPath)
    } else if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath)
    }
  })
}

// Exclude certain files from being copied, such as cli.js
const excludedFiles = ["cli.js", "package-lock.json"]

// Copy the template files and folders to the user's working directory
copyFolderSync(sourcePath, destinationPath)
