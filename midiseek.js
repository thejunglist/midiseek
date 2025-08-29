import "./node_modules/tone/build/Tone.js";
import "./node_modules/classnames/bind.js";


// an array to declare the synths
 const sampler = new Tone.sampler({
    "C3" : "drum_samples\CYCdh_ElecK05-Clap01.wav",
    "D#3": "drum_samples\CYCdh_ElecK05-ClHat02.wav",
    "F#3": "drum_samples/CYCdh_ElecK05-Kick02.wav",
    "A3" : "drum_samples\CYCdh_ElecK05-OpHat01.wav",
    "B3" : "drum_samples\CYCdh_ElecK05-Snr01.wav",
 }, function(){
    sampler.triggerAttack("D3")
 })

 return sampler;

 