<script>
  import { markets } from './markets.js'
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
