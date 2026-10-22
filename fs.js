const fs = require('fs')
const path = require('path')
const process = require('process')

const FOLDER_PATH = path.join(process.cwd(), 'uploads')
const FILE_PATH = path.join(FOLDER_PATH, 'text.txt')

const runSyncFile = () => {
    fs.writeFileSync(FILE_PATH, 'hello world!', 'utf-8')
    fs.appendFileSync(FILE_PATH, 'hi', 'utf-8')

    const content = fs.readFileSync(FILE_PATH, 'utf-8')
    const stats = fs.statSync(FILE_PATH)
    return {
        content,
        fileName: path.basename(FILE_PATH),
        fileSize: stats.size,
        fileModifiedTime: stats.mtime
    }
}

const main = () => {
    try {
        if (!fs.existsSync(FOLDER_PATH)) {
            fs.mkdirSync(FOLDER_PATH, { recursive: true })
        }
        const fileInfo = runSyncFile()
        console.log(fileInfo)
    } catch (error) {
        console.log(error.message)
    }
}

main()

const runCallback=()=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(FILE_PATH, 'helloooo', 'utf-8', (writeError)=>{
            if(writeError) return reject(writeError)
            fs.appendFile(FILE_PATH, 'hii', 'utf-8', (appendError)=> {
                if(appendError) return reject(appendError)
                fs.readFile(FILE_PATH, 'utf-8', (readError)=> {
                    if(readError) return reject(readError)
                })
            })
        })
    })
}