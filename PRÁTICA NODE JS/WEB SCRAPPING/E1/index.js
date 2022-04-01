// como se fosse import
const axios = require('axios');
const cheerio = require('cheerio');

// responsavel por pegar os dados
const fetchData = async (url) => {
    // axios para pegar os dados
    const result = await axios.get(url);
    return result.data;
} 

const main = async () => {
    const content = await fetchData("https://br.investing.com/crypto/currencies");

    // cheerio para fazer a raspagem
    const $ = cheerio.load(content);

    let criptomoedas = [];

    $("tr").each((i, el)=>{
        const nome = $(el).find("td.name > a").text();
        const codigo = $(el).find("td.symb").text();
        const precoCripto = parseFloat($(el).find("td.price > a").text());

        data = {
            nome,
            codigo,
            precoCripto
        };   

        criptomoedas.push(data);

    })

    console.log({criptomoedas});
}

main();
