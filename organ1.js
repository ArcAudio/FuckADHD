
/*
Code generated with Faust version 2.30.12
Compilation options: -lang wasm-eb -es 1 -scal -ftz 2
*/

function getJSONorgan1() {
	return '{"name": "organ1","filename": "organ1.dsp","version": "2.30.12","compile_options": "-lang wasm-eb -es 1 -scal -ftz 2","library_list": ["/usr/local/share/faust/stdfaust.lib","/usr/local/share/faust/signals.lib","/usr/local/share/faust/oscillators.lib","/usr/local/share/faust/filters.lib","/usr/local/share/faust/maths.lib","/usr/local/share/faust/platform.lib","/usr/local/share/faust/basics.lib","/usr/local/share/faust/delays.lib"],"include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/Users/home/Documents/webfaust/organ1"],"size": 263336,"inputs": 0,"outputs": 2,"meta": [ { "basics.lib/name": "Faust Basic Element Library" },{ "basics.lib/version": "0.1" },{ "compile_options": "-lang wasm-eb -es 1 -scal -ftz 2" },{ "delays.lib/name": "Faust Delay Library" },{ "delays.lib/version": "0.1" },{ "filename": "organ1.dsp" },{ "filters.lib/fir:author": "Julius O. Smith III" },{ "filters.lib/fir:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/fir:license": "MIT-style STK-4.3 license" },{ "filters.lib/iir:author": "Julius O. Smith III" },{ "filters.lib/iir:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/iir:license": "MIT-style STK-4.3 license" },{ "filters.lib/lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/name": "Faust Filters Library" },{ "filters.lib/resonlp:author": "Julius O. Smith III" },{ "filters.lib/resonlp:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/resonlp:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf2:author": "Julius O. Smith III" },{ "filters.lib/tf2:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf2:license": "MIT-style STK-4.3 license" },{ "filters.lib/tf2s:author": "Julius O. Smith III" },{ "filters.lib/tf2s:copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters.lib/tf2s:license": "MIT-style STK-4.3 license" },{ "filters.lib/version": "0.3" },{ "maths.lib/author": "GRAME" },{ "maths.lib/copyright": "GRAME" },{ "maths.lib/license": "LGPL with exception" },{ "maths.lib/name": "Faust Math Library" },{ "maths.lib/version": "2.3" },{ "name": "organ1" },{ "oscillators.lib/name": "Faust Oscillator Library" },{ "oscillators.lib/version": "0.1" },{ "platform.lib/name": "Generic Platform Library" },{ "platform.lib/version": "0.1" },{ "signals.lib/name": "Faust Signal Routing Library" },{ "signals.lib/version": "0.0" }],"ui": [ {"type": "vgroup","label": "organ1","items": [ {"type": "hslider","label": "cutoff","address": "/organ1/cutoff","index": 262228,"meta": [{ "unit": "Hz" }],"init": 800,"min": 20,"max": 5000,"step": 0.01},{"type": "hslider","label": "fdepth","address": "/organ1/fdepth","index": 263296,"init": 0.69,"min": 0,"max": 1,"step": 0.01},{"type": "hslider","label": "ffreq","address": "/organ1/ffreq","index": 263300,"meta": [{ "unit": "Hz" }],"init": 1.2,"min": 0.1,"max": 10,"step": 0.01},{"type": "hslider","label": "freq","address": "/organ1/freq","index": 262192,"meta": [{ "unit": "Hz" }],"init": 440,"min": 20,"max": 20000,"step": 1},{"type": "hslider","label": "fwet","address": "/organ1/fwet","index": 263292,"init": 0.1,"min": 0,"max": 1,"step": 0.01},{"type": "hslider","label": "gain","address": "/organ1/gain","index": 262160,"init": 0.5,"min": 0,"max": 10,"step": 0.01},{"type": "button","label": "gate","address": "/organ1/gate","index": 262148},{"type": "hslider","label": "res","address": "/organ1/res","index": 262240,"init": 1,"min": 1,"max": 5,"step": 0.01},{"type": "hslider","label": "tfreq","address": "/organ1/tfreq","index": 263316,"meta": [{ "unit": "Hz" }],"init": 0.2,"min": 0.1,"max": 100,"step": 0.01},{"type": "hslider","label": "twet","address": "/organ1/twet","index": 263312,"init": 0.1,"min": 0,"max": 1,"step": 0.01},{"type": "hslider","label": "volume","address": "/organ1/volume","index": 262144,"init": 0.5,"min": 0,"max": 1,"step": 0.01}]}]}';
}
function getBase64Codeorgan1() { return "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OiAib3JnYW4xIiwiZmlsZW5hbWUiOiAib3JnYW4xLmRzcCIsInZlcnNpb24iOiAiMi4zMC4xMiIsImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWViIC1lcyAxIC1zY2FsIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2ZpbHRlcnMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3BsYXRmb3JtLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi9Vc2Vycy9ob21lL0RvY3VtZW50cy93ZWJmYXVzdC9vcmdhbjEiXSwic2l6ZSI6IDI2MzMzNiwiaW5wdXRzIjogMCwib3V0cHV0cyI6IDIsIm1ldGEiOiBbIHsgImJhc2ljcy5saWIvbmFtZSI6ICJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkiIH0seyAiYmFzaWNzLmxpYi92ZXJzaW9uIjogIjAuMSIgfSx7ICJjb21waWxlX29wdGlvbnMiOiAiLWxhbmcgd2FzbS1lYiAtZXMgMSAtc2NhbCAtZnR6IDIiIH0seyAiZGVsYXlzLmxpYi9uYW1lIjogIkZhdXN0IERlbGF5IExpYnJhcnkiIH0seyAiZGVsYXlzLmxpYi92ZXJzaW9uIjogIjAuMSIgfSx7ICJmaWxlbmFtZSI6ICJvcmdhbjEuZHNwIiB9LHsgImZpbHRlcnMubGliL2ZpcjphdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzLmxpYi9maXI6Y29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnMubGliL2ZpcjpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVycy5saWIvaWlyOmF1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnMubGliL2lpcjpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvaWlyOmxpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzLmxpYi9sb3dwYXNzMF9oaWdocGFzczEiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvbmFtZSI6ICJGYXVzdCBGaWx0ZXJzIExpYnJhcnkiIH0seyAiZmlsdGVycy5saWIvcmVzb25scDphdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzLmxpYi9yZXNvbmxwOmNvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi9yZXNvbmxwOmxpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzLmxpYi90ZjI6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvdGYyOmNvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzLmxpYi90ZjI6bGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnMubGliL3RmMnM6YXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVycy5saWIvdGYyczpjb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVycy5saWIvdGYyczpsaWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVycy5saWIvdmVyc2lvbiI6ICIwLjMiIH0seyAibWF0aHMubGliL2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHMubGliL25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzLmxpYi92ZXJzaW9uIjogIjIuMyIgfSx7ICJuYW1lIjogIm9yZ2FuMSIgfSx7ICJvc2NpbGxhdG9ycy5saWIvbmFtZSI6ICJGYXVzdCBPc2NpbGxhdG9yIExpYnJhcnkiIH0seyAib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiAiMC4xIiB9LHsgInBsYXRmb3JtLmxpYi9uYW1lIjogIkdlbmVyaWMgUGxhdGZvcm0gTGlicmFyeSIgfSx7ICJwbGF0Zm9ybS5saWIvdmVyc2lvbiI6ICIwLjEiIH0seyAic2lnbmFscy5saWIvbmFtZSI6ICJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5IiB9LHsgInNpZ25hbHMubGliL3ZlcnNpb24iOiAiMC4wIiB9XSwidWkiOiBbIHsidHlwZSI6ICJ2Z3JvdXAiLCJsYWJlbCI6ICJvcmdhbjEiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJjdXRvZmYiLCJhZGRyZXNzIjogIi9vcmdhbjEvY3V0b2ZmIiwiaW5kZXgiOiAyNjIyMjgsIm1ldGEiOiBbeyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiA4MDAsIm1pbiI6IDIwLCJtYXgiOiA1MDAwLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJmZGVwdGgiLCJhZGRyZXNzIjogIi9vcmdhbjEvZmRlcHRoIiwiaW5kZXgiOiAyNjMyOTYsImluaXQiOiAwLjY5LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJmZnJlcSIsImFkZHJlc3MiOiAiL29yZ2FuMS9mZnJlcSIsImluZGV4IjogMjYzMzAwLCJtZXRhIjogW3sgInVuaXQiOiAiSHoiIH1dLCJpbml0IjogMS4yLCJtaW4iOiAwLjEsIm1heCI6IDEwLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJmcmVxIiwiYWRkcmVzcyI6ICIvb3JnYW4xL2ZyZXEiLCJpbmRleCI6IDI2MjE5MiwibWV0YSI6IFt7ICJ1bml0IjogIkh6IiB9XSwiaW5pdCI6IDQ0MCwibWluIjogMjAsIm1heCI6IDIwMDAwLCJzdGVwIjogMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJmd2V0IiwiYWRkcmVzcyI6ICIvb3JnYW4xL2Z3ZXQiLCJpbmRleCI6IDI2MzI5MiwiaW5pdCI6IDAuMSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDF9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAiZ2FpbiIsImFkZHJlc3MiOiAiL29yZ2FuMS9nYWluIiwiaW5kZXgiOiAyNjIxNjAsImluaXQiOiAwLjUsIm1pbiI6IDAsIm1heCI6IDEwLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImJ1dHRvbiIsImxhYmVsIjogImdhdGUiLCJhZGRyZXNzIjogIi9vcmdhbjEvZ2F0ZSIsImluZGV4IjogMjYyMTQ4fSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogInJlcyIsImFkZHJlc3MiOiAiL29yZ2FuMS9yZXMiLCJpbmRleCI6IDI2MjI0MCwiaW5pdCI6IDEsIm1pbiI6IDEsIm1heCI6IDUsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogInRmcmVxIiwiYWRkcmVzcyI6ICIvb3JnYW4xL3RmcmVxIiwiaW5kZXgiOiAyNjMzMTYsIm1ldGEiOiBbeyAidW5pdCI6ICJIeiIgfV0sImluaXQiOiAwLjIsIm1pbiI6IDAuMSwibWF4IjogMTAwLCJzdGVwIjogMC4wMX0seyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJ0d2V0IiwiYWRkcmVzcyI6ICIvb3JnYW4xL3R3ZXQiLCJpbmRleCI6IDI2MzMxMiwiaW5pdCI6IDAuMSwibWluIjogMCwibWF4IjogMSwic3RlcCI6IDAuMDF9LHsidHlwZSI6ICJoc2xpZGVyIiwibGFiZWwiOiAidm9sdW1lIiwiYWRkcmVzcyI6ICIvb3JnYW4xL3ZvbHVtZSIsImluZGV4IjogMjYyMTQ0LCJpbml0IjogMC41LCJtaW4iOiAwLCJtYXgiOiAxLCJzdGVwIjogMC4wMX1dfV19"; }

/*
 faust2wasm: GRAME 2017-2019
*/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class organ1PolyNode extends AudioWorkletNode {

    constructor(context, baseURL, options)
    {
        var json_object = JSON.parse(getJSONorgan1());
      
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = (parseInt(json_object.inputs) > 0) ? 1 : 0;
        options.numberOfOutputs = (parseInt(json_object.outputs) > 0) ? 1 : 0;
        options.channelCount = Math.max(1, parseInt(json_object.inputs));
        options.outputChannelCount = [parseInt(json_object.outputs)];
        options.channelCountMode = "explicit";
        options.channelInterpretation = "speakers";

        super(context, 'organ1Poly', options);
        this.baseURL = baseURL;
      
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);         
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1,1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.json_object = json_object;

        if (typeof (getJSONeffect) !== "undefined") {
            this.effect_json_object = JSON.parse(getJSONeffect());
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        if (this.effect_json_object) {
            this.parse_ui(this.effect_json_object.ui, this);
        }

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) {}
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event)
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API
    
    /**
     * Destroy the node, deallocate resources.
     */
    destroy()
    {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }
	
    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON()
    {
        var res = "";
        res = res.concat("{\"name\":\""); res = res.concat(this.json_object.name); res = res.concat("\",");
        res = res.concat("\"version\":\""); res = res.concat(this.json_object.version); res = res.concat("\",");
        res = res.concat("\"options\":\""); res = res.concat(this.json_object.options); res = res.concat("\",");
        res = res.concat("\"inputs\":\""); res = res.concat(this.json_object.inputs); res = res.concat("\",");
        res = res.concat("\"outputs\":\""); res = res.concat(this.json_object.outputs); res = res.concat("\",");
        res = res.concat("\"meta\":"); res = res.concat(JSON.stringify(this.json_object.meta)); res = res.concat(",");

        if (this.effect_json_object) {
            res = res.concat("\"ui\":[{\"type\":\"tgroup\",\"label\":\"Sequencer\",\"items\":[");
            res = res.concat("{\"type\": \"vgroup\",\"label\":\"Instrument\",\"items\":");
            res = res.concat(JSON.stringify(this.json_object.ui));
            res = res.concat("},");
            res = res.concat("{\"type\":\"vgroup\",\"label\":\"Effect\",\"items\":");
            res = res.concat(JSON.stringify(this.effect_json_object.ui));
            res = res.concat("}");
            res = res.concat("]}]}");
            return res;
        } else {
            res = res.concat("\"ui\":[{\"type\":\"tgroup\",\"label\":\"Polyphonic\",\"items\":[");
            res = res.concat("{\"type\": \"vgroup\",\"label\":\"Voices\",\"items\":");
            res = res.concat(JSON.stringify(this.json_object.ui));
            res = res.concat("},");
            res = res.concat("]}]}");
            return res;
        }
    }
    
    // For WAP
    async getMetadata()
    {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val)
    {
        this.port.postMessage({ type:"param", key:path, value:val });
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    // For WAP
    setParam(path, val)
    {
        this.port.postMessage({ type:"param", key:path, value:val });
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    // For WAP
    getParam(path)
    {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }

    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    // For WAP
    inputChannelCount()
    {
        return parseInt(this.json_object.inputs);
    }
    
    outputChannelCount()
    {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams()
    {
        return this.inputs_items;
    }
        
    // For WAP
    getDescriptor()
    {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Instantiates a new polyphonic voice.
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param pitch - the MIDI pitch (0..127)
     * @param velocity - the MIDI velocity (0..127)
     */
    keyOn(channel, pitch, velocity)
    {
        this.port.postMessage({ type: "keyOn", data: [channel, pitch, velocity] });
    }

    /**
     * De-instantiates a polyphonic voice.
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param pitch - the MIDI pitch (0..127)
     * @param velocity - the MIDI velocity (0..127)
     */
    keyOff(channel, pitch, velocity)
    {
        this.port.postMessage({ type: "keyOff", data: [channel, pitch, velocity] });
    }

    /**
     * Gently terminates all the active voices.
     */
    allNotesOff()
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, 123, 0] });
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel)
    {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data)
    {
    	this.port.postMessage({ type:"midi", data:data });
    }
    
    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState()
    {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }
    
    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state
     */
    async setState(state)
    {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

}

// Factory class
class organ1Poly {

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param polyphony - the number of voices
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, polyphony = 16, baseURL = "")
    {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.polyphony = polyphony;
        this.baseURL = baseURL;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load()
    {
    	return new Promise((resolve, reject) => {   
            let real_url = (this.baseURL === "") ? "organ1-processor.js" : (this.baseURL + "/organ1-processor.js");
            let options = { polyphony: this.polyphony };
            this.context.audioWorklet.addModule(real_url).then(() => {
            this.node = new organ1PolyNode(this.context, this.baseURL, { processorOptions: options });
            this.node.onprocessorerror = () => { console.log('An error from organ1-processor was detected.');}
            return (this.node);
            }).then((node) => {
                resolve(node);
            }).catch((e) => {
                reject(e);
            });
        });
    }

    async loadGui() 
    {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createorgan1GUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createorgan1GUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };
    
    linkExists(url) 
    {
    	return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

const dspName = "organ1Poly";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.organ1Poly = organ1Poly;
    window.Faustorgan1Poly = organ1Poly;
    window[dspName] = organ1Poly;
} else {
    module.exports = { organ1Poly };
}
