import { Component } from '@angular/core';
import { Vibration } from 'ionic-native';
@Component({
  templateUrl: 'about.html'
})
export class AboutPage {
  audio:any;
 
  constructor() {
   
  }

  testVibrate()
  {
  	console.log("testVibrate");
  	Vibration.vibrate(1000);
  }

  testAudio()
  {
  	 console.log("testAudio");
  	 this.audio = new Audio();
     this.audio.src = "assets/music/alert.mp3";
     this.audio.load();
     this.audio.play();
  }

  stopAudio()
  {
     console.log("stopAudio ");
     this.audio.pause();
  }
}
