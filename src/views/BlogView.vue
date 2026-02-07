<template>
<section class="py-5 bg-primary-blend-gradient right-slant-shape mb-5">
  <div class="container">
    <div class="row">
      <div class="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 col-md-12 col-12">
        <div class="text-center mb-5">
          <h1 class="display-2 fw-bold">Небольшой блог</h1>
          <p class=" text-light fw-semibold">Stories, tips, and tools to inspire you to find your most creative self. Subscribe to get curated content delivered directly to your inbox.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section >
<div class="container mb-lg-5">
  <div class="row">
    <div class="col-lg-8 col-md-7 col-12">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-12" v-for="(int, value) in 6" :key="int">
          <!-- Card -->
          <div class="card mb-4 shadow-lg card-lift pointer">
            <router-link to="blog/view/name">
              <!-- Img  -->
              <img src="https://geeksui.codescandy.com/geeks/assets/images/blog/blogpost-3.jpg" class="card-img-top" alt="blogpost">
            </router-link>
            <!-- Card body -->
            <div class="card-body">
              <router-link to="blog/view/name" class="fs-5 mb-2 fw-semibold d-block text-success">Courses</router-link>
              <h3><router-link to="blog/view/name" class="text-inherit">How to become modern Stack Developer in 2020</router-link></h3>
              <p>Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum... {{ value }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="col-lg-4 col-md-5 col-12 mt-6 mt-md-0">
      <!-- search -->
      <div class="mb-4">
        <div class="mb-3 position-relative">
          <label class="form-label visually-hidden" for="blogSidebarText">Ваш запрос</label>
          <input type="search" class="form-control" id="blogSidebarText" name="blogSidebarText" placeholder="Найти...">
          <span class="position-absolute end-0 top-0 mt-2 me-3"><i class="bi bi-search fs-5"></i></span>
        </div>
      </div>
      <!-- card -->
      <div class="card mb-4">
        <!-- card body -->
        <div class="card-body p-4 instructions_navi">
          <h3>Недавние публикации</h3>
          <div class="mt-3">
            <!-- list -->
            <ul class="list-unstyled mb-0 text-semigrey">
              <li class="mb-1">
                <h4 class="lh-lg"><a href="#" class="text-inherit">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></h4>
              </li>
              <li class="mb-1">
                <h4 class="lh-lg"><a href="#" class="text-inherit">Duis placerat mi quis purus feugiat, at bibendum arcu dignissim.</a></h4>
              </li>
              <li class="mb-1">
                <h4 class="lh-lg"><a href="#" class="text-inherit">Morbi sit amet metus nec elit hendrerit luctus.</a></h4>
              </li>
              <li>
                <h4 class="lh-lg"><a href="#" class="text-inherit">Vivamus ac sapien ultricies dolor ullamcorper porttitor.</a></h4>
              </li>
              <li>
                <h4 class="lh-lg"><a href="#" class="text-inherit">Vivamus ac sapien ultricies dolor ullamcorper porttitor.</a></h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="card mb-4 instructions_navi">
        <!-- card body -->
        <div class="card-body p-4">
          <h3>Категории</h3>
          <div class="mt-3 text-semigrey">
            <!-- list -->
            <ul class="list-unstyled mb-0 nav nav-x-0 flex-column">
              <li class="lh-sm mb-1">
                <i class="bi bi-arrow-right"></i>
                <h4><a href="#" class="text-link d-inline text-inherit">Business</a></h4>
              </li>
              <li class="lh-sm mb-1">
                <i class="bi bi-arrow-right"></i>
                <h4><a href="#" class="text-link d-inline text-inherit">фываываыв</a></h4>
              </li>
              <li class="lh-sm mb-1">
                <i class="bi bi-arrow-right"></i>
                <h4><a href="#" class="text-link d-inline text-inherit">апроапопр</a></h4>
              </li>
              <li class="lh-sm mb-1">
                <i class="bi bi-arrow-right"></i>
                <h4><a href="#" class="text-link d-inline text-inherit">апроевнров</a></h4>
              </li>
              <li class="lh-sm mb-1">
                <i class="bi bi-arrow-right"></i>
                <h4><a href="#" class="text-link d-inline text-inherit">нгорлкнвао</a></h4>
              </li>
              <li class="lh-sm mb-1">
                <i class="bi bi-arrow-right"></i>
                <h4><a href="#" class="text-link d-inline text-inherit">фукаепукпы</a></h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- card -->
      <div class="card mb-4 instructions_navi">
        <!-- card body -->
        <div class="card-body p-4">
          <h3>Теги</h3>
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
  </div>
  <Contacts/>
</div>
</section>
</template>

<style lang="scss">
  @import '@/assets/styles/home.scss';
</style>

<script>
import Contacts from '@/components/home/Contacts.vue'

export default {
  name: 'BlogView',
  components: {
    Contacts,
  }
}
</script>