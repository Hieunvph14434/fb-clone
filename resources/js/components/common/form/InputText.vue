<template>
    <q-input
        v-model="state.modelData"
        :type="type"
        dense
        outlined
        :placeholder="placeholder"
    >

    </q-input>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
    components: {

    },
    props: {
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        placeholder: {
            type: String,
            required: false,
            default: null
        }
    },
    setup(props) {
        const state = reactive({
            modelData: ref(props.modelValue)
        })


        return {
            state
        }
    }
}
</script>
