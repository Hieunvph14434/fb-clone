<template>
    <q-btn
        :type="'button'"
        unelevated
        class="text-white bg-primary"
    >
    {{ text }}
  </q-btn>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true,
                default: 'Submit'
            }
        },
        setup(props) {

        }
    }
</script>
