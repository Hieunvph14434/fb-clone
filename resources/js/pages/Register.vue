<template>
    <div class="bg-fb" style="min-height: 100vh;">
        <div class="column items-center q-pt-lg">
            <div class="text-blue-14 text-h2 text-bold q-mb-lg">facebook</div>
            <div class="register-form col borderborder-gray-200 bg-white q-pa-md rounded-borders-8">
                <div class="fs-25 fw-600 text-grey-10 text-center q-mt-sm">Create a new account</div>
                <div class="fs-15 fw-300 text-grey-10 text-center q-mt-sm">It's quick and easy.</div>
                <hr class="q-my-md">
                <q-form>
                    <div class="row q-gutter-x-md q-mb-sm">
                        <InputText
                            :type="'text'"
                            :placeholder="'First name'"
                            :class="'col q-field--outlined outlined-rounded-6'"
                        />
                        <InputText
                            :type="'text'"
                            :placeholder="'Surname'"
                            :class="'col q-field--outlined outlined-rounded-6'"
                        />
                    </div>
                    <div class="fs-12 flex items-baseline q-mb-xs">
                        Date of birth
                        <q-icon name="mdi-help-circle" class="q-ml-xs fs-14">
                            <CommonTooltip
                                :text="'Click for more information'"
                            />
                        </q-icon>
                    </div>
                    <div class="row q-gutter-x-md q-mb-sm">
                        <InputSelect
                            v-model="state.day"
                            :options="state.days"
                            :class="'col'"
                            :tooltip="true"
                            :label-tooltip="'Day'"
                            :icon-name="'mdi mdi-help-circle'"
                        />
                        <InputSelect
                            v-model="state.day"
                            :options="state.days"
                            :class="'col'"
                            :tooltip="true"
                            :label-tooltip="'Month'"
                        />
                        <InputSelect
                            v-model="state.day"
                            :options="state.days"
                            :class="'col'"
                            :tooltip="true"
                            :label-tooltip="'Year'"
                        />
                    </div>
                    <div class="fs-12 flex items-baseline q-mb-xs">
                        Gender
                        <q-icon name="mdi-help-circle" class="q-ml-xs fs-14">
                            <CommonTooltip
                                :text="'Click for more information'"
                            />
                        </q-icon>
                    </div>
                    <InputRadio
                        v-model="state.gender"
                        :options="state.genderOptions"
                        :parent-class="{'row q-gutter-x-md q-mb-sm': true}"
                        :custom-class="{'col row reverse justify-between border rounded-borders-6': true}"
                    />
                    <InputText
                        :type="'text'"
                        :placeholder="'Mobile number or email address'"
                        :class="'col q-mb-sm q-field--outlined outlined-rounded-6'"
                    />
                    <InputText
                        :type="'text'"
                        :placeholder="'New password'"
                        :class="'col q-mb-md q-field--outlined outlined-rounded-6'"
                    />
                    <div class="policy">
                        <div class="fs-11 text-grey-7 q-mb-md">
                            People who use our service may have uploaded your contact information to Facebook.
                            <a href="#" class="text-decoration-none text-indigo-8">Learn more.</a>
                        </div>
                        <div class="fs-11 text-grey-7 q-mb-md">
                            By clicking Sign Up, you agree to our
                            <a href="#" class="text-decoration-none text-indigo-8">Terms</a>,
                            <a href="#" class="text-decoration-none text-indigo-8">Privacy Policy</a> and
                            <a href="#" class="text-decoration-none text-indigo-8">Cookies Policy.</a>
                            You may receive SMS notifications from us and can opt out at any time.
                        </div>
                    </div>
                    <CommonButton
                        :text="'Sign Up'"
                        :class="'q-mb-md rounded-borders-6 text-transform-none fs-18 height-36 bg-green-7 flex q-mx-auto q-px-xl'"
                    />
                </q-form>
                <div class="row justify-center q-gutter-x-sm q-mb-md">
                    <router-link
                        class="text-blue-14 fs-17 flex justify-center text-decoration-none"
                       :to="{ name: 'login', params: ({})}"
                    >
                    Already have an account?
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
import InputText from 'components/common/form/InputText.vue'
import InputSelect from 'components/common/form/InputSelect.vue'
import InputRadio from 'components/common/form/InputRadio.vue'
import CommonButton from 'components/common/button/CommonButton.vue'
import CommonTooltip from 'components/common/tooltip/CommonTooltip.vue'

export default {
    components: {
        InputText,
        InputSelect,
        InputRadio,
        CommonButton,
        CommonTooltip
    },
    setup() {
        const state = reactive({
            day: null,
            days: [
                1, 2, 3
            ],
            gender: null,
            genderOptions: [
                { label: 'Female', value: 0 },
                { label: 'Male', value: 1 },
                { label: 'Other', value: 2 },
            ]
        })
        return { state }
    },
}
</script>
