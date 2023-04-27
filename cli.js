#!/usr/bin/env node
/** @format */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { cwd } from "node:process"
import { exec } from "child_process"
import ora from "ora"

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

    const fromPath = path.join(from, file)
    const toPath = path.join(to, file)
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

// Display a spinner while copying the template files
const spinner = ora("Setting up React Nexus Kit...").start()

// Copy the template files and folders to the user's working directory
copyFolderSync(sourcePath, destinationPath)

// Run npm install in the destination directory
exec("npm install", { cwd: destinationPath }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing 'npm install': ${error.message}`)
    return
  }
  console.log(stdout)
  console.error(stderr)

  // Stop the spinner and display a success message after the installation is completed
  spinner.succeed("React Nexus Kit setup complete!")
  console.log("Project dependencies installed successfully!")
})
