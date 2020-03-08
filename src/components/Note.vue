<template>
	<ul>
		<li 
			v-for="(key, index) in audioArray" 
			v-bind:key="key.id" 
			@mousedown="mouseDown(key,index)" 
			@mouseup="mouseUp(key, index)"
			v-bind:class="{ 'white': key.whiteBoolean, 'black': !key.whiteBoolean }" 
			v-bind:style="[key.whiteBoolean ? {'grid-column':  (key.whiteKeyIndex * 3 - 2) +'/' + ' span 3'} : {'grid-column': (key.blackKeyIndex * 3) +'/' + ' span 2'}]"
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
        "minChordChecked",
        "customNotes",
        "customNotesArpSpeed"
    ],
    // set up props to grab data from parent
    data: function() {
        return {
            audioArray: [
                {id: 1, sample: new Audio('/audio/Piano.mf.C1.m4a'), label:'C1', whiteBoolean:true, whiteKeyIndex:1, blackKeyIndex:null},
                {id: 2, sample: new Audio('/audio/Piano.mf.Db1.m4a'), label:'Db1', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:1},
                {id: 3, sample: new Audio('/audio/Piano.mf.D1.m4a'), label:'D1', whiteBoolean:true, whiteKeyIndex:2, blackKeyIndex:null},
                {id: 4, sample: new Audio('/audio/Piano.mf.Eb1.m4a'), label:'Eb1', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:2},
                {id: 5, sample: new Audio('/audio/Piano.mf.E1.m4a'), label:'E1', whiteBoolean:true, whiteKeyIndex:3, blackKeyIndex:null},
                {id: 6, sample: new Audio('/audio/Piano.mf.F1.m4a'), label:'F1', whiteBoolean:true, whiteKeyIndex:4, blackKeyIndex:null},
                {id: 7, sample: new Audio('/audio/Piano.mf.Gb1.m4a'), label:'Gb1', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:4},
                {id: 8, sample: new Audio('/audio/Piano.mf.G1.m4a'), label:'G1', whiteBoolean:true, whiteKeyIndex:5, blackKeyIndex:null},
                {id: 9, sample: new Audio('/audio/Piano.mf.Ab1.m4a'), label:'Ab1', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:5},
                {id: 10, sample: new Audio('/audio/Piano.mf.A1.m4a'), label:'A1', whiteBoolean:true, whiteKeyIndex:6, blackKeyIndex:null},
                {id: 11, sample: new Audio('/audio/Piano.mf.Bb1.m4a'), label:'Bb1', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:6},
                {id: 12, sample: new Audio('/audio/Piano.mf.B1.m4a'), label:'B1', whiteBoolean:true, whiteKeyIndex:7, blackKeyIndex:null},

                {id: 13, sample: new Audio('/audio/Piano.mf.C2.m4a'), label:'C2', whiteBoolean:true, whiteKeyIndex:8, blackKeyIndex:null},
                {id: 14, sample: new Audio('/audio/Piano.mf.Db2.m4a'), label:'Db2', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:8},
                {id: 15, sample: new Audio('/audio/Piano.mf.D2.m4a'), label:'D2', whiteBoolean:true, whiteKeyIndex:9, blackKeyIndex:null},
                {id: 16, sample: new Audio('/audio/Piano.mf.Eb2.m4a'), label:'Eb2', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:9},
                {id: 17, sample: new Audio('/audio/Piano.mf.E2.m4a'), label:'E2', whiteBoolean:true, whiteKeyIndex:10, blackKeyIndex:null},
                {id: 18, sample: new Audio('/audio/Piano.mf.F2.m4a'), label:'F2', whiteBoolean:true, whiteKeyIndex:11, blackKeyIndex:null},
                {id: 19, sample: new Audio('/audio/Piano.mf.Gb2.m4a'), label:'Gb2', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:11},
                {id: 20, sample: new Audio('/audio/Piano.mf.G2.m4a'), label:'G2', whiteBoolean:true, whiteKeyIndex:12, blackKeyIndex:null},
                {id: 21, sample: new Audio('/audio/Piano.mf.Ab2.m4a'), label:'Ab2', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:12},
                {id: 22, sample: new Audio('/audio/Piano.mf.A2.m4a'), label:'A2', whiteBoolean:true, whiteKeyIndex:13, blackKeyIndex:null},
                {id: 23, sample: new Audio('/audio/Piano.mf.Bb2.m4a'), label:'Bb2', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:13},
                {id: 24, sample: new Audio('/audio/Piano.mf.B2.m4a'), label:'B2', whiteBoolean:true, whiteKeyIndex:14, blackKeyIndex:null},

                {id: 25, sample: new Audio('/audio/Piano.mf.C3.m4a'), label:'C3', whiteBoolean:true, whiteKeyIndex:15, blackKeyIndex:null},
                {id: 26, sample: new Audio('/audio/Piano.mf.Db3.m4a'), label:'Db3', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:15},
                {id: 27, sample: new Audio('/audio/Piano.mf.D3.m4a'), label:'D3', whiteBoolean:true, whiteKeyIndex:16, blackKeyIndex:null},
                {id: 28, sample: new Audio('/audio/Piano.mf.Eb3.m4a'), label:'Eb3', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:16},
                {id: 29, sample: new Audio('/audio/Piano.mf.E3.m4a'), label:'E3', whiteBoolean:true, whiteKeyIndex:17, blackKeyIndex:null},
                {id: 30, sample: new Audio('/audio/Piano.mf.F3.m4a'), label:'F3', whiteBoolean:true, whiteKeyIndex:18, blackKeyIndex:null},
                {id: 31, sample: new Audio('/audio/Piano.mf.Gb3.m4a'), label:'Gb3', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:18},
                {id: 32, sample: new Audio('/audio/Piano.mf.G3.m4a'), label:'G3', whiteBoolean:true, whiteKeyIndex:19, blackKeyIndex:null},
                {id: 33, sample: new Audio('/audio/Piano.mf.Ab3.m4a'), label:'Ab3', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:19},
                {id: 34, sample: new Audio('/audio/Piano.mf.A3.m4a'), label:'A3', whiteBoolean:true, whiteKeyIndex:20, blackKeyIndex:null},
                {id: 35, sample: new Audio('/audio/Piano.mf.Bb3.m4a'), label:'Bb3', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:20},
                {id: 36, sample: new Audio('/audio/Piano.mf.B3.m4a'), label:'B3', whiteBoolean:true, whiteKeyIndex:21, blackKeyIndex:null},

                {id: 37, sample: new Audio('/audio/Piano.mf.C4.m4a'), label:'C4', whiteBoolean:true, whiteKeyIndex:22, blackKeyIndex:null},
                {id: 38, sample: new Audio('/audio/Piano.mf.Db4.m4a'), label:'Db4', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:22},
                {id: 39, sample: new Audio('/audio/Piano.mf.D4.m4a'), label:'D4', whiteBoolean:true, whiteKeyIndex:23, blackKeyIndex:null},
                {id: 40, sample: new Audio('/audio/Piano.mf.Eb4.m4a'), label:'Eb4', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:23},
                {id: 41, sample: new Audio('/audio/Piano.mf.E4.m4a'), label:'E4', whiteBoolean:true, whiteKeyIndex:24, blackKeyIndex:null},
                {id: 42, sample: new Audio('/audio/Piano.mf.F4.m4a'), label:'F4', whiteBoolean:true, whiteKeyIndex:25, blackKeyIndex:null},
                {id: 43, sample: new Audio('/audio/Piano.mf.Gb4.m4a'), label:'Gb4', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:25},
                {id: 44, sample: new Audio('/audio/Piano.mf.G4.m4a'), label:'G4', whiteBoolean:true, whiteKeyIndex:26, blackKeyIndex:null},
                {id: 45, sample: new Audio('/audio/Piano.mf.Ab4.m4a'), label:'Ab4', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:26},
                {id: 46, sample: new Audio('/audio/Piano.mf.A4.m4a'), label:'A4', whiteBoolean:true, whiteKeyIndex:27, blackKeyIndex:null},
                {id: 47, sample: new Audio('/audio/Piano.mf.Bb4.m4a'), label:'Bb4', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:27},
                {id: 48, sample: new Audio('/audio/Piano.mf.B4.m4a'), label:'B4', whiteBoolean:true, whiteKeyIndex:28, blackKeyIndex:null},

                {id: 49, sample: new Audio('/audio/Piano.mf.C5.m4a'), label:'C5', whiteBoolean:true, whiteKeyIndex:29, blackKeyIndex:null},
                {id: 50, sample: new Audio('/audio/Piano.mf.Db5.m4a'), label:'Db5', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:29},
                {id: 51, sample: new Audio('/audio/Piano.mf.D5.m4a'), label:'D5', whiteBoolean:true, whiteKeyIndex:30, blackKeyIndex:null},
                {id: 52, sample: new Audio('/audio/Piano.mf.Eb5.m4a'), label:'Eb5', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:30},
                {id: 53, sample: new Audio('/audio/Piano.mf.E5.m4a'), label:'E5', whiteBoolean:true, whiteKeyIndex:31, blackKeyIndex:null},
                {id: 54, sample: new Audio('/audio/Piano.mf.F5.m4a'), label:'F5', whiteBoolean:true, whiteKeyIndex:32, blackKeyIndex:null},
                {id: 55, sample: new Audio('/audio/Piano.mf.Gb5.m4a'), label:'Gb5', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:32},
                {id: 56, sample: new Audio('/audio/Piano.mf.G5.m4a'), label:'G5', whiteBoolean:true, whiteKeyIndex:33, blackKeyIndex:null},
                {id: 57, sample: new Audio('/audio/Piano.mf.Ab5.m4a'), label:'Ab5', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:33},
                {id: 58, sample: new Audio('/audio/Piano.mf.A5.m4a'), label:'A5', whiteBoolean:true, whiteKeyIndex:34, blackKeyIndex:null},
                {id: 59, sample: new Audio('/audio/Piano.mf.Bb5.m4a'), label:'Bb5', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:34},
                {id: 60, sample: new Audio('/audio/Piano.mf.B5.m4a'), label:'B5', whiteBoolean:true, whiteKeyIndex:35, blackKeyIndex:null},

                {id: 61, sample: new Audio('/audio/Piano.mf.C6.m4a'), label:'C6', whiteBoolean:true, whiteKeyIndex:36, blackKeyIndex:null},
                {id: 62, sample: new Audio('/audio/Piano.mf.Db6.m4a'), label:'Db6', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:36},
                {id: 63, sample: new Audio('/audio/Piano.mf.D6.m4a'), label:'D6', whiteBoolean:true, whiteKeyIndex:37, blackKeyIndex:null},
                {id: 64, sample: new Audio('/audio/Piano.mf.Eb6.m4a'), label:'Eb6', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:37},
                {id: 65, sample: new Audio('/audio/Piano.mf.E6.m4a'), label:'E6', whiteBoolean:true, whiteKeyIndex:38, blackKeyIndex:null},
                {id: 66, sample: new Audio('/audio/Piano.mf.F6.m4a'), label:'F6', whiteBoolean:true, whiteKeyIndex:39, blackKeyIndex:null},
                {id: 67, sample: new Audio('/audio/Piano.mf.Gb6.m4a'), label:'Gb6', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:39},
                {id: 68, sample: new Audio('/audio/Piano.mf.G6.m4a'), label:'G6', whiteBoolean:true, whiteKeyIndex:40, blackKeyIndex:null},
                {id: 69, sample: new Audio('/audio/Piano.mf.Ab6.m4a'), label:'Ab6', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:40},
                {id: 70, sample: new Audio('/audio/Piano.mf.A6.m4a'), label:'A6', whiteBoolean:true, whiteKeyIndex:41, blackKeyIndex:null},
                {id: 71, sample: new Audio('/audio/Piano.mf.Bb6.m4a'), label:'Bb6', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:41},
                {id: 72, sample: new Audio('/audio/Piano.mf.B6.m4a'), label:'B6', whiteBoolean:true, whiteKeyIndex:42, blackKeyIndex:null},

                {id: 73, sample: new Audio('/audio/Piano.mf.C7.m4a'), label:'C7', whiteBoolean:true, whiteKeyIndex:43, blackKeyIndex:null},
                {id: 74, sample: new Audio('/audio/Piano.mf.Db7.m4a'), label:'Db7', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:43},
                {id: 75, sample: new Audio('/audio/Piano.mf.D7.m4a'), label:'D7', whiteBoolean:true, whiteKeyIndex:44, blackKeyIndex:null},
                {id: 76, sample: new Audio('/audio/Piano.mf.Eb7.m4a'), label:'Eb7', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:44},
                {id: 77, sample: new Audio('/audio/Piano.mf.E7.m4a'), label:'E7', whiteBoolean:true, whiteKeyIndex:45, blackKeyIndex:null},
                {id: 78, sample: new Audio('/audio/Piano.mf.F7.m4a'), label:'F7', whiteBoolean:true, whiteKeyIndex:46, blackKeyIndex:null},
                {id: 79, sample: new Audio('/audio/Piano.mf.Gb7.m4a'), label:'missing', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:46},
                {id: 80, sample: new Audio('/audio/Piano.mf.G7.m4a'), label:'G7', whiteBoolean:true, whiteKeyIndex:47, blackKeyIndex:null},
                {id: 81, sample: new Audio('/audio/Piano.mf.Ab7.m4a'), label:'Ab7', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:47},
                {id: 82, sample: new Audio('/audio/Piano.mf.A7.m4a'), label:'A7', whiteBoolean:true, whiteKeyIndex:48, blackKeyIndex:null},
                {id: 83, sample: new Audio('/audio/Piano.mf.Bb7.m4a'), label:'Bb7', whiteBoolean:false, whiteKeyIndex:null, blackKeyIndex:48},
                {id: 84, sample: new Audio('/audio/Piano.mf.B7.m4a'), label:'B7', whiteBoolean:true, whiteKeyIndex:49, blackKeyIndex:null},

                {id: 85, sample: new Audio('/audio/Piano.mf.C8.m4a'), label:'C8', whiteBoolean:true, whiteKeyIndex:50, blackKeyIndex:null},
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
			} else if (this.customNotes.length) {
				this.customArpSample(key, index, this.customNotes)
			} else {
				this.playSample(key)
			}
		},
		mouseUp: function(){
			this.stopSample()
		},
		playSample: function(key){
			key.sample.play();
			document.getElementById(key.id + '-audio').style.backgroundColor = "#90EE90";
		},
		stopSample: function(){
			//loop through the whole shebang and turn em all off
			for (var i = 0; i < this.audioArray.length; i++) {
				this.audioArray[i].sample.pause();
				this.audioArray[i].sample.load();
				document.getElementById(this.audioArray[i].id + '-audio').style.backgroundColor = this.audioArray[i].whiteBoolean ? "initial" : "#000";
			}
		},
		arpSample: function(key1, key2, key3){
			//simple major chord arp
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
		ChordSample: function(key1, key2, key3){
			//three note chord
			key1.sample.play();
			document.getElementById(key1.id + '-audio').style.backgroundColor = "#90EE90";
			key2.sample.play();
			document.getElementById(key2.id + '-audio').style.backgroundColor = "#90EE90";
			key3.sample.play();
			document.getElementById(key3.id + '-audio').style.backgroundColor = "#90EE90";
		},
		customArpSample: function(key1, index, customNotes){
			var offset = 0;

			//handling types, setting up arrays
			var cusNoteStringsasArr = (""+customNotes).split(",");
			var cusNoteNumsasArr = cusNoteStringsasArr.map(Number);
			var indexasNum = parseInt(index);
			var arpSpeedasNum = parseInt(this.customNotesArpSpeed);

			//set the speed
			offset += arpSpeedasNum;

			//play first note
			key1.sample.play();
			document.getElementById(key1.id + '-audio').style.backgroundColor = "#90EE90";

			//loop through array of intervals
			for (var i = 0; i <= cusNoteNumsasArr.length - 1; i++) {
				var j = cusNoteNumsasArr[i] + indexasNum;

				//tell setDelay when to play the notes
				this.setDelay(j, offset);
				offset += arpSpeedasNum;
			}
		},
		setDelay: function(i, offset){
			//use self in setTimeout with Vue
			let self = this;
			setTimeout(function () {
				// play the notes, restart if already playing
				if(!self.audioArray[i].sample.paused){
					self.audioArray[i].sample.pause();
					self.audioArray[i].sample.load();
					self.audioArray[i].sample.play();
				} else {
					self.audioArray[i].sample.play();

				}
				document.getElementById(self.audioArray[i].id + '-audio').style.backgroundColor = "#90EE90";

			//offset handles when the notes play
			}, offset);
		}
	},
}
</script>

<style scoped>
	ul{
        height:100%;
        width:100%;
        padding-left: 0!important;
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