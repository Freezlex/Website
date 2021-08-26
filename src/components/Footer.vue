<template>
  <div class="footer-content">
    <p>©2020 - {{currentYear}} Freezlex, Tous droits réservés.</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: function (){
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer-content{
  color: #9d9d9d;
}
</style>
