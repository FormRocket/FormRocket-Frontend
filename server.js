const http = require('http');
const fs = require('fs');
const readline = require('readline');

const filePaths = [];

function search(path) {
    const directory = fs.readdirSync("./dist" + path, {withFileTypes: true});

    for (const file of directory) {
        if (file.isDirectory()) {
            search(path + "/" + file.name);
        } else {
            filePaths.push(path + "/" + file.name);
        }
    }
}

search("");

const extensionContentType = {
    "css": "text/css",
    "js": "text/javascript",
    "html": "text/html",
    "ico": "image/x-icon"
}

function sendResponse(res, file) {
    const contentType = extensionContentType[file.split(".").slice(-1)[0]]
    if (contentType) {
        res.writeHead(200, {
            "Content-Type": contentType
        });
    } else {
        res.writeHead(200);
    }

    var readStream = fs.createReadStream(file);
    readStream.pipe(res);
}

function printMem() {
    readline.cursorTo(process.stdout, 0);
    process.stdout.clearLine();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    process.stdout.write(`${used.toFixed(2)}/512 MB`);
}

setInterval(printMem, 1000)

const server = http.createServer(function (req, res) {
  const path = req.url.split("?")[0];
  if (filePaths.includes(path)) {
    sendResponse(res, "./dist" + path);
    return;
  }
  sendResponse(res, "./dist/index.html");
});
server.listen(5000);