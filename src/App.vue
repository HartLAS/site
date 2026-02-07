<template>
<noscript><div><img src="https://mc.yandex.ru/watch/100220043" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<header class="sticky-top navbar navbar-expand-lg bg-soft" :class="{ 'sticky-top border-bottom border-1 border-secondary': headerClass, 'border-0': !headerClass }">
  <div class="container px-2">
    <a href="#" class="active navbar-brand text-primary-hover fs-4 fw-bold" aria-current="page">HartLAS</a>
    <div class="mode-switch align-items-center d-flex" data-bs-toggle="mode">
      <label class="fw-bolder me-2" :class="currentLocale === 'ru' ? 'text-violet' : 'text-semigrey'" for="theme-mode">
        RU 
      </label>
      <div class="form-check form-switch d-flex align-items-center">
        <input class="form-check-input" type="checkbox" id="theme-mode" :checked="currentLocale === 'en'" @click="setLocale">
      </div>
      <label class="fw-bolder ms-2" :class="currentLocale === 'en' ? 'text-violet' : 'text-semigrey'" for="theme-mode">
        EN
      </label>
    </div>
  </div>
</header>
<router-view/>

<div class="btn-scroll-top" :class="{ 'active-progress': isVisible }"
        @click="scrollToTop">
        <svg class="progress-square bg-softer svg-content rounded" width="100%" height="100%" viewBox="0 0 40 40">
            <path 
                d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z"
                :style="pathStyle"
            />
        </svg>
</div>
</template>

<style lang="scss">
  @import '@/assets/main.scss';
</style>

<script>
import { ref, onMounted, onUnmounted, computed, onUpdated } from 'vue'
import { useI18n } from 'vue-i18n'

//  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//     m[i].l=1*new Date();
//     for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
//     k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
//     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

//     ym(100220043, "init", {
//         clickmap:true,
//         trackLinks:true,
//         accurateTrackBounce:true
//   });

export default {
    name: 'ScrollToTop',
    data() {
      return {
        currentLocale: localStorage.getItem('locale') || 'en',
      }
    },
    setup() {
        const isVisible = ref(false)
        const totalLength = 139.989
        const progress = ref(0)
        const headerClass = ref(false)

        const pathStyle = computed(() => ({
            transition: 'stroke-dashoffset 10ms linear',
            strokeDasharray: `${totalLength}, ${totalLength}`,
            strokeDashoffset: totalLength - (totalLength * progress.value)
        }))

        function updateScrollProgress() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
            progress.value = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0
            isVisible.value = progress.value > 0.01
            headerClass.value = progress.value > 0.01
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        // Оптимизация с throttle
        function throttle(func, delay) {
            let lastExecTime = 0
            return function(...args) {
                const currentTime = Date.now()
                if (currentTime - lastExecTime > delay) {
                    func.apply(this, args)
                    lastExecTime = currentTime
                }
            }
        }

        const throttledUpdate = throttle(updateScrollProgress, 16)

        onMounted(() => {
            window.addEventListener('scroll', throttledUpdate)
            updateScrollProgress() // Инициализация
            scrollToTop()
            initScrollAnimation()
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', throttledUpdate)
            scrollToTop()
            initScrollAnimation()
        })

        onUpdated(() => {
            initScrollAnimation()
        })

        const { t } = useI18n()

      const initScrollAnimation = () => {
      const elements = document.querySelectorAll('.fade-in-element')

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      })

      elements.forEach(el => {
        observer.observe(el)
      })
    }


        return {
            isVisible,
            headerClass,
            pathStyle,
            scrollToTop,
            t,
            locale: localStorage.getItem('locale') | 'ru',
        }
    },
    methods: {
      setLocale() {
        const newLocale = localStorage.getItem("locale") === 'ru' ? 'en' : 'ru'
        localStorage.setItem('locale', newLocale)
        this.$i18n.locale = newLocale
        this.currentLocale = newLocale
      }
    }
}
</script>