const path = require('path');
const fs = require('fs');

const folder = process.argv[2];
const workingDir = path.join(__dirname, folder);

if (!folder || !fs.existsSync(workingDir)) {
    console.error('Please enter valid folder name.');
    return;
}

const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

try {
    fs.mkdirSync(videoDir);
    fs.mkdirSync(capturedDir);
    fs.mkdirSync(duplicatedDir);
} catch (e) {
}

const videoExt = ['mp4', 'mov'];
const capturedExt = ['png', 'aae'];

try {
    fs.readdirSync(workingDir, {encoding: "utf-8", withFileTypes: true})
    .forEach((file) => {
        if (file.isDirectory()) {
            return;
        }

        const workingFile = file.name;
        const ext = workingFile.slice(workingFile.lastIndexOf('.') + 1);

        if (videoExt.includes(ext)) {
            moveFolder(workingFile, videoDir);
        } else if (capturedExt.includes(ext)) {
            moveFolder(workingFile, capturedDir);
        } else if (workingFile.includes('IMG_E')){
            moveFolder(workingFile.replace('IMG_E', 'IMG_'), duplicatedDir);
        }
    });
} catch (e) {
    console.error(e);
}

function moveFolder(fileName, dir) {
    fs.renameSync(path.join(workingDir, fileName), path.join(dir, fileName));
}