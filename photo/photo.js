// mp4, mov -> video 폴더로 이동
// IMG_E*가 있는(수정된)파일의 원본 -> duplicated 폴더로 이동
// png, aae -> captured 폴더로 이동
const fs = require('fs').promises;
const path = require('path');

const args = process.argv.slice(2);
const dirName = args[0];
const strPath = path.join(__dirname, dirName);

const videoExt = ['mp4', 'mov'];
const capturedExt = ['png', 'aae'];



fs.readdir(strPath, "utf-8")
    .then((files) => {
        files.forEach((file) => {
            const ext = file.slice(file.lastIndexOf('.') + 1);

            if (videoExt.includes(ext)) {
                moveVideo(file);
            } else if (capturedExt.includes(ext)) {
                moveCaptured(file);
            } else {
                moveDuplicated(file);
            }
        })
    })
    .catch(console.error);

function moveVideo(fileName) {
    const videoDir = path.join(strPath, 'video');
    fs.readdir(videoDir)
        .then(() => {
            fs.rename(path.join(strPath, fileName), path.join(videoDir, fileName))
                .catch(console.error);
        })
        .catch((error) => {
            console.log('No video folder, Making folder....');
            fs.mkdir(videoDir)
                .then(() => {
                    moveVideo(fileName);
                })
                .catch(console.error);
        });
}

function moveCaptured(fileName) {
    const capturedDir = path.join(strPath, 'captured');


}

function moveDuplicated(fileName) {
    const duplicatedDir = path.join(strPath, 'duplicated');


}