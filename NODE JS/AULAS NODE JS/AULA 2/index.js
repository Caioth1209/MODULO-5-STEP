const http = require('http');

http.createServer((request, response)=>{

    console.log("oiiii");
    response.writeHead(200,{"Content-type":"text/html"});

    response.write(
        "<h1>Funcionou legal</h1>"
    );

    response.end();
}).listen(3000);

// // como se fosse import
// const axios = require('axios');
// const cheerio = require('cheerio');

// // responsavel por pegar os dados
// const fetchData = async (url) => {

//     // axios para pegar os dados
//     const result = await axios.get(url);
//     return result.data;
    
// } 

// const main = async () => {
//     const content = await fetchData("https://stardewvalleywiki.com/Villagers");

//     // cheerio para fazer a raspagem
//     const $ = cheerio.load(content);

//     let villagers = [];

//     $("li.gallerybox").each((i, el)=>{
//         const title = $(el).find(".gallerytext > p > a").text();

//         const data = {title};

//         villagers.push(data);
//     })

//     console.log({villagers});
// }

// main();
