<template>
<section class="py-5 bg-primary-blend-gradient-1 text-dark my-5 bg-dark-blue">
   <div class="col-md-10 offset-md-1 p-5 bg-primary-blend-gradient rounded">
      <div class="row align-items-center mb-5 text-light">
         <div class="col-xxl-6 col-md-12">
            <div class="mb-4 mb-xxl-0 text-center text-xxl-start">
               <small class="text-uppercase fw-bold ls-md text-dark-grey-600 fs-5">Референс</small>
               <h2 class="my-4">
                  Я горжусь
                  <span class="text-violet">моими результатами</span>
               </h2>
               <p class="mb-0">И предлагаю решения, которые облегчают жизнь всем в процессе разработки и эксплуатации.</p>
            </div>
         </div>
         <div class="col-xxl-6 col-lg-12 col-md-12 fw-semibold">
            <div class="row gy-4">
               <div class="col-md-6">
                  <div class="text-center text-xxl-start">
                     <h2 class="mb-1">99.9%</h2>
                     <span>Доступность систем</span>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="text-center text-xxl-start">
                     <h2 class="mb-1">60%+</h2>
                     <span>Сокращение времени развертывания</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-xxl-3 col-md-6 mb-4 mb-xxl-0">
            <div class="card shadow-sm h-100 border-0">
               <div class="card-body position-relative">
                  <p class="mb-4">"Благодаря внедренной CI/CD pipeline наша команда сократила время выпуска обновлений с 2 недель до нескольких часов. Инфраструктура как код позволила нам легко масштабироваться под нагрузку."</p>
                  <h5 class="mb-0 position-absolute bottom-5">Алексей П.</h5>
               </div>
            </div>
         </div>
         <div class="col-xxl-3 col-md-6 mb-4 mb-xxl-0">
            <div class="card shadow-sm h-100 border-0">
               <div class="card-body position-relative">
                  <p class="mb-4">"Миграция в облако и автоматизация мониторинга позволили сократить эксплуатационные расходы на 40%. Теперь мы проактивно обнаруживаем проблемы до того, как они повлияют на пользователей."</p>
                  <h5 class="mb-0 position-absolute bottom-5">Мария С.</h5>
               </div>
            </div>
         </div>
         <div class="col-xxl-3 col-md-6 mb-4 mb-xxl-0">
            <div class="card shadow-sm h-100 border-0">
               <div class="card-body position-relative">
                  <p class="mb-4">"Внедрение Kubernetes и контейнеризации повысило эффективность использования ресурсов в 3 раза. Разработчики теперь могут самостоятельно развертывать сервисы без участия Ops-команды."</p>
                  <h5 class="mb-0 position-absolute bottom-5">Дмитрий К.</h5>
               </div>
            </div>
         </div>
         <div class="col-xxl-3 col-md-6 mb-4 mb-xxl-0">
            <div class="card shadow-sm h-100 border-0">
               <div class="card-body position-relative">
                  <p class="mb-4">"Реализованная система безопасности и compliance полностью соответствует требованиям GDPR и ISO 27001. Автоматизированные процессы обеспечивают надежность и соответствие стандартам."</p>
                  <h5 class="mb-0 position-absolute bottom-5">Иван В.</h5>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>
<script>
export default {
  name: 'CompetentionsVue',
  methods: {
    currentYear() {
      return new Date().getFullYear();
    },
    yearNAgo() {
      return this.currentYear() - 2018;
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/styles/competentions.scss';
</style>