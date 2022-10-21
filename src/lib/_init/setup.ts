#!/usr/bin/env node
import fs from 'fs'
import readline from 'readline'
import { pageTemplate, layoutTemplate, layoutEndpointTemplate } from './template.js'

/**
 * Basic tasks:
 *  - check if dir exists
 *  - if it does not -> create
 *  - if it does: ask. If no -> cancel; if yes -> create
 * 
 *  - create entails
 *  - create dirs
 *  - create files
 *  - copy content to files
 */

const checkForUserPermission = async (): Promise<boolean> => {

    const message = `There already seems to be a folder in 'src/routes/stage'. Continuing will delete this folder and replace it with the svelte-stage route.
    Continue (Y/N)?\n`

    const reader = readline.createInterface({ input: process.stdin, output: process.stdout })

    return new Promise((resolve, reject) => {
        reader.question(message, resRaw => {
            const res = resRaw.toLocaleLowerCase()
            if (res === 'y' || res === 'yes') {
                reader.close()
                resolve(true)
            }
            if (res === 'n' || res === 'no') {
                reader.close()
                resolve(false)
            }
            reject(`Please answer with yes/y/no/n`)
            // TODO improve rejection handling
        })
    })  
}

const checkForExistingRoute = async () => {
    if (fs.existsSync('src/routes/stage')) {
        const shouldContinue = await checkForUserPermission()
        if (!shouldContinue) {
            console.log(`Canceled svelte-stage init.`)
            process.exit(0)
        } else {
            console.log(`Deleting old content of 'src/routes/stage' ...`)
            fs.rmSync('src/routes/stage', { recursive: true, force: true })
        }
    }
}

const checkForSvelte = () => {
    if (!fs.existsSync('src/routes')) {
        console.error(`Could not find 'src/routes' directory.
        Make sure you're using this library in a valid svelte-kit project and that you start the init script from the project root.
        If for some reason your routes folder is different you'll have to set this library up manuall.
        Instructions are on GitHub. Feel free to open an issue about this if this is a common scenario for you.
        `)
        process.exit(1)
    }
}

const createDirs = async () => {
    console.log('Creating route directory...')
    fs.mkdirSync('src/routes/stage/[...stage]/', { recursive: true })
}

const createFiles = async () => {
    console.log('Writing route files...')
    fs.writeFileSync('src/routes/stage/+layout.svelte', layoutTemplate)
    fs.writeFileSync('src/routes/stage/+layout.ts', layoutEndpointTemplate)
    fs.writeFileSync('src/routes/stage/[...stage]/+page.svelte', pageTemplate)
}

const setup = async () => {
    checkForSvelte()
    await checkForExistingRoute()
    createDirs()
    createFiles()
    console.log('Finished setting up svelte-stage!')
}

(async () => await setup())()

export {}