

<template>
<div>
    <button type="button" v-on:click="add">Add</button>
    <button type="button" v-on:click="start">Randomize</button>
    <table>
        <thead>
         <tr>
          <th>Code</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
           <tr v-for="(item,index) in prices" :key="index">
               <td>{{item.code}}</td>
               <td>{{item.price}}</td>
        </tr>
        </tbody>
     </table>
</div>
    
</template>

<script>
export default {
  name:'PriceTable',
  methods:{
      add:function(){
        for(let i =0;i<10;i++)
         this.$data.prices.push( {
              code:'CODE1',
              price:i
          })
      },
      start:function(){

          
          setInterval(() => {
     let index = Math.round(Math.random()*(this.prices.length-1));
     this.prices[index].price = Math.random()*100;
                   }, 1);
                  
      }
  },
  data:function(){
     return { 
         prices:[
          {
              code:'CODE1',
              price:12,
          },
           {
              code:'CODE2',
              price:12,
          }
      ]
  }
  
}
}
</script>

<style>

</style>
