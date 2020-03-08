<template>
    <div class="margin-top-100">
        <label for="arp-checkbox">ARP!</label>
        <input id="arp-checkbox" type="radio" name="radio-controls" @change="arpeggiateChecked()"><br />
        <label for="maj-chord-checkbox">Maj Chord!</label>
        <input id="maj-chord-checkbox" type="radio" name="radio-controls" @change="majChordChecked()"><br />
        <label for="min-chord-checkbox">Min Chord!</label>
        <input id="min-chord-checkbox" type="radio" name="radio-controls" @change="minChordChecked()">
    </div>
</template>

<script>

export default {
    name: 'Controls',
    methods: {
        arpeggiateChecked: function () {
            this.$emit('arpeggiateChecked', true);
            this.$emit('majChordChecked', false);
            this.$emit('minChordChecked', false);
            // emit the event
        },
        majChordChecked: function () {
            this.$emit('majChordChecked', true);
            this.$emit('minChordChecked', false);
            this.$emit('arpeggiateChecked', false);
            // emit the event
        },
        minChordChecked: function () {
            this.$emit('minChordChecked', true);
            this.$emit('majChordChecked', false);
            this.$emit('arpeggiateChecked', false);
            // emit the event
        }
    },
    props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
