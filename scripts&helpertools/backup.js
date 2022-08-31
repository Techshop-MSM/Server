import { fs } from "fs"
import {getCurrentDateTime, timeStampifyFileName} as backup from './scripts/backupScript.js'

console.log('backing up .env file...')

const targetFilename =
    '/home/user/Dokumente/StreamCollection/backups/' +
    backup.timeStampifyFileName('.env')

fs.copyFile('.env', targetFilename, (err) => {
    if (err) throw err
    console.log('finished')
})
