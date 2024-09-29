<template>
    <div :class="parentClass">
        <q-radio
            v-model="state.modelData"
            v-for="option in options"
            :key="option.value"
            :val="option.value"
            :label="option.label"
            dense
            unchecked-icon="mdi-radiobox-blank"
            checked-icon="mdi-radiobox-marked"
            :class="customClass"
        />
    </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
    props: {
        modelValue: {
            type: [ Number, String ],
            required: true,
        },
        options: {
            type: Array,
            required: true
        },
        parentClass: {
            type: Object,
            required: false,
            default: () => ({})
        },
        customClass: {
            type: Object,
            required: false,
            default: () => ({})
        }
    },
    emits: ['update:modelValue'],
    setup (props, { emit }) {
        // data
        const state = reactive({
            modelData: props.modelValue
        })

        // watch
        watch(() => props.modelValue, ( newValue ) => {
            state.modelData = newValue;
        });

        watch(() => state.modelData, ( newValue ) => {
            emit('update:modelValue', newValue);
        });

        return {
            state
        }
    }
}
</script>
