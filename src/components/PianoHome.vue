<template>
    <div>
        <Piano 
            :arpeggiateChecked="controls.arpeggiateChecked"
            :majChordChecked="controls.majChordChecked"
            :minChordChecked="controls.minChordChecked"
        />
        <!-- bind attr to obj, pass data DOWN to Piano child -->
        <Controls
            @arpeggiateChecked="controls.arpeggiateChecked = !controls.arpeggiateChecked;"
            @majChordChecked="controls.majChordChecked = !controls.majChordChecked;"
            @minChordChecked="controls.minChordChecked = !controls.minChordChecked;"
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
            }
        }
    },
}
</script>

<style scoped>
    
</style>