<template>
<section class="py-xl-5 my-5">
<div class="container pt-5">
    <div class="row align-items-center pt-5 mt-lg-5">
        <div class="col-lg-4 col-md-8 col-12">
            <div class="mb-5 mb-lg-0 text-light">
            <small class="text-uppercase fw-bold ls-md text-dark-grey-600 fs-5">{{ $t("my_way.title") }}</small>

            <h2 class="my-3">
                {{ $t("my_way.sub_title_part_one") }}
                <span class="green">{{ $t("my_way.sub_title_part_two") }}</span>
            </h2>
            <p class="mb-5 text-dark-grey-500">{{ $t("my_way.sub_title_text") }}</p>
            </div>
        </div>
        <div class="col-lg-8 col-12">
            <div class="row row-cols-1 row-cols-lg-2">
            <div class="col">
                <div class="card bg-danger bg-opacity-10 border-0 mb-5 fade-in-element">
                    <div class="card-body">
                        <div class="mb-4 text-center">
                        <img src="https://www.rp.ru/bitrix/templates/main_page_20160328/images/logo_rp_job.gif"  alt="html">
                        </div>
                        <div class="mb-4">
                        <h3>{{ $t("my_way.workplaces.0.name") }}</h3>
                        <small class="ls-md fw-semibold active">{{ $t("my_way.workplaces.0.dates") }}</small>
                        <p class="mb-0 fw-semibold">{{ $t("my_way.workplaces.0.description") }}</p>
                        </div>
                    </div>
                </div>

                <div class="card bg-info bg-opacity-10 border-0 md-5 fade-in-element">
                    <div class="card-body">
                        <div class="mb-4 text-center">
                        <img src="https://kraftway.ru/upload/CAllcorp3/d23/y25xt1gt856bfjhduih4v3ie1yghl783.png" alt="html">
                        </div>
                        <div class="mb-4">
                        <h3>{{ $t("my_way.workplaces.1.name") }}</h3>
                        <small class="ls-md fw-semibold active">{{ $t("my_way.workplaces.1.dates") }}</small>
                        <p class="mb-0 s-md fw-semibold text-violet">
                            DevOps Engineer
                        </p>
                        <p class="mb-0 fw-semibold">{{ $t("my_way.workplaces.1.description") }}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="col mt-5">
                <div class="card bg-warning bg-opacity-10 border-0 mb-5 fade-in-element">
                    <div class="card-body">
                        <div class="mb-4 text-center">
                        <img src="https://static.tildacdn.info/tild6666-6233-4330-a666-653563666231/___.png " width="100%" alt="html">
                        </div>
                        <div class="mb-4">
                        <h3>{{ $t("my_way.workplaces.2.name") }}</h3>
                        <small class="ls-md fw-semibold active">{{ $t("my_way.workplaces.2.dates") }}</small>
                        <p class="mb-0 fw-semibold">{{ $t("my_way.workplaces.2.description") }}</p>
                        </div>
                    </div>
                </div>
                <div class="card bg-primary bg-opacity-10 border-0 mb-5 fade-in-element">
                    <div class="card-body">
                        <div class="">
                        <img src="@/assets/rtk_white.png" width="100%" alt="html">
                        </div>
                        <div class="mb-4">
                        <h3>{{ $t("my_way.workplaces.3.name") }}</h3>
                        <small class="ls-md fw-semibold active">{{ $t("my_way.workplaces.3.dates") }}</small>
                        <p class="mb-0 s-md fw-semibold text-violet">
                            Senior SRE Engineer
                        </p>
                        <p class="mb-0 fw-semibold">{{ $t("my_way.workplaces.3.description") }}</p>
                        </div>
                    </div>
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
  name: 'MyWay',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>