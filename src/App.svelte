<script>
  import { onMount } from 'svelte'
  import Header from './Header.svelte'
  import List from './List.svelte'
</script>

<style lang='sass'>
  :global(body)
    position: relative
    width: 100%
    height: 100%
    margin: 0
    padding: 8px
    box-sizing: border-box
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif
  
  // :global()
  //   a
  //     color: rgb(0,100,200)
  //     text-decoration: none
  //   a:hover
  //     text-decoration: underline
  //   a:visited
  //     color: rgb(0,80,160)

  main
    max-width: 800px
    margin: auto

</style>

<template lang='pug'>
  svelte:head
    title Svelte app
  main
    Header
    List
</template>
