const http = require('http')
const url = require('url')
const fs = require('fs')


http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    console.log(q)
    const filename = (q.pathname === "/") ? "./index.html" :
        (q.pathname !== "/about" && q.pathname !== "/contact-me") ? "./404.html" :
            "." + q.pathname + ".html"
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end("404 Not Found")
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)

