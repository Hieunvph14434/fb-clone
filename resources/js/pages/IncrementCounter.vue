<template>
    <div class="bg-fb q-px-xl" style="min-height: 100vh;">
        <div class="login-container row items-center">
            <div class="login-label col q-pr-xl">
                <div class="text-blue-14 text-h2 text-bold q-mb-sm">facebook</div>
                <div class="text-grey-10">Facebook helps you connect and share with the people in your life.</div>
            </div>
            <div class="login-form borderborder-gray-200 bg-white q-pa-md rounded-borders-8">
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
                <a href="#" class="text-blue-14 flex justify-center text-decoration-none">Forgotten password?</a>
                <hr class="q-my-lg">
                <router-link
                    class="text-decoration-none hover-none"
                    :to="{ name: 'register', params: ({})}"
                >
                <CommonButton
                    :class="'bg-positive rounded-borders-6 text-transform-none fs-17 flex q-mx-auto q-py-sm q-mb-sm'"
                    :text="'Create new account'"
                />

                <!-- Sign up for Facebook -->
                </router-link>
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
