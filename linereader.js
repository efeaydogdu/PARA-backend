


const pdfParse = require('pdf-parse');
const fs = require('fs');

function readPDF(pdfPath) {
    const dataBuffer = fs.readFileSync(pdfPath);

    pdfParse(dataBuffer).then(function (data) {
        // Assuming all text is returned in data.text and we're using a hypothetical delimiter "ENDOFPAGE" to split pages
        // Adjust "ENDOFPAGE" to a real delimiter from your PDF if there's any consistent text indicating a new page
        const pages = data.text.split('ENDOFPAGE');

        pages.forEach((pageText, pageIndex) => {
            const lines = pageText.split('\n');
            lines.forEach((line, lineIndex) => {
                // Process each line. This is where you would add your logic to parse each line and extract needed data
                console.log(`Page ${pageIndex + 1} Line ${lineIndex + 1}: ${line}`);
            });
        });
    }).catch(function(error) {
        // Error handling
        console.error("Error processing PDF:", error);
    });
}

// Specify the path to your PDF. Make sure to use double backslashes for Windows paths
const pdfPath = 'C:\\Users\\Public\\PARA-backend\\Transcript.pdf';
readPDF(pdfPath);
