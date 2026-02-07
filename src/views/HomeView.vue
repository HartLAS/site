<template>
<Header/>
<MyWay/>
<About/>
<!-- <Competentions/> -->
<Certs/>
<WorkWith/>
<Contacts/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/home/Header.vue'
import MyWay from '@/components/home/MyWay.vue'
// import Competentions from '@/components/home/Competentions.vue'
import Contacts from '@/components/home/Contacts.vue'
import About from '@/components/home/AboutMe.vue'
import Certs from '@/components/home/Certs.vue'
import WorkWith from '@/components/home/WorkWith.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    MyWay,
    // Competentions,
    Contacts,
    About,
    Certs,
    WorkWith
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/home.scss';
</style>