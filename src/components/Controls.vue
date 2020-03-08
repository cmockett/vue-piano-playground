<template>
    <div class="margin-top-100">
        <label for="arp-checkbox">ARP!</label>
        <input id="arp-checkbox" type="checkbox" @click="arpeggiateChecked()">
        <label for="maj-chord-checkbox">Maj Chord!</label>
        <input id="maj-chord-checkbox" type="checkbox" @click="majChordChecked()">
        <label for="min-chord-checkbox">Min Chord!</label>
        <input id="min-chord-checkbox" type="checkbox" @click="minChordChecked()">
    </div>
</template>

<script>

export default {
    name: 'Controls',
    methods: {
        arpeggiateChecked: function () {
            this.$emit('arpeggiateChecked');
            // emit the event
        },
        majChordChecked: function () {
            this.$emit('majChordChecked');
            // emit the event
        },
        minChordChecked: function () {
            this.$emit('minChordChecked');
            // emit the event
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
