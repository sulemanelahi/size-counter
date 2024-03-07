const path = require('path');
const fs = require('fs');

const folderPath = './pictures/birthday';

try {
    const files = fs.readdirSync(folderPath);

    files.sort((a, b) => {
        const aStats = fs.statSync(path.join(folderPath, a));
        const bStats = fs.statSync(path.join(folderPath, b));
        return aStats.mtimeMs - bStats.mtimeMs;
      });
      

    for (let [index, file] of files.entries()) {
        const extension = path.extname(file);

        const oldPath = path.join(__dirname, folderPath, file);
        const newPath = path.join(__dirname, folderPath, String(index + 1).padStart(4, '0') + extension);

        fs.renameSync(oldPath, newPath);
    }
} catch (error) {
    console.log(error);
}
