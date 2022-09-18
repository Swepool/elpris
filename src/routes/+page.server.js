import * as cheerio from 'cheerio';
import axios from "axios";

const url = 'https://tarifaluzhora.es/'

const fetchData = async () => {
    return axios(url).then(r => {
        const html = r.data
        const $ = cheerio.load(html)

        const currentPrice = parseFloat($('.col-sm-12', html).text().substring(0, 7))

        const priceTable = $('#hour_prices').text().split('€/kWh').map(item => {
            item = item.substring(8, 19).replace(/h/, '')
            let keyValue = item.split(': ')
            return ({hour: keyValue[0], price: parseFloat(keyValue[1])})
        })
        priceTable.pop()

        return {'currentPrice': currentPrice, 'priceTable': priceTable}
    })
}

export async function load() {
    return await fetchData()
}