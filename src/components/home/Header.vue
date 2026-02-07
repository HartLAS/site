<template>
<section class="bg-primary-blend-gradient py-5 right-slant-shape">
<div class="container">
    <div class="row pt-md-5">
        <div class="col-lg-10 offset-lg-1 col-md-12 position-relaive">
            <div class="text-white-stable text-center position-relaive my-lg-8 my-6">
            <span class="fw-medium fs-4 text-light">{{ $t("hero.hello") }} </span>
            <h1 class="text-white-stable display-3 mt-3 mb-3 fw-semibold active">{{ $t("hero.name") }}</h1>
            <div class="position-relative d-flex justify-content-center my-5">
                <img src="/picts/me.jpg" alt="avatar" class="rounded-circle avatar-xxl border-white border border-3 position-relative">
            </div>
            <p class="mb-0 pb-8 px-lg-7 text-light fw-semibold fs-5 mb-5">
              {{ $t("hero.text_part_one") }} <span class="active fw-bold"> {{ $t("hero.text_devops") }}</span> {{ $t("hero.text_part_two") }}
            </p>
            </div>
        </div>
    </div>
</div>
</section>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/home.scss';
</style>