<script>
  import { onMount } from 'svelte'
  import List from './List.svelte'
</script>

<style lang='sass'>
  :global(body)
    background-color: #0D1116
    color: #ffffff
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

  // main
  //   text-align: center
  //   padding: 1em
  //   max-width: 240px
  //   margin: 0 auto

  // h1
  //   font-size: 4em
  //   font-weight: 100

  // @media (min-width: 640px)
  //   main
  //     max-width: none
</style>

<template lang='pug'>
  svelte:head
    title Svelte app
  List
</template>
