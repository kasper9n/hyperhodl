async function apiFetch(options) {
  let url = options.url
  // if (!options.query) options.query = {}
  // options.query.key = store.apiKey
  if (options.query) {
    url += '?'
    for (const key in options.query) {
      url += key+'='+options.query[key]+'&'
    }
  }
  // if (!options.headers) options.headers = {}
  const res = await fetch(url, options)
  const json = await res.json()
  if (json.error) throw json.error
  return json
}
export const markets = apiFetch({
  url: 'https://api.coingecko.com/api/v3/coins/markets',
  query: {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: false,
    price_change_percentage: '24h,7d,30d,1y',
  },
})
markets.then((markets) => {
  console.log(markets)
})
