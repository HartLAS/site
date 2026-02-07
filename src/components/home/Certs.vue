<template>
<section class="pt-5 pt-xxl-0">
    <div class="container mt-5">
        <div class="row align-items-center mt-5">
            <div class="col-lg-5">
                <div class="text-light">
                    <small class="text-uppercase fw-bold ls-md text-dark-grey-600 fs-5">{{ $t("certificates.title") }}</small>
                    <div class="my-4">
                        <h2 class="my-4">{{ $t("certificates.sub_title") }}</h2>
                    </div>

                    <ul class="list-unstyled mb-0">
                        <li class="d-flex mb-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success text-opacity-50" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                        </span>
                        <span class="ms-2">{{ $t("certificates.list.0") }}</span>
                        </li>
                        <li class="d-flex mb-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success text-opacity-50" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                        </span>
                        <span class="ms-2">{{ $t("certificates.list.1") }}</span>
                        </li>
                        <li class="d-flex mb-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success text-opacity-50" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                        </span>
                        <span class="ms-2">{{ $t("certificates.list.2") }}</span>
                        </li>
                        <li class="d-flex mb-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success text-opacity-50" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                        </span>
                        <span class="ms-2">{{ $t("certificates.list.3") }}</span>
                        </li>
                        <li class="d-flex mb-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-success text-opacity-50" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                        </span>
                        <span class="ms-2">{{ $t("certificates.list.4") }}</span>
                        </li>
                    </ul>
                </div>
                <div class="swiper-navigation my-3">
                    <div class="swiper-button-prev me-1 btn-icon btn-violet border-violet cursor-pointer btn-sm btn-outline-primary rounded-circle"  data-bs-target="#carouselInterval" data-bs-slide="prev">
                        <i class="bi bi-arrow-left fs-5"></i>
                    </div>
                    <div class="swiper-button-next btn-icon border-violet btn-violet btn-sm btn-outline-primary rounded-circle"  data-bs-target="#carouselInterval" data-bs-slide="next">
                         <i class="bi bi-arrow-right fs-5"></i>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 offset-lg-1 position-relative pt-xxl-5 mt-5 mt-xxl-3 mb-md-5">
                <div id="carouselInterval" class="carousel slide h-100 align-items-center d-flex mt-xxl-5" data-bs-ride="carousel">
                    <div class="carousel-inner mt-xxl-5">
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src="/certs/hartlas/docker_test.jpg" class="d-block w-100" alt="#../ASSETS/IMAGES/SERVICE/">
                        </div>
                        <div class="carousel-item active" data-bs-interval="4000">
                            <img src="/certs/hartlas/autor.jpg" class="d-block w-100" alt="#../ASSETS/IMAGES/SERVICE/" style="height: auto; max-height: 500px; object-fit: contain;">
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src="/certs/hartlas/iac_test.jpg" class="d-block w-100" alt="#../ASSETS/IMAGES/SERVICE/">
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src="/certs/hartlas/k8s_base_test.jpg" class="d-block w-100" alt="#../ASSETS/IMAGES/SERVICE/">
                        </div>
                        <div class="carousel-item" data-bs-interval="4000">
                            <img src="/certs/hartlas/micro.jpg" class="d-block w-100" alt="#../ASSETS/IMAGES/SERVICE/">
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</section>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'CertsVue',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>