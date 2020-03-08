<template>
    <div class="margin-top-100">
        <label for="arp-checkbox">Maj Arp!</label>
        <input id="arp-checkbox" type="radio" name="radio-controls" @change="arpeggiateChecked()"><br />
        <label for="maj-chord-checkbox">Maj Chord!</label>
        <input id="maj-chord-checkbox" type="radio" name="radio-controls" @change="majChordChecked()"><br />
        <label for="min-chord-checkbox">Min Chord!</label>
        <input id="min-chord-checkbox" type="radio" name="radio-controls" @change="minChordChecked()"><br />
        <label for="custom-arp-checkbox">Custom Arp!</label>
        <input id="custom-arp-checkbox" type="radio" name="radio-controls" @change="customArpeggiateChecked()"><br />
        <label v-show="customArpeggiateCheckedVar" for="arp-intervals">Intervals</label><br />
        <input id="arp-intervals" class="width-200" v-show="customArpeggiateCheckedVar" type="text" placeholder="Comma Separated Intervals, eg 3,7,10" v-model="customNotes"><br />
        <label v-show="customArpeggiateCheckedVar" for="arp-speed">Speed</label><br />
        <input id="arp-speed" class="width-200" v-show="customArpeggiateCheckedVar" type="text" placeholder="Speed in ms" v-model="customNotesArpSpeed">

        <!-- v-show="customArpeggiateCheckedVar" -->
    </div>
</template>

<script>

export default {
    name: 'Controls',
    props: ['value'],
    data: function () {
        return {
            customArpeggiateCheckedVar:false,
        }
    },
    computed: {
        customNotes: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('customNotes', val);

            }
        },
        customNotesArpSpeed: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('customNotesArpSpeed', val);

            }
        }
    },
    methods: {
        arpeggiateChecked: function () {
            this.$emit('arpeggiateChecked', true);
            this.$emit('majChordChecked', false);
            this.$emit('minChordChecked', false);
            this.$emit('customArpeggiateChecked', true);
            this.customArpeggiateCheckedVar = false;
            // emit the event
        },
        majChordChecked: function () {
            this.$emit('majChordChecked', true);
            this.$emit('minChordChecked', false);
            this.$emit('arpeggiateChecked', false);
            this.$emit('customArpeggiateChecked', true);
            this.customArpeggiateCheckedVar = false;
            // emit the event
        },
        minChordChecked: function () {
            this.$emit('minChordChecked', true);
            this.$emit('majChordChecked', false);
            this.$emit('arpeggiateChecked', false);
            this.$emit('customArpeggiateChecked', false);
            this.customArpeggiateCheckedVar = false;
            // emit the event
        },
        customArpeggiateChecked: function () {
            this.customArpeggiateCheckedVar = true;
            this.$emit('customArpeggiateChecked', true);
            this.$emit('minChordChecked', false);
            this.$emit('majChordChecked', false);
            this.$emit('arpeggiateChecked', false);
            // emit the event
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .width-200{
        width:200px;
    }
</style>
