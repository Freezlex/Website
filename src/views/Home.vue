<template>
  <div class="home">
    <Header></Header>
    <div class="middle-content">
      <img id="logo" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8ddb50c7-e9dd-4d53-bada-0670e51db70c-profile_image-300x300.png" alt="Freezlex's logo">
      <h1>Freezlex</h1>
      <p>Your average OpenSource contributor</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: 'Home',
  components:{Header, Footer}
}
</script>
<style>
.home{
  display: flex;
  align-items: center;
  flex-flow: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
}
.middle-content{
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
}

.middle-content > h1{
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  color: #E5E5E5;
  font-size: 40px;
}

.middle-content > p{
  font-family: "Poppins", Avenir, Helvetica, Arial, sans-serif;
  color: #E5E5E5;
  font-size: 15px;
}

#logo{
  border-radius: 100%;
  height: 15vh;
}
</style>
