<template>
    <q-tooltip :anchor="anchor" :self="self" :offset="offset">
        {{ text }}
    </q-tooltip>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        anchor: {
            type: String,
            required: false,
            default: "bottom right"
        },
        self: {
            type: String,
            required: false,
            default: "top left"
        },
        offset: {
            type: Array,
            required: false,
            default: () => [0, 0]
        }
    },
    setup() {
        return {}
    }
}
</script>
