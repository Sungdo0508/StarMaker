
const http = require("node:http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>STARMAKER</title>
        </head>
        <body>
            <h1>STARMAKER</h1>
            <p>Node.js 서버가 정상적으로 실행되었습니다!</p>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`서버 실행: http://localhost:${PORT}`);
});
