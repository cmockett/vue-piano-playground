<template>
    <div>
        <Piano 
            :arpeggiateChecked="controls.arpeggiateChecked"
            :majChordChecked="controls.majChordChecked"
            :minChordChecked="controls.minChordChecked"
            :customNotes="customNotes"
            :customNotesArpSpeed="customNotesArpSpeed"
        />
        <!-- bind attr to obj, pass data DOWN to Piano child -->
        <Controls
            
            @arpeggiateChecked="controls.arpeggiateChecked = $event"
            @majChordChecked="controls.majChordChecked = $event"
            @minChordChecked="controls.minChordChecked = $event"
            @customNotes="customNotes = $event"
            @customNotesArpSpeed="customNotesArpSpeed = $event"
        />
        <!-- @event, handle emitted event UP from Controls child component -->
    </div>
</template>

<script>
import Piano from './Piano.vue'
import Controls from './Controls.vue'

export default {
    name: 'PianoHome',
    components: {
        Piano, 
        Controls
    },
    data:function(){
        return{
            controls: {
                arpeggiateChecked: false,
                majChordChecked: false,
                minChordChecked: false,
                customArpeggiateChecked:false
            },
            customNotes: [],
            customNotesArpSpeed:250
        }
    },
}
</script>

<style scoped>
    
</style>