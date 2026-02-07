<template>
<section class="my-lg-5 my-5 position-relative">
<div class="container">
    <div class="row mb-lg-5 mb-5">
        <div class="col-xl-10 offset-xl-1 col-md-12 my-5">
            <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12" >
                <div class="text-lg-center mb-5">
                    <small class="text-uppercase fw-bold ls-md text-dark-grey-600 fs-5">{{ $t("about_me.title") }}</small>
                    <h2 class="mt-3 text-light">
                        {{ $t("about_me.sub_title_part_one") }}
                        <span class="text-violet">{{ $t("about_me.sub_title_text_part_one") }}</span>
                        {{ $t("about_me.sub_title_part_two") }} <span class="text-violet">{{ $t("about_me.sub_title_text_part_two") }}</span>
                    </h2>
                </div>
            </div>
            </div>
            <div class="row text-dark-grey-500">
            <div class="col-md-6 col-12">
                <p class="mb-4 mb-md-S">
                    {{ $t("about_me.text_part_one") }}
                </p>
            </div>
            <div class="col-md-6 col-12">
                <p class="mb-4 mb-md-S">
                     {{ $t("about_me.text_part_two") }}
                </p>
            </div>
            <div class="col-md-8 offset-md-2 col-12">
                <p class="mb-0 text-lg-center">
                     {{ $t("about_me.text_part_three_part_one") }} 
                </p>
            </div>
            </div>
        </div>
    </div>
    
    <div class="row text-dark-grey-500 z-1">
        <div class="position-absolute bg-softer z-0 about-abs"></div>
        <div class="col-lg-4 col-md-12 col-12 z-1">
            <div class="mb-5 mb-lg-0 text-center text-lg-start px-md-5">
            <h2 class="mb-3 text-light">{{ $t("about_me.block.title") }}</h2>
            <p class="mb-0">{{ $t("about_me.block.sub_title") }}</p>
            </div>
        </div>
        <div class="col-lg-8 z-1">
            <div class="row">
            <div class="col-md-6 col-12 fade-in-element" >
                <div class="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-0">
                    <div class="mb-3">
                        <i class="bi bi-lightbulb-fill display-6 text-violet"></i>
                    </div>

                    <h3 class="h5 rough-oval">{{ $t("about_me.block.items.0.title") }}</h3>
                    <p class="mb-0 pe-lg-4">{{ $t("about_me.block.items.0.text") }}</p>
                </div>
            </div>
            <div class="col-md-6 col-12 fade-in-element">
                <div class="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-0">
                    <div class="mb-3">
                       <i class="bi bi-rocket-takeoff display-6 text-violet"></i>
                    </div>

                   <h3 class="h5 rough-oval">{{ $t("about_me.block.items.1.title") }}</h3>
                    <p class="mb-0 pe-lg-4">{{ $t("about_me.block.items.1.text") }}</p>
                </div>
            </div>
            <div class="col-md-6 col-12 fade-in-element">
                <div class="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-0">
                    <div class="mb-3">
                        <i class="bi bi-pencil-square display-6 text-violet"></i>
                    </div>

                     <h3 class="h5 rough-oval">{{ $t("about_me.block.items.2.title") }}</h3>
                    <p class="mb-0 pe-lg-4">{{ $t("about_me.block.items.2.text") }}</p>
                </div>
            </div>
            <div class="col-md-6 col-12 fade-in-element">
                <div class="mb-lg-8 mb-5 text-center text-lg-start px-3 px-lg-0">
                    <div class="mb-3">
                        <i class="bi bi-gear display-6 text-violet"></i>
                    </div>

                    <h3 class="h5 rough-oval">{{ $t("about_me.block.items.3.title") }}</h3>
                    <p class="mb-0 pe-lg-4">{{ $t("about_me.block.items.3.text") }}</p>
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
  name: 'AboutMe',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>