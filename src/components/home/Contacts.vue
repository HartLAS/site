<template>
<section class="my-lg-9 my-5">
<div class="container py-5">
    <div class="row">
        <div class="col-lg-10 offset-lg-1 col-md-12">
            <div class="row g-lg-10 gy-5 align-items-center">
            <div class="col-xl-6" >
                <div class="card bg-softer border-0 rounded fw-semibold" id="contacts">
                    <div class="card-body px-md-5 py-4">
                        <p class="mb-4 h3 text-light">{{ $t("contacts.title") }}</p>

                        <form class="needs-validation" novalidate="">
                        <div class="mb-3 border border-danger p-3 rounded text-center fw-semibold" v-if="this.err_global">
                            {{ $t("contacts.err_global") }}
                        </div>
                        <div class="mb-3">
                            <label for="YourNameInput" class="form-label">{{ $t("contacts.inputs.0.label") }}</label>
                            {{ err_name }}
                            <input type="text" class="form-control" :class="this.err_name ? 'border border-danger': ''" id="YourNameInput" :placeholder="$t('contacts.inputs.0.placeholder')" required="" v-model="this.name">
                        </div>
                        <div class="mb-3">
                            <label for="yourEmailInput" class="form-label">{{ $t("contacts.inputs.1.label") }}</label>
                            <input type="email" class="form-control" :class="this.err_email ? 'border border-danger': ''" id="yourEmailInput" :placeholder="$t('contacts.inputs.1.placeholder')" required="" v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="messageTextarea" class="form-label">{{ $t("contacts.inputs.2.label") }}</label>
                            <textarea class="form-control" id="messageTextarea" :placeholder="$t('contacts.inputs.2.placeholder')" rows="4" required="" v-model="message"></textarea>
                        </div>
                        <button class="btn btn-violet" type="button" @click="submitForm()">{{ $t("contacts.btn") }}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 text-light px-5" data-cue="zoomIn" data-show="true">
                <div class="mb-5 text-center text-xl-start">
                    <div class="mb-3">
                        <img src="/picts/me.jpg" alt="avatar" class="avatar-xl rounded-circle">
                    </div>

                    <h3 class="mb-0">{{ $t("hero.name") }}</h3>
                    <small class="text-violet">{{ $t("contacts.position") }}</small>
                </div>
                <div class="d-flex mb-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone text-semigrey" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                        </svg>
                    </div>
                    <div class="ms-2">
                        <h5 class="mb-0 text-semigrey">{{ $t("contacts.phone_title") }}:</h5>
                        <small class="text-violet">+7 916 266 07 41</small>
                    </div>
                </div>
                <div class="d-flex mb-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check text-semigrey" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"></path>
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"></path>
                        </svg>
                    </div>
                    <div class="ms-2">
                        <h5 class="mb-0 text-semigrey">E-mail:</h5>

                        <small>
                        <a href="mailto:hartlas.tech@yandex.ru" class="text-violet">hartlas.tech@yandex.ru</a>
                        </small>
                    </div>
                </div>
                <div class="btns-m-1">
                    <a href="https://t.me/HartLAS" class=" btn btn-instagram btn-icon tg-icon" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/artem-babkin-a433892ba" target="_blank" class=" btn l-in-icon btn-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                        </svg>
                    </a>
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
  name: 'ContactsVue',
  props: {
    msg: String
  },
  data() {
    return {
        name: "",
        email: "",
        message: "",
        err_global: false,
        err_name: false,
        err_email: false
    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  methods: {
    submitForm(){
        this.err_global = false
        this.err_name = false
        this.err_email = false
        const patterns = {
            singleName: /^[a-zA-Zа-яА-Я\-']+$/, // Одно слово с дефисами и апострофами
            fullName: /^[a-zA-Zа-яА-Я\-']+\s[a-zA-Zа-яА-Я\-']+$/, // Два слова
            emailPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        };

        if (this.name.replace(/\s/g, "") === "" || this.email.replace(/\s/g, "") === "" || this.message.replace(/\s/g, "") === "" ) {
            return this.err_global = true
        }

        if (!patterns.singleName.test(this.name) && !patterns.fullName.test(this.name)) {
            this.err_name = true 
            return
        }

        if (!patterns.emailPattern.test(this.email)) {
            this.err_email = true 
            return
        }

        this.sendMessage()
    },
    sendMessage() {
        let telegram_bot_token = '7574682007:AAHM8Umz5XfFL4ALfeL_qgDvbDgYDEnA1EI';
        let telegram_chat_id = '-1003066668501'    

        fetch('https://api.telegram.org/bot' + telegram_bot_token + '/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: telegram_chat_id,
                text: 'Новое сообщение из формы сайта резюме' + '\n' + this.name + '\n' + this.email + '\n' + this.message
            })
        })
        .catch(error => {
            console.error('Error sending message:', error);
        });

        this.message = ""
        this.email = ""
        this.name = ""
    }
  }
}
</script>


<style lang="scss">
  @import '@/assets/styles/contacts.scss';
</style>