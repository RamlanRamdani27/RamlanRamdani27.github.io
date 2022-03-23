<template>
  <b-container class="bv-example-row mt-5" fluid>
    <b-row>
      <b-col> 
        <div class="mb-5">
            <hr data-content="PROJECT" class="hr-text">
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card-group columns>
          <b-card v-for="(p, i) in projects" :key="i" :img-src="p.src" img-alt="Image" img-top>
            <b-card-text >
              {{p.title}}
            </b-card-text>
            <template #footer>
            <b-row>
              <b-col><i :class="p.icon" :color="p.color"></i> {{p.framework}} </b-col>
              <b-col>
                <b-button squared variant="info" size="sm" target="_blank" :href="p.link">
                  <i class="fab fa-github"></i> Repositoy
                </b-button>
              </b-col>
            </b-row>
            </template>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data: () => ({
    projects: [
      {
        title: "Admin Larashop",
        link: "https://github.com/RamlanRamdani27/larashop",
        color: "red",
        src: "/img/svg/store.svg",
        framework: "Laravel",
        icon: "fa-brands fa-laravel fa-2x",
      },
      {
        title: "Api Larashop",
        link: "https://github.com/RamlanRamdani27/larashop-api",
        color: "red",
        src: "/img/svg/store.svg",
        framework: "Laravel",
        icon: "fa-brands fa-laravel",
      },
      {
        title: "Siswaku (Laravel versi 5.8)",
        link: "https://github.com/RamlanRamdani27/siswaku",
        color: "red",
        src: "/img/svg/school-svgrepo-com.svg",
        framework: "Laravel",
        icon: "fa-brands fa-laravel fa-2x",
      },
      {
        title: "POS Livewire Sederhana",
        link: "https://github.com/RamlanRamdani27/Livewire-Laravel-POS-sederhana",
        color: "red",
        src: "/img/svg/store-svgrepo-com.svg",
        framework: "Laravel",
        icon: "fa-brands fa-laravel fa-2x",
      },
      {
        title: "Iventori Lab",
        link: "https://github.com/RamlanRamdani27/iventori-lab",
        color: "red",
        src: "/img/svg/stock-svgrepo-com.svg",
        framework: "Codeigniter 3",
        icon: "fa-brands fa-free-code-camp fa-2x",
      },
      {
        title: "Pengajuan surat dan Pemetaan Prakerin",
        link: "https://github.com/RamlanRamdani27/prakerin-ci3",
        color: "red",
        src: "/img/svg/university-svgrepo-com.svg",
        framework: "Codeigniter 3",
        icon: "fa-brands fa-free-code-camp fa-2x",
      },
      {
        title: "OpenMusic API Backend",
        link: "https://github.com/RamlanRamdani27/Open-MUsic-API",
        color: "green",
        src: "/img/svg/music-svgrepo-com.svg ",
        framework: "HapiJS",
        icon: "fa-brands fa-node-js fa-2x",
      },
      {
        title: "OpenMusic API consumer(mail)",
        link: "https://github.com/RamlanRamdani27/OpenMusic-API-consumer",
        color: "green",
        src: "/img/svg/music-svgrepo-com.svg",
        framework: "HapiJS",
        icon: "fa-brands fa-node-js fa-2x",
      },
      {
        title: "notes-app-back-end",
        link: "https://github.com/RamlanRamdani27/notes-app-back-end",
        color: "green",
        src: "/img/svg/book-svgrepo-com.svg",
        framework: "HapiJS",
        icon: "fa-brands fa-node-js fa-2x",
      },
      {
        title: "notes-app-queue-consumer",
        link: "https://github.com/RamlanRamdani27/notes-app-queue-consumer",
        color: "green",
        src: "/img/svg/book-svgrepo-com.svg",
        framework: "HapiJS",
        icon: "fa-brands fa-node-js fa-2x",
      },
      {
        title: "MERN Blog Sederhana Backend",
        link: "https://github.com/RamlanRamdani27/mern-api",
        color: "green",
        src: "/img/svg/nodejs-icon-logo-svgrepo-com.svg",
        framework: "Express JS",
        icon: "fa-brands fa-node-js fa-2x",
      },
      {
        title: "MERN Blog Sederhana Frontend",
        link: "https://github.com/RamlanRamdani27/mern-blog",
        color: "green",
        src: "/img/svg/reactjs-svgrepo-com.svg",
        framework: "ReactJS",
        icon: "fa-brands fa-node-js fa-2x",
      },
      {
        title: "App Restoran Sederhana Backend ",
        link: "https://github.com/RamlanRamdani27/backend_lumen_restoran",
        color: "red",
        src: "/img/svg/lumen-svgrepo-com.svg",
        framework: "Lumen",
        icon: "fa-brands fa-laravel fa-2x",
      },
      {
        title: "App Restoran Sederhana Frontend",
        link: "https://github.com/RamlanRamdani27/frontend_react_restoran",
        color: "green",
        src: "/img/svg/reactjs-svgrepo-com.svg",
        framework: "ReactJS",
        icon: "fa-brands fa-node-js fa-2x",
      },
      {
        title: "VUESHOP Frontend Dari Larashop",
        link: "https://github.com/RamlanRamdani27/vueshop",
        color: "green",
        src: "/img/svg/store-svgrepo-com.svg",
        framework: "VUEJS",
        icon: "fa-brands fa-node-js fa-2x",
      },
      // {
      //   title: "Backend Lumen",
      //   flex: 6,
      //   link: "#",
      //   color: "#6A76AB",
      //   icon: "fa-brands fa-laravel",
      //   sub_id: 7,
      // },
      // {
      //   title: "Frontend Vue",
      //   flex: 6,
      //   link: "#",
      //   color: "#6A76AB",
      //   icon: "fa-brands fa-vuejs",
      //   sub_id: 7,
      // },
    ],
  }),
  computed: {
    
  },
};
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