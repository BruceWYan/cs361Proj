const http = require('http');
const fs = require('fs');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const form = new formidable.IncomingForm();
        console.log(">>>Message Received")
        // Parse form data
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Error parsing form data:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            // Extract the value of the textAreaData field
            const textContent = fields.textAreaData;


            console.log(">>>Writting to File...")
            fs.writeFileSync('output.txt', Array.isArray(textContent) ? textContent.join('') : textContent);


            // Send a response
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            console.log(">>>Data Written to File")
            res.end('Data received and processed.');
        });
    } else {
        // Handle other HTTP methods or requests
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});