<template>
    <q-select
        v-model="state.modelData"
        :options="options"
        dense
        outlined
        no-error-icon
        dropdown-icon="mdi-chevron-down"
    >
        <template v-if="tooltip">
            <CommonTooltip
                :text="labelTooltip"
                :anchor="'bottom middle'"
                :self="'top middle'"
            />
        </template>
    </q-select>
</template>

<script>
import { reactive } from 'vue'
import CommonTooltip from 'components/common/tooltip/CommonTooltip.vue'

export default {
    components: {
        CommonTooltip
    },
    props: {
        modelValue: {
            type: [ Object, String ],
            required: false,
            default: null
        },
        options: {
            type: Array,
            required: true,
        },
        // tooltip
        tooltip: {
            type: Boolean,
            required: false,
            default: false
        },
        labelTooltip: {
            type: String,
            required: false,
            default: null
        },
    },
    setup(props) {
        const state = reactive({
            modelData: props.modelValue
        })
        return {
            state
        }
    }
}
</script>
