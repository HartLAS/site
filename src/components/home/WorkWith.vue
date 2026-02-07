<template>
<section class="mt-5 position-relative bg-softer">
    <div class="container py-5">
        <div class="row mt-5">
            <div class="col-lg-5 offset-xl-1 order-1 order-lg-2">
                <div class="text-light">
                    <small class="text-uppercase fw-bold ls-md text-dark-grey-600 fs-5">{{ $t("instruments.title") }}</small>
                    <div class="my-4">
                        <h2 class="my-4">{{ $t("instruments.sub_title") }}</h2>
                        <p class="mb-5 text-dark-grey-500">{{ $t("instruments.sub_title_text") }}</p>
                    </div>
                    <div class="linux-console">
                      <div class="console-header bg-primary bg-opacity-10">
                        <div class="console-buttons">
                          <span class="console-btn close"></span>
                          <span class="console-btn minimize"></span>
                          <span class="console-btn maximize"></span>
                        </div>
                        <div class="console-title">127.0.0.1@HartLAS</div>
                      </div>
                      <div class="console-body bg-soft">
                        <div class="command-line">
                          <span class="prompt">~:</span> <span class="command ms-1">{{ displayedText }}</span>
                          <span class="cursor">|</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 position-relative order-2 order-lg-1 rounded mt-5 кщц">
                <div class="accordion" id="industries">
                  <div class="accordion-item mb-n3 mb-lg-n2 mb-xl-1" v-for="(index, value) in limitedInstruments" :key="value">
                    <h3 class="accordion-header">
                      <button class="accordion-button collapsed fw-semibold fs-5 text-light" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + value" aria-expanded="false" :aria-controls="value">{{$t('instruments.list.' + value + '.title')}}</button>
                    </h3>
                    <div class="accordion-collapse collapse" :id="value" data-bs-parent="#industries" style="">
                        <div class="d-flex flex-wrap gap-2 ms-4 tags">
                            <span class="badge bg-soft text-semigrey py-2 px-3 fw-semibold"  v-for="(instrument, index) in $tm(`instruments.list.${value}.sub_list`)" :key="index">{{ instrument }}</span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
</div>
</section>
</template>

<style lang="scss">
  @import '@/assets/styles/workwith.scss';
</style>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'WorkWith',
  setup() {
    const { t } = useI18n()
    return { t }
  },
  computed: {
    limitedInstruments() {
      return this.$t('instruments.list').slice(0, 13);
    },
  },
  data() {
    return {
      commands: [
        'dpkg-deb --build ./demo-package',
        'kubectl get pods -a -o wide',
        'docker build . --tag image:0.1',
        'terraform validate',
        'ansible-galaxy init nginx',
        'git push origin review',
        'helm install loki -n logging ./',
        'systemctl status nginx',
        'journalctl -f -u kubelet',
        'nginx -t',
        'curl -v https://hartlas.ru',
        'ceph orch ls'
      ],
      displayedText: '',
      currentCommandIndex: 0,
      currentCharIndex: 0,
      isDeleting: false,
      isWaiting: false,
      intervalId: null
    }
  },
  mounted() {
    this.startTyping()
  },
  beforeUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },
  methods: {
    startTyping() {
      this.intervalId = setInterval(() => {
        this.typeText()
      }, 150)
    },
    typeText() {
      const command = this.commands[this.currentCommandIndex]
      
      if (this.isWaiting) {
        // Ждем перед удалением
        this.isWaiting = false
        this.isDeleting = true
        return
      }
      
      if (this.isDeleting) {
        // Удаление текста
        if (this.currentCharIndex > 0) {
          this.currentCharIndex--
          this.displayedText = command.substring(0, this.currentCharIndex)
        } else {
          // Текст полностью удален - переходим к следующей команде
          this.isDeleting = false
          this.currentCommandIndex = (this.currentCommandIndex + 1) % this.commands.length
          this.currentCharIndex = 0
        }
      } else {
        // Печать текста
        if (this.currentCharIndex < command.length) {
          this.currentCharIndex++
          this.displayedText = command.substring(0, this.currentCharIndex)
        } else {
          // Текст полностью напечатан - ждем перед удалением
          this.isWaiting = true
          // Устанавливаем паузу перед удалением
          setTimeout(() => {
            this.isWaiting = false
            this.isDeleting = true
          }, 2000)
        }
      }
    }
  }
}
</script>