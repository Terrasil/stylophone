'use strict';

export default class Stylophone {
    constructor() {
        this.audioContext = new AudioContext();
        this.filter = this.audioContext.createBiquadFilter();
        this.gain = this.audioContext.createGain();
        this.oscillator = this.audioContext.createOscillator();
    }
}