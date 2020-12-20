<script>
  import AssetSelectItem from './AssetSelectItem.svelte'
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
  const markets = apiFetch({
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
  const assetItems = markets.then((markets) => {
    const items = []
    for (const market of markets) {
      items[0] = {
        value: {
          image: market.image,
          name: market.name,
          symbol: market.symbol,
        },
        label: market.name + '' + market.symbol.toUpperCase(),
      }
    }
    return items
  })
</script>

<style lang='sass'>
  img
    width: 24px
    height: 24px
  .l
    text-align: left
</style>

<template lang='pug'>
  +await('markets')
    p Loading...
    +then('markets')
      table
        thead
          tr
        tbody
          +each('markets as market')
            tr
              td: img(src='{market.image}' alt='')
              td.l {market.name} {market.symbol.toUpperCase()}
    +catch('markets')
      p Error
</template>
