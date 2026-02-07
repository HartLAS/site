<template>
 <section class="mb-5">
  <div class="bg-primary-blend-gradient right-slant-shape py-5 mb-5">
    <div class="container">
      <div class="row my-5">
        <div class="offset-xl-3 col-xl-6">
            <div>
              <p class="mb-0 py-5 py-md-0 text-light fw-semibold">
                  {{ $t("group_view.header") }}
              </p>
            </div>
        </div>
      </div>
  </div>
</div>
</section>
<section >
<div class="container mb-lg-5">
  <div class="row">
        <div class="col-lg-4 col-md-5 col-12 mt-6 mt-md-0">
      <!-- search -->
      <div class="mb-4">
        <div class="mb-3 position-relative">
          <input type="search" class="form-control" id="blogSidebarText" name="blogSidebarText" placeholder="Найти...">
          <span class="position-absolute end-0 top-0 mt-2 me-3"><i class="bi bi-search fs-5"></i></span>
        </div>
      </div>
      <!-- card -->
      <div class="card mb-4 instructions_navi">
        <!-- card body -->
        <div class="card-body p-4">
          <h3> {{ $t("group_view.header_navi") }}</h3>
          <div class="mt-3 text-semigrey">
            <!-- list -->
            <ul class="list-unstyled mb-0 nav nav-x-0 flex-column">
              <li class="lh-sm mb-1 d-block">
                <div class="d-flex">
                  <h4><a class="ms-1 text-link d-inline text-inherit" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Business <i class="ms-1 bi bi-chevron-down"></i></a></h4>
                </div>
                
                <div class="collapse" id="collapseExample">
                  <div class="card p-0 ps-3 mb-3 border-0 bg-900 card-body fw-semibold">
                    <ul class="list-unstyled bg-900">
                      <li class="lh-sm mb-1 d-block">
                        <div class="d-flex">
                          <h4><a class="text-link d-inline text-inherit" data-bs-toggle="collapse" href="#subcollapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Вложенный <i class="ms-1 bi bi-chevron-down"></i></a></h4>
                        </div>
                        <div class="collapse" id="subcollapseExample">
                          <div class="card p-0 ps-3 mb-0 border-0 bg-900 card-body fw-semibold">
                              <ul class="list-unstyled bg-900">
                                <li class="lh-sm mb-0 d-block">
                                  <div class="d-flex">
                                    <h4><a href="#" class="text-link d-inline text-inherit">фываываыв</a></h4>
                                  </div>
                                </li>
                              </ul>
                            </div>
                        </div>
                      </li>
                      <li class="lh-sm mb-1 d-block">
                        <div class="d-flex">
                          
                          <h4><a href="#" class="text-link d-inline text-inherit">фываываыв</a></h4>
                        </div>
                      </li>
                      <li class="lh-sm mb-1 d-block">
                        <div class="d-flex">
                          <h4><a href="#" class="text-link d-inline text-inherit">фываываыв</a></h4>
                        </div>
                      </li>
                      <li class="lh-sm mb-1 d-block">
                        <h4><a class="text-link d-inline text-inherit" href="#">An item</a></h4>
                      </li>
                      <li class="lh-sm d-block">
                        <h4><a class="text-link d-inline text-inherit" href="#">An item</a></h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="lh-sm mb-1">
                <div class="d-flex">
                  
                  <h4><a href="#" class="ms-1 text-link d-inline text-inherit">фываываыв</a></h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="card mb-4 instructions_navi">
        <!-- card body -->
        <div class="card-body p-4">
          <h3>{{ $t("group_view.header_tags") }}</h3>
          <div class="mt-3 tags">
            <a href="#" class="btn btn-light btn-xs mb-2">business</a>
            <a href="#" class="btn btn-light btn-xs mb-2">e-commerce</a>
            <a href="#" class="btn btn-light btn-xs mb-2">course</a>
            <a href="#" class="btn btn-light btn-xs mb-2">dashboard</a>
            <a href="#" class="btn btn-light btn-xs mb-2">landings</a>
            <a href="#" class="btn btn-light btn-xs mb-2">marketing</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8 col-md-7 col-12">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-12" v-for="(int, value) in 6" :key="int">
          <!-- Card -->
          <div class="card mb-4 shadow-lg card-lift pointer">
            <router-link :to="$route.params.group_name+ '/article/' + value">
              <!-- Img  -->
              <img src="https://geeksui.codescandy.com/geeks/assets/images/blog/blogpost-3.jpg" class="card-img-top" alt="blogpost">
            </router-link>
            <!-- Card body -->
            <div class="card-body">
              <router-link :to="$route.params.group_name+ '/article/' + value" class="fs-5 mb-2 fw-semibold d-block text-success">Courses</router-link>
              <h3><router-link :to="$route.params.group_name+ '/article/' + value" class="text-inherit">How to become modern Stack Developer in 2020</router-link></h3>
              <p>Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum... {{ value }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <Contacts/>
</div>
</section>
</template>

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
  },
  props: {
    group_name: String
  }

}
</script>