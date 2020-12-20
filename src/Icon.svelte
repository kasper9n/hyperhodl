<script>
  import { markets } from './markets.js'
  let url = ''
  markets.then((markets) => {
    url = markets[0].image
  })
</script>

<style lang='sass'>
  img
    width: 16px
    height: 16px
</style>

<template lang='pug'>
  img(src='{url}' alt='')
</template>
