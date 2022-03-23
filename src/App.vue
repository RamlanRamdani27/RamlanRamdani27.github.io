<template>
  <div id="app">
    <navbar />
    <jumbotron />
     <div>
        <skill id="skill" @click="scrollIntoView" />
        <project id="PROJECT" @click="scrollIntoView" />
        <document id="DOCUMENT" @click="scrollIntoView" />
     </div>
   
  
    <!-- <HelloWorld /> -->
    <b-card-footer footer-bg-variant="info" class="py-5 text-white">
      <div class="col-lg-12 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Social Media</h4>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-instagram"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
              <a class="btn btn-outline-light btn-social mx-1" target="_blank" href="https://github.com/RamlanRamdani27/">
                  <i class="fab fa-github"></i>
            </a>
      </div>
      <hr class="bg-white" />
      <div class="text-center">
         <div class="container"><small>Copyright &copy; BootstrapVue {{ new Date().getFullYear() }}</small></div>
      </div>
    </b-card-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/Test.vue'
import Navbar from './components/Navbar.vue'
import Jumbotron from './components/Jumbotron.vue'
import Skill from './components/Skill.vue'
import Project from './components/Project.vue'
import Document from './components/Document.vue'

export default {
  name: 'App',
  components: {
    // Test,
    // HelloWorld,
    Navbar,
    Jumbotron,
    Skill,
    Project,
    Document,
  },
  methods: {
    scrollIntoView(event) {
        event.preventDefault()
        // const href = event.target.getAttribute('href')
        // const el = href ? document.querySelector(href) : null
        // if (el) {
        //   this.$refs.content.scrollTop = el.offsetTop
        // }
      },
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 85px;
}
</style>
