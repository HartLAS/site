<template>
<section class="mb-5">
  <div class="bg-primary-blend-gradient right-slant-shape py-5 mb-5">
    <div class="container">
      <div class="row my-5">
        <div class="col-xl-5">
            <div>
              <h2 class="mb-0 text-light"><span class="active">{{ $t("instructions.main.header_part_one") }}</span> {{ $t("instructions.main.header_part_two") }}</h2>
            </div>
        </div>
        <div class="offset-xl-1 col-xl-6 d-flex align-items-center">
            <div>
              <p class="mb-0 py-5 py-md-0 text-light fw-semibold">
                  {{ $t("instructions.main.description") }}
              </p>
            </div>
        </div>
      </div>
  </div>
  </div>
  <div class="container">
      <div class="row gy-4">
        <div class="col-xl-10 offset-xl-1">
            <div class="row gx-4 gy-4">
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('linux'), scrollToTop" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/linux.webp') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                        <h3 class="fs-4 mb-3">{{ $t("instructions.groups.0.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.0.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('automation')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/automatisation.jpg') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.1.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.1.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('databases')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/dbs.webp') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.2.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.2.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('brokers')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/brokers.png') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.3.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.3.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('web')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/web.webp') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.4.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.4.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('infra')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/infra.jpg') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.5.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.5.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('containers')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/containers.png') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.6.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.6.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('monitoring')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/monitor.webp') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.7.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.7.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('storage')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/storage.jpg') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.8.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.8.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('secrets')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/secrets.jpg') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.9.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.9.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('ci_cd')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/ci_cd.webp') !important;
        background-size: cover !important;
        background-position: center !important;">
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.10.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.10.description") }}</p>
                    </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                  <div class="card shadow-sm card-lift pointer h-100 fw-semibold" @click="goToPage('k8s')" style="background: 
        linear-gradient(rgb(30, 41, 59, 0.93), rgb(30, 41, 59, 0.78)),
        url('/picts/groups/k8s.png') !important;
        background-size: cover !important;
        background-position: center !important;"> 
                    <div class="card-body">
                         <h3 class="fs-4 mb-3">{{ $t("instructions.groups.11.name") }}</h3>
                        <p class="mb-0 text-dark-light">{{ $t("instructions.groups.11.description") }}</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
  </div>
  <Contacts/>
</section>

</template>

<style lang="scss">
  @import '@/assets/styles/instructions.scss';
</style>

<script>
import Contacts from '@/components/home/Contacts.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'InstructionsGroupView',
  components: {
    Contacts,
  },
  methods: {
    goToPage(group) {
      this.$router.push('/instructions/group_view/' + group)
    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  }

}
</script>