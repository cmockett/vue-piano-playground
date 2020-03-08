<template>
    <div class="keyboard" style="--keys:38; --octaves:7;">
        <Note 
            :arpeggiateChecked="this.arpeggiateChecked"
            :majChordChecked="this.majChordChecked"
            :minChordChecked="this.minChordChecked"
            :customNotes="this.customNotes"
            :customNotesArpSpeed="this.customNotesArpSpeed"
        />
        <!-- bind attr to props(?), pass data DOWN to Note child -->
    </div>
</template>

<script>
import Note from './Note.vue'

export default {
    name: 'Piano',
    props: [
        "arpeggiateChecked",
        "majChordChecked",
        "minChordChecked",
        "customNotes",
        "customNotesArpSpeed"
    ],
    // set up props to grab data from parent
    components:{
        Note
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .keyboard{
        width: 100vw;
        height: calc(260px - var(--octaves)*10px);
        /*overflow-x: hidden;*/
    }
</style>
