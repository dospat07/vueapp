<template>
  <div>
    <button v-on:click='onClick'> click Me</button>
    <span>You click {{clicks}} times</span>
  </div>
  
</template>

<script>

export default {
  name: 'manuItem2',
  data:function(){
    return {
      message:"Click me",
      clicks:0
    }
  },
  methods:{
    onClick:function(){
     this.$data.clicks++;
    }
  }
}
</script>
