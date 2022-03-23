<template>
  <b-container class="bv-example-row mt-5" fluid>
  <b-row>
    <b-col> 
      <div class="mb-4">
          <hr data-content="DOCUMENT" class="hr-text">
      </div>
    </b-col>
  </b-row>
  <b-row class="mt-3 mb-4">
    <b-col> 
      <div>
        <b-list-group>
          <b-list-group-item href="#" class="flex-column align-items-start" v-for="(it, i) in items" :key="i">
             <div class="d-flex w-100 justify-content">
                <i :class="it.action" :color="it.color"></i>&emsp;<h5 class="mb-1">{{ it.title }}</h5>
                <b-button class="ml-auto" squared variant="info" size="sm" target="_blank" :href="it.link">
                  <i class="fa-solid fa-link"></i> Klik
                </b-button>
             </div> 
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-col>
  </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { 
          action: "fa-brands fa-redhat fa-2x",
          title: "RED HAT LINUX ESSENTIAL (RH033)",
          color: "red",
          link: "https://drive.google.com/file/d/18Oj3DvGzNX_S88NiHv7rpv0uCRnfuCTa/view?usp=sharing",
        },
        {
          action: "fa-brands fa-amazon fa-2x",
          title: "Architecting on AWS (Membangun Arsitektur Cloud di AWS)",
          color: "orange",
          link: "https://www.dicoding.com/certificates/ERZR5O802PYV",
        },
        {
          action: "fa-brands fa-amazon fa-2x",
          title:
            "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud AWS Cloud)",
          color: "orange",
          link: "https://www.dicoding.com/certificates/6RPNK9EE5P2M",
        },
        {
          action: "fa-brands fa-js fa-2x",
          title: "Belajar Dasar Pemrograman JavaScript",
          color: "green",
          link: "https://www.dicoding.com/certificates/81P2162KOZOY",
        },
        {
          action: "fa-brands fa-js fa-2x",
          title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
          color: "green",
          link: "https://www.dicoding.com/certificates/JMZVM879QZN9",
        },
        {
          action: "fa-brands fa-js fa-2x",
          title: "Belajar Fundamental Aplikasi Back-End",
          color: "green",
          link: "https://www.dicoding.com/certificates/MRZMKDYMKPYQ",
        },
        {
          action: "fa-solid fa-file-lines fa-2x",
          title: "CV",
          color: "blue",
          link: "https://drive.google.com/file/d/1ux4FZPZ-TyDHHmKVUhdJByuGPu9q9mue/view?usp=sharing",
        },
      ],
    };
  },
};
</script>
