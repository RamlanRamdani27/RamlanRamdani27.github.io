<template>
  <div>
    <b-jumbotron class="bg-image text-white">
      <template #header>
        <b-avatar src="/img/PP.jpg" size="14rem"></b-avatar>
      </template>

      <template #lead>
        <p class="text-uppercase">{{data.nama}}</p>
        <p class="text-capitalize ">{{data.keahlian}}</p>
      </template>

      <hr class="my-4 bg-white" >

      <p><i class="fa-solid fa-envelope"></i> {{data.email}}</p>
    </b-jumbotron>
</div>
</template>
<script>
export default {
  data() {
    return {
      data : {
        nama: "muhamad ramlan ramdani",
        keahlian: "programmer - engineer server oracle",
        email: "ramlanramdani2@gmail.com"
      }
    }
  },
}
</script>
<style lang="css">
.bg-image {
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), 
      url(https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ);
  background-attachment: static;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>