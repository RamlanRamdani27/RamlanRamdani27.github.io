<template>
  <b-container class="bv-example-row" fluid>
  <b-row >
    <b-col> 
      <div class="mb-4">
          <hr data-content="SKILL" class="hr-text">
      </div>
    </b-col>
  </b-row>
  <b-row class="mt-3">
    <b-col> 
      <h3 class="page-section-heading text-center text-capitalize text-secondary mb-1">{{judul[0]}}</h3>
      <div>
        <b-list-group>
          <b-list-group-item href="#" class="flex-column align-items-start" v-for="(p, i) in pemrogramans" :key="i">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ p.title }}</h5>
              <i :class="p.icon" :color="p.color"></i>
            </div>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-col>
    <b-col> 
      <h3 class="page-section-heading text-center text-capitalize text-secondary mb-1">{{judul[1]}}</h3>
      <b-list-group>
          <b-list-group-item href="#" class="flex-column align-items-start" v-for="(s, i) in servers" :key="i">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ s.title }}</h5>
              <i :class="s.icon" :color="s.color"></i>
            </div>
          </b-list-group-item>
      </b-list-group>
    </b-col>
    <b-col> 
      <h3 class="page-section-heading text-center text-capitalize text-secondary mb-1">{{judul[2]}}</h3>
      <b-list-group>
          <b-list-group-item href="#" class="flex-column align-items-start" v-for="(d, i) in databases" :key="i">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ d.title }}</h5>
              <i :class="d.icon" :color="d.color"></i>
            </div>
          </b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
export default {
  data() {
    return {
      judul: ["programming", "server", "database"],
      pemrogramans: [
          {
            color: "blue",
            icon: "fa-brands fa-php fa-lg",
            title: "PHP",
          },
          {
            color: "red",
            icon: "fa-brands fa-free-code-camp fa-lg",
            title: "Codeigniter 3",
          },
          {
            color: "red",
            icon: "fa-brands fa-laravel fa-lg",
            title: "Laravel",
          },
          {
            color: "green",
            icon: "fa-brands fa-node-js fa-lg",
            title: "HapiJS",
          },
          {
            color: "green",
            icon: "fa-brands fa-vuejs fa-lg",
            title: "VueJs 2",
          },
          {
            color: "green",
            icon: "fa-solid fa-power-off fa-lg",
            title: "Springboot",
          },
          {
            color: "red",
            icon: "fa-brands fa-laravel fa-lg",
            title: "Lumen",
          },
      ],
      servers: [
          {
            color: "blue",
            icon: "fa-brands fa-linux",
            title: "Linux",
          },
          {
            color: "red",
            icon: "fa-solid fa-server",
            title: "Solaris",
          },
          {
            color: "red",
            icon: "fa-solid fa-server",
            title: "Engineer Server Oracle",
          },
      ],
      databases: [
        {
          color: "blue",
          icon: "fa-solid fa-database",
          title: "MySQL",
        },
        {
          color: "blue",
          icon: "fa-solid fa-database",
          title: "PostgreSQL",
        },
        {
          color: "red",
          icon: "fa-solid fa-database",
          title: "Firebase",
        },
        {
          color: "green",
          icon: "fa-solid fa-leaf",
          title: "MongoDB",
        },
      ],
    }
  },
}
</script>
<style lang="css">
  hr.hr-text {
  position: relative;
    border: none;
    height: 1px;
    background: #999;
}

hr.hr-text::before {
    content: attr(data-content);
    display: inline-block;
    background: #fff;
    font-weight: bold;
    font-size: 2.5rem;
    color: #999;
    border-radius: 30rem;
    padding: 0.2rem 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>