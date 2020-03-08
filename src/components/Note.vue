<template>
	<ul>
		<li 
			v-for="(key, index) in audioArray" 
			v-bind:key="key.id" 
			@mousedown="mouseDown(key,index)" 
			@mouseup="mouseUp(key, index)"
			v-bind:class="{ 'white': key.whiteBoolean, 'black': !key.whiteBoolean }" 
			v-bind:style="[key.whiteBoolean ? {'grid-column':  (key.id * 3 - 2) +'/' + ' span 3'} : {'grid-column': (key.id * 3 - 2) +'/' + ' span 3'}]"
			v-bind:id="key.id + '-audio'"
		>
			<span>{{key.label}}</span>
		</li>
	</ul>
</template>

<script>
export default {
    name: 'Note',
    props: [
        "arpeggiateChecked",
        "majChordChecked",
        "minChordChecked"
    ],
    // set up props to grab data from parent
    data: function() {
        return {
            audioArray: [
                {id:  1, sample: new Audio('/audio/Piano.mf.C1.m4a'), label:'C1', whiteBoolean:true},
                {id:  2, sample: new Audio('/audio/Piano.mf.Db1.m4a'), label:'Db1', whiteBoolean:false},
                {id:  3, sample: new Audio('/audio/Piano.mf.D1.m4a'), label:'D1', whiteBoolean:true},
                {id:  4, sample: new Audio('/audio/Piano.mf.Eb1.m4a'), label:'Eb1', whiteBoolean:false},
                {id:  5, sample: new Audio('/audio/Piano.mf.E1.m4a'), label:'E1', whiteBoolean:true},
                {id:  6, sample: new Audio('/audio/Piano.mf.F1.m4a'), label:'F1', whiteBoolean:true},
                {id:  7, sample: new Audio('/audio/Piano.mf.Gb1.m4a'), label:'Gb1', whiteBoolean:false},
                {id:  8, sample: new Audio('/audio/Piano.mf.G1.m4a'), label:'G1', whiteBoolean:true},
                {id:  9, sample: new Audio('/audio/Piano.mf.Ab1.m4a'), label:'Ab1', whiteBoolean:false},
                {id: 10, sample: new Audio('/audio/Piano.mf.A1.m4a'), label:'A1', whiteBoolean:true},
                {id: 11, sample: new Audio('/audio/Piano.mf.Bb1.m4a'), label:'Bb1', whiteBoolean:false},
                {id: 12, sample: new Audio('/audio/Piano.mf.B1.m4a'), label:'B1', whiteBoolean:true},
                {id: 13, sample: new Audio('/audio/Piano.mf.C2.m4a'), label:'C2', whiteBoolean:true},
                {id: 14, sample: new Audio('/audio/Piano.mf.Db2.m4a'), label:'Db2', whiteBoolean:false},
                {id: 15, sample: new Audio('/audio/Piano.mf.D2.m4a'), label:'D2', whiteBoolean:true},
                {id: 16, sample: new Audio('/audio/Piano.mf.Eb2.m4a'), label:'Eb2', whiteBoolean:false},
                {id: 17, sample: new Audio('/audio/Piano.mf.E2.m4a'), label:'E2', whiteBoolean:true},
                {id: 18, sample: new Audio('/audio/Piano.mf.F2.m4a'), label:'F2', whiteBoolean:true},
                {id: 19, sample: new Audio('/audio/Piano.mf.Gb2.m4a'), label:'Gb2', whiteBoolean:false},
                {id: 20, sample: new Audio('/audio/Piano.mf.G2.m4a'), label:'G2', whiteBoolean:true},
                {id: 21, sample: new Audio('/audio/Piano.mf.Ab2.m4a'), label:'Ab2', whiteBoolean:false},
                {id: 22, sample: new Audio('/audio/Piano.mf.A2.m4a'), label:'A2', whiteBoolean:true},
                {id: 23, sample: new Audio('/audio/Piano.mf.Bb2.m4a'), label:'Bb2', whiteBoolean:false},
                {id: 24, sample: new Audio('/audio/Piano.mf.B2.m4a'), label:'B2', whiteBoolean:true},
                {id: 25, sample: new Audio('/audio/Piano.mf.C3.m4a'), label:'C3', whiteBoolean:true},
                {id: 26, sample: new Audio('/audio/Piano.mf.Db3.m4a'), label:'Db3', whiteBoolean:false},
                {id: 27, sample: new Audio('/audio/Piano.mf.D3.m4a'), label:'D3', whiteBoolean:true},
                {id: 28, sample: new Audio('/audio/Piano.mf.Eb3.m4a'), label:'Eb3', whiteBoolean:false},
                {id: 29, sample: new Audio('/audio/Piano.mf.E3.m4a'), label:'E3', whiteBoolean:true},
                {id: 30, sample: new Audio('/audio/Piano.mf.F3.m4a'), label:'F3', whiteBoolean:true},
                {id: 31, sample: new Audio('/audio/Piano.mf.Gb3.m4a'), label:'Gb3', whiteBoolean:false},
                {id: 32, sample: new Audio('/audio/Piano.mf.G3.m4a'), label:'G3', whiteBoolean:true},
                {id: 33, sample: new Audio('/audio/Piano.mf.Ab3.m4a'), label:'Ab3', whiteBoolean:false},
                {id: 34, sample: new Audio('/audio/Piano.mf.A3.m4a'), label:'A3', whiteBoolean:true},
                {id: 35, sample: new Audio('/audio/Piano.mf.Bb3.m4a'), label:'Bb3', whiteBoolean:false},
                {id: 36, sample: new Audio('/audio/Piano.mf.B3.m4a'), label:'B3', whiteBoolean:true},
            ],
        };
    },
	methods: {
		mouseDown: function(key, index){
			if(this.arpeggiateChecked){
				this.arpSample(
					this.audioArray[index], 
					this.audioArray[index+4], 
					this.audioArray[index+7]
				) 
			} else if (this.majChordChecked) {
				this.ChordSample(
					this.audioArray[index], 
					this.audioArray[index+4], 
					this.audioArray[index+7]
				) 
			} else if (this.minChordChecked) {
				this.ChordSample(
					this.audioArray[index], 
					this.audioArray[index+3], 
					this.audioArray[index+7]
				) 
			}else{
				this.playSample(key)
			}
		},
		mouseUp: function(key, index){
			if(this.arpeggiateChecked || this.majChordChecked){
				this.arpStopSample(
					this.audioArray[index], 
					this.audioArray[index+4], 
					this.audioArray[index+7]
				) 
			}else if(this.minChordChecked){
				this.arpStopSample(
					this.audioArray[index], 
					this.audioArray[index+3], 
					this.audioArray[index+7]
				) 
			}else{
				this.stopSample(key)
			}
		},
		playSample: function(key){
			key.sample.play();
			document.getElementById(key.id + '-audio').style.backgroundColor = "#90EE90";
		},
		stopSample: function(key){
			key.sample.pause();
			key.sample.load();
			document.getElementById(key.id + '-audio').style.backgroundColor = key.whiteBoolean ? "initial" : "#000";
		},
		arpSample: function(key1, key2, key3){
			key1.sample.play();
			document.getElementById(key1.id + '-audio').style.backgroundColor = "#90EE90";
			setTimeout(function(){
				key2.sample.play();
				document.getElementById(key2.id + '-audio').style.backgroundColor = "#90EE90";
			}, 250);
			setTimeout(function(){
				key3.sample.play();
				document.getElementById(key3.id + '-audio').style.backgroundColor = "#90EE90";
			}, 500);
		},
		arpStopSample: function(key1, key2, key3){
			key1.sample.pause();
			key1.sample.load();
			document.getElementById(key1.id + '-audio').style.backgroundColor = key1.whiteBoolean ? "initial" : "#000";
			key2.sample.pause();
			key2.sample.load();
			document.getElementById(key2.id + '-audio').style.backgroundColor = key2.whiteBoolean ? "initial" : "#000";
			key3.sample.pause();
			key3.sample.load();
			document.getElementById(key3.id + '-audio').style.backgroundColor = key3.whiteBoolean ? "initial" : "#000";
		},
		ChordSample: function(key1, key2, key3){
			key1.sample.play();
			document.getElementById(key1.id + '-audio').style.backgroundColor = "#90EE90";
			key2.sample.play();
			document.getElementById(key2.id + '-audio').style.backgroundColor = "#90EE90";
			key3.sample.play();
			document.getElementById(key3.id + '-audio').style.backgroundColor = "#90EE90";
		},
	},
}
</script>

<style scoped>
	ul{
        height:100%;
        width:100%;
        display: grid;
        list-style-type: none;
        grid-template-columns: repeat(calc(var(--keys)*3),1fr);
        grid-template-rows: repeat(3,1fr);
    }
    li{
        border:1px solid gray;
        display:flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: end;
        align-items: flex-end;
        padding-bottom: .25rem;
    }
    .white{
        grid-row: 1/span 3;
        z-index: 2;
    }
    .black{
        background-color: #000;
        color: #fff;
        z-index: 3;
        grid-row: 1/span 2;
    }
    .black span{
        transform: rotate(90deg);
        -webkit-transform-origin: center 50%;
        transform-origin: center 50%;
    }
</style>