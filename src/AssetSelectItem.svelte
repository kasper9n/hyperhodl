<script>
  export let item = undefined
  export let filterText
  export let getOptionLabel
  export let isFirst
  export let isActive
  export let isHover
  console.log(item)
</script>

<style lang='sass'>
  .container
    display: flex
    align-items: center
    padding: 8px 14px
    &:hover
      background-color: #ebebeb
  img
    width: 18px
    height: 18px
  .name
    font-size: 15px
    margin-left: 5px
  .symbol
    margin-left: 5px
    opacity: 0.5
    font-size: 12px
</style>

<template lang='pug'>
  .container
    img(src='{item.value.image}' alt='')
    .name {item.value.name}
    .symbol {item.value.symbol.toUpperCase()}
    //- .symbol {item.value.symbol.toUpperCase()}
</template>
