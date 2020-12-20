<script>
  import Select from 'svelte-select'
  import Icon from './Icon.svelte'
  import AssetSelectItem from './AssetSelectItem.svelte'
  import { markets } from './markets.js'
  const assetItems = markets.then((markets) => {
    const items = []
    for (let i = 0; i < markets.length; i++) {
      const market = markets[i]
      items[i] = {
        // value: market.symbol,
        value: {
          image: market.image,
          name: market.name,
          symbol: market.symbol,
        },
        label: market.name,
      }
    }
    return items
  })
</script>

<style lang='sass'>
  .base-asset-select
    margin: auto
    width: 300px
</style>

<template lang='pug'>
  +await('assetItems')
    p Loading...
    +then('assetItems')
      .base-asset-select
        Select(
          Icon='{Icon}'
          items='{assetItems}'
          Item='{AssetSelectItem}'
          selectedValue='{assetItems[0]}'
          isVirtualList=true
        )
</template>
