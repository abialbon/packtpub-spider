const https = require('https');
const packtUrl = 'https://www.packtpub.com/packt/offers/free-learning';

https.get( packtUrl, (res) => {
    if (res.statusCode === 200) {
        let htmlContent = '';
        res.on('data', (data) => {
            htmlContent += data;
        });
        res.on('end', ()=> {
            // The free book title is the first <h2> in the page!
            const freeBookTitle = htmlContent.split('<h2>')[1].split('</h2>')[0].trim();
            const stringToPrint = `
            The PacktPub free eBook of the day is:
            ${ '*'.repeat(freeBookTitle.length)}
            ${freeBookTitle}
            ${ '_'.repeat(freeBookTitle.length)}
            Ebook available at: ${packtUrl}
            `;
            console.log(stringToPrint);
        });
        res.on('error', (err) => {
            console.log(err);
        });
    } else {
        console.log('Something went wrong with the request!')
    }
});