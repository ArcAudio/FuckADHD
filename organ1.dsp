// Simple Organ
import("stdfaust.lib");

// MIDI keyon-keyoff
midigate = button ("gate") : si.smoo;    
// MIDI keyon key                        	
midifreq = hslider("freq[unit:Hz]", 440, 20, 20000, 1);	
// MIDI keyon velocity
midigain = hslider("gain", 0.5, 0, 10, 0.01) : si.smoo;	       	

// Implementation
phasor(f) = f/ma.SR : (+,1.0:fmod) ~ _ ;
osc(f) = phasor(f) * 6.28318530718 : sin;
timbre(freq) = os.saw2f4(freq);
envelop(gate, gain) = gate * gain : smooth(0.9995)
with { 
	smooth(c) = * (1-c) : + ~ * (c); 
};
voice(gate, gain, freq) = envelop(gate, gain) * timbre(freq);

cutoff = hslider("cutoff [unit:Hz]", 800, 20, 5000, 0.01) : si.smoo;	      

res = hslider("res", 1, 1, 5, 0.01) : si.smoo;	

flanger(p,wet,depth) = _ <: de.delay(256,d)*wet,_ :> /(2)
with{
    d = (os.osc(p) + 1)*127*depth;
};

tremolo(fr,dep) = _*(1-(os.osc(fr)*0.5 + 0.5)*dep);
f = hslider("ffreq [unit:Hz]",1.2,0.1,10,0.01);
w = hslider("fwet",0.1,0,1,0.01);
d = hslider("fdepth",0.69,0,1,0.01);

tf = hslider("tfreq [unit:Hz]",0.2,0.1,100,0.01);
tw = hslider("twet",0.1,0,1,0.01);
td = hslider("tdepth",0.5,0,1,0.01);

// Main
process = voice(midigate, midigain, midifreq) * hslider("volume", 0.5, 0, 1, 0.01) : ba.fi.resonlp(cutoff,res,1) :  flanger(f,w,d) : tremolo(tf,tw) <: _,_;
