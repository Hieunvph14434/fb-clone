<template>
    <div class="bg-fb" style="min-height: 100vh;">
        <div class="column items-center q-pt-xl">
            <div class="text-blue-14 text-h3 text-bold q-mb-md">facebook</div>
            <div class="login-form col borderborder-gray-200 bg-white q-pa-md rounded-borders-8">
                <div class="fs-18 text-grey-10 text-center q-mt-sm q-mb-lg">Log in to Facebook</div>
                <q-form>
                    <InputText
                        :type="'text'"
                        :placeholder="'Email address or phone number'"
                        :class="'q-mb-md q-field--dense-51 q-field--outlined outlined-rounded-6'"
                    />
                    <InputText
                        :type="'password'"
                        :placeholder="'Password'"
                        :class="'q-mb-md q-field--dense-51 q-field--outlined outlined-rounded-6'"
                    />
                    <CommonButton
                        :text="'Log in'"
                        :class="'q-mb-md full-width rounded-borders-6 text-transform-none fs-19 bg-blue-14'"
                    />
                </q-form>
                <div class="row justify-center q-gutter-x-sm q-mb-sm">
                    <a href="#" class="text-blue-14 flex justify-center text-decoration-none">Forgotten password?</a>
                    <router-link
                        class="text-blue-14 flex justify-center text-decoration-none"
                        :to="{ name: 'register', params: ({})}"
                    >
                    Sign up for Facebook
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import InputText from 'components/common/form/InputText.vue'
import CommonButton from 'components/common/button/CommonButton.vue'

export default {
    components: {
        InputText,
        CommonButton
    },
    setup() {
        const count = ref(0)
        return { count }
    },
}
</script>
