loadedInterfaceName = "goldfishQUAD";

interfaceOrientation = "landscape";

infoText = "Quad mixer. Page 1: 6 channels, 3d mixer, level, fx send 1, fx send 2. Page 2: ";

constants = [

{
    "name": "refreshButton",
    "type": "Button",
    "x": .24,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#333",
    "isLocal": true,
    "ontouchstart": "interfaceManager.refreshInterface()",
},
{
    "name": "refreshLabel",
    "type": "Label",
    "x": .24,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "refresh",
},
{
    "name": "tabButton",
    "type": "Button",
    "x": .18,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#333",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
},
{
    "name": "tabsLabel",
    "type": "Label",
    "x": .18,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "menu",
},
{
    "name": "infoButton",
    "type": "Button",
    "x": .12,
    "y": .825,
    "width": .05,
    "height": .1,
    "mode": "contact",
    "color": "#666666",
    "isLocal": true,
    "ontouchstart": "control.changePage(2);",
},
{
    "name": "infoButtonLabel",
    "type": "Label",
    "x": .12,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#fff",
    "value": "info",
},
{
    "name": "page0Button",
    "type": "Button",
    "x": .06,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#666666",
    "mode": "contact",
    "startingValue": 1,
    "isLocal": true,
    "ontouchstart": "control.changePage(0);",
},
{
    "name": "page0ButtonLabel",
    "type": "Label",
    "x": .06,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "SL OUT",
},
{
    "name": "page1Button",
    "type": "Button",
    "x": .0,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#666666",
    "mode": "contact",
    "isLocal": true,
    "ontouchstart": "control.changePage(1);",
},
{
    "name": "page1ButtonLabel",
    "type": "Label",
    "x": .0,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "MIX",
},
{
    "name": "slLabel",
    "type": "Label",
	"x":0,
	"y":.76,
	"width": 0,
	"height": .1,
	"color": "#ffffff",
	"value": "SooperLooper",
},
{
    "name": "undoAllButton",
    "type": "Button",
    "x": .9,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#333",
    "mode" : "momentary",
    "protocol": "OSC",
    "address": "/quadMixCTL/globalUndoAll",
},
{
    "name": "undoAllLabel",
    "type": "Label",
    "x": .9,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "Undo All",
},
{
    "name": "globalGroupLabel",
    "type": "Label",
    "x": .85,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "Global",
},
{
    "name": "currentGroupLabel",
    "type": "Label",
    "x": .35,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "Current",
},
{
    "name": "undoButton",
    "type": "Button",
    "x": .4,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#333",
    "mode" : "momentary",
    "protocol": "OSC",
    "address": "/quadMixCTL/currentUndo",
},
{
    "name": "undoLabel",
    "type": "Label",
    "x": .4,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "Undo",
},
{
    "name": "redoButton",
    "type": "Button",
    "x": .46,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#333",
    "mode" : "momentary",
    "protocol": "OSC",
    "address": "/quadMixCTL/currentRedo",
},
{
    "name": "redoLabel",
    "type": "Label",
    "x": .46,
    "y": .825,
    "width": .05,
    "height": .1,
    "color": "#ffffff",
    "value": "Redo",
},
];

pages = [[
{
    "name": "vol1Slider",
    "type": "Slider",
    "x": .253,
    "y": .05,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol1",
},
{
    "name": "vol2Slider",
    "type": "Slider",
    "x": .57,
    "y": .05,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol2",
},
{
    "name": "vol3Slider",
    "type": "Slider",
    "x": .887,
    "y": .05,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol3",
},
{
    "name": "vol4Slider",
    "type": "Slider",
    "x": .253,
    "y": .475,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol4",
},
{
    "name": "vol5Slider",
    "type": "Slider",
    "x": .570,
    "y": .475,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol5",
},
{
    "name": "vol6Slider",
    "type": "Slider",
    "x": .887,
    "y": .475,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol6",
},
{
    "name":"l1select",
    "type":"Button",
    "x" : 0.05, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#0000cd",
    "protocol": "OSC",
    "address": "/quadMixCTL/l1sel",
},
{
    "name": "vol1Label",
    "type": "Label",
    "x": 0.05,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "0",
},
{
    "name":"l1wait",
    "type":"Button",
    "x" : 0.117, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ffa500",
    "protocol": "OSC",
    "address": "/quadMixCTL/l1wait",
},
{
    "name":"l1rec",
    "type":"Button",
    "x" : 0.185, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ff0000",
    "protocol": "OSC",
    "address": "/quadMixCTL/l1rec",
},
{
    "name":"l1mute",
    "type":"Button",
    "x" : 0.253, "y" : 0.01,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l1mute",
},
{
    "name": "l1muteLabel",
    "type": "Label",
    "x": 0.241,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "M",
},
{
    "name":"l1rev",
    "type":"Button",
    "x" : 0.291, "y" : 0.01,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l1rev",
},
{
    "name": "l1revLabel",
    "type": "Label",
    "x": 0.279,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "R",
},
{
    "name":"l2select",
    "type":"Button",
    "x" : 0.367, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#0000cd",
    "protocol": "OSC",
    "address": "/quadMixCTL/l2sel",
},
{
    "name": "vol2Label",
    "type": "Label",
    "x": .367,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "1",
},
{
    "name":"l2wait",
    "type":"Button",
    "x" : 0.434, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ffa500",
    "protocol": "OSC",
    "address": "/quadMixCTL/l2wait",
},
{
    "name":"l2rec",
    "type":"Button",
    "x" : 0.502, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ff0000",
    "protocol": "OSC",
    "address": "/quadMixCTL/l2rec",
},
{
    "name":"l2mute",
    "type":"Button",
    "x" : 0.570, "y" : 0.01,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l2mute",
},
{
    "name": "l2muteLabel",
    "type": "Label",
    "x": 0.558,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "M",
},
{
    "name":"l2rev",
    "type":"Button",
    "x" : 0.608, "y" : 0.01,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l2rev",
},
{
    "name": "l2revLabel",
    "type": "Label",
    "x": 0.596,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "R",
},
{
    "name":"l3select",
    "type":"Button",
    "x" : 0.684, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#0000cd",
    "protocol": "OSC",
    "address": "/quadMixCTL/l3sel",
},
{
    "name": "vol3Label",
    "type": "Label",
    "x": .684,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "2",
},
{
    "name":"l3wait",
    "type":"Button",
    "x" : 0.752, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ffa500",
    "protocol": "OSC",
    "address": "/quadMixCTL/l3wait",
},
{
    "name":"l3rec",
    "type":"Button",
    "x" : 0.82, "y" : 0.01,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ff0000",
    "protocol": "OSC",
    "address": "/quadMixCTL/l3rec",
},
{
    "name":"l3mute",
    "type":"Button",
    "x" : 0.887, "y" : 0.01,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l3mute",
},
{
    "name": "l3muteLabel",
    "type": "Label",
    "x": 0.875,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "M",
},
{
    "name":"l3rev",
    "type":"Button",
    "x" : 0.925, "y" : 0.01,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l3rev",
},
{
    "name": "l3revLabel",
    "type": "Label",
    "x": 0.913,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "R",
},
{
    "name":"l4select",
    "type":"Button",
    "x" : 0.05, "y" : 0.434,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#0000cd",
    "protocol": "OSC",
    "address": "/quadMixCTL/l4sel",
},
{
    "name": "vol4Label",
    "type": "Label",
    "x": .05,
    "y": .425,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "3",
},
{
    "name":"l4wait",
    "type":"Button",
    "x" : 0.117, "y" : 0.435,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ffa500",
    "protocol": "OSC",
    "address": "/quadMixCTL/l4wait",
},
{
    "name":"l4rec",
    "type":"Button",
    "x" : 0.185, "y" : 0.435,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ff0000",
    "protocol": "OSC",
    "address": "/quadMixCTL/l4rec",
},
{
    "name":"l4mute",
    "type":"Button",
    "x" : 0.253, "y" : 0.435,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l4mute",
},
{
    "name": "l4muteLabel",
    "type": "Label",
    "x": 0.241,
    "y": 0.426,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "M",
},
{
    "name":"l4rev",
    "type":"Button",
    "x" : 0.291, "y" : 0.435,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l4rev",
},
{
    "name": "l4revLabel",
    "type": "Label",
    "x": 0.279,
    "y": 0.426,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "R",
},
{
    "name":"l5select",
    "type":"Button",
    "x" : 0.367, "y" : 0.434,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#0000cd",
    "protocol": "OSC",
    "address": "/quadMixCTL/l5sel",
},
{
    "name": "vol5Label",
    "type": "Label",
    "x": .367,
    "y": .425,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "4",
},
{
    "name":"l5wait",
    "type":"Button",
    "x" : 0.434, "y" : 0.435,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ffa500",
    "protocol": "OSC",
    "address": "/quadMixCTL/l5wait",
},
{
    "name":"l5rec",
    "type":"Button",
    "x" : 0.502, "y" : 0.435,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ff0000",
    "protocol": "OSC",
    "address": "/quadMixCTL/l5rec",
},
{
    "name":"l5mute",
    "type":"Button",
    "x" : 0.570, "y" : 0.435,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l5mute",
},
{
    "name": "l5muteLabel",
    "type": "Label",
    "x": 0.558,
    "y": 0.426,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "M",
},
{
    "name":"l5rev",
    "type":"Button",
    "x" : 0.608, "y" : 0.435,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l5rev",
},
{
    "name": "l5revLabel",
    "type": "Label",
    "x": 0.596,
    "y": 0.426,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "R",
},
{
    "name":"l6select",
    "type":"Button",
    "x" : 0.684, "y" : 0.434,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#0000cd",
    "protocol": "OSC",
    "address": "/quadMixCTL/l6sel",
},
{
    "name": "vol6Label",
    "type": "Label",
    "x": .684,
    "y": .425,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "5",
},
{
    "name":"l6wait",
    "type":"Button",
    "x" : 0.752, "y" : 0.435,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ffa500",
    "protocol": "OSC",
    "address": "/quadMixCTL/l6wait",
},
{
    "name":"l6rec",
    "type":"Button",
    "x" : 0.82, "y" : 0.435,
    "mode" : "momentary",
    "width" : .055, "height" : .032,
    "color": "#ff0000",
    "protocol": "OSC",
    "address": "/quadMixCTL/l6rec",
},
{
    "name":"l6mute",
    "type":"Button",
    "x" : 0.887, "y" : 0.435,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l6mute",
},
{
    "name": "l6muteLabel",
    "type": "Label",
    "x": 0.875, 
    "y": 0.426,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "M",
},
{
    "name":"l6rev",
    "type":"Button",
    "x" : 0.925, "y" : 0.435,
    "width" : .025, "height" : .032,
    "color": "#ff3300",
    "protocol": "OSC",
    "address": "/quadMixCTL/l6rev",
},
{
    "name": "l6revLabel",
    "type": "Label",
    "x": 0.913, 
    "y": 0.426,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "R",
},
{
    "name": "fx1aSlider",
    "type": "Slider",
    "x": .05,
    "y": .31,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx1a",
},
{
    "name": "fx1bSlider",
    "type": "Slider",
    "x": .187,
    "y": .31,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx1b",
},
{
    "name": "fx2aSlider",
    "type": "Slider",
    "x": .367,
    "y": .31,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx2a",
},
{
    "name": "fx2bSlider",
    "type": "Slider",
    "x": .507,
    "y": .31,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx2b",
},
{
    "name": "fx3aSlider",
    "type": "Slider",
    "x": .684,
    "y": .31,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx3a",
},
{
    "name": "fx3bSlider",
    "type": "Slider",
    "x": .821,
    "y": .31,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx3b",
},
{
    "name": "fx4aSlider",
    "type": "Slider",
    "x": .05,
    "y": .736,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx4a",
},
{
    "name": "fx4bSlider",
    "type": "Slider",
    "x": .187,
    "y": .736,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx4b",
},
{
    "name": "fx5aSlider",
    "type": "Slider",
    "x": .367,
    "y": .736,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx5a",
},
{
    "name": "fx5bSlider",
    "type": "Slider",
    "x": .507,
    "y": .736,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx5b",
},
{
    "name": "fx6aSlider",
    "type": "Slider",
    "x": .684,
    "y": .736,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx6a",
},
{
    "name": "fx6bSlider",
    "type": "Slider",
    "x": .821,
    "y": .736,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx6b",
},
{
     "name" : "multi1",
     "type" : "MultiTouchXY",
     "bounds": [0.05,0.05,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi1",
},
{
     "name" : "multi2",
     "type" : "MultiTouchXY",
     "bounds": [0.367,0.05,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi2",
},
{
     "name" : "multi3",
     "type" : "MultiTouchXY",
     "bounds": [0.684,0.05,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi3",
},
{
     "name" : "multi4",
     "type" : "MultiTouchXY",
     "bounds": [0.05,0.475,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi4",
},
{
     "name" : "multi5",
     "type" : "MultiTouchXY",
     "bounds": [0.367,0.475,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi5",
},
{
     "name" : "multi6",
     "type" : "MultiTouchXY",
     "bounds": [0.684,0.475,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi6",
},
],

[
{
    "name": "vol7Slider",
    "type": "Slider",
    "x": .253,
    "y": .05,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol7",
},
{
    "name": "vol8Slider",
    "type": "Slider",
    "x": .57,
    "y": .05,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol8",
},
{
    "name": "vol9Slider",
    "type": "Slider",
    "x": .887,
    "y": .05,
    "width":.063,
    "height": .25,
    "startingValue": 0,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": true,
    "protocol": "OSC",
    "address": "/quadMixCTL/vol9",
},
{
    "name": "vol7Label",
    "type": "Label",
    "x": 0.05,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "miniKP",
},
{
    "name": "vol8Label",
    "type": "Label",
    "x": .367,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "KP",
},
{
    "name": "vol9Label",
    "type": "Label",
    "x": .684,
    "y": 0,
    "width": .05,
    "height": .05,
    "color": "#ffffff",
    "value": "MIXER",
},
{
     "name" : "multi7",
     "type" : "MultiTouchXY",
     "bounds": [0.05,0.05,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi7",
},
{
     "name" : "multi8",
     "type" : "MultiTouchXY",
     "bounds": [0.367,0.05,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi8",
},
{
     "name" : "multi9",
     "type" : "MultiTouchXY",
     "bounds": [0.684,0.05,.19,.25],
     "isMomentary": false,
     "maxTouches": 1,
     "address": "/quadMixCTL/multi9",
},
{
    "name": "fx7aSlider",
    "type": "Slider",
    "x": .684,
    "y": .31,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx7a",
},
{
    "name": "fx7bSlider",
    "type": "Slider",
    "x": .821,
    "y": .31,
    "width":.13,
    "height": .063,
    "startingValue": -90,
    "color": "#666666",
    "stroke": "#888888",
    "min": -9.49,
    "max": 0,
    "isInverted": false,
    "isVertical": false,
    "protocol": "OSC",
    "address": "/quadMixCTL/fx7b",
},
],

[
{
    "name": "bg",
    "type": "Label",
    "x": .0,
    "y": .0,
    "width": 1,
    "height": 1,
    "value": "",
	  "backgroundColor":"rgba(0,0,0,1)",
    "verticalCenter": false,
    "align": "left",
},
{
    "name": "backButton",
    "type": "Button",
    "x": .5,
    "y": .5,
    "width": .19,
    "height": .09,
    "mode": "contact",
    "color": "#333333",
    "stroke": "#aaaaaa",
    "ontouchstart": "control.changePage(0);",
	  "oninit":"backButton.fillDiv.style.zIndex = 10000",
},

{
    "name": "infoText",
    "type": "Label",
    "x": .1,
    "y": .1,
    "width": .70,
    "height": .8,
    "value": infoText,
	  "backgroundColor":"rgba(0,0,0,1)",
    "verticalCenter": false,
    "align": "left",
	  "oninit":"infoText.label.style.zIndex = 10000",
},
{
    "name": "backButtonLabel",
    "type": "Label",
    "x": .5,
    "y": .5,
    "width": .19,
    "height": .09,
    "color": "#fff",
    "value": "back",
	  "oninit":"backButtonLabel.label.style.zIndex = 11001",
},
],
];

OSCManager.prototype.processOSCMessage = function() {
	var address = arguments[0];
	var typetags = arguments[1];
	var args = [];

    switch(address){
        case "/control/runScript":
            eval(arguments[2]);
            return;
        break;
        case "/control/addWidget":
            var wStr = "{" + arguments[2] + "}";
            eval("var w = " + wStr);
            var _w = control.makeWidget(w);
            control.widgets.push(_w);
            eval("control.addWidget(" + w.name + ", control.currentPage);");
        return;
        break;
        case "/control/addWidgetKV":
            var w = {};
            for (var i = 2; i < arguments.length; i+=2)
            {
                w[arguments[i]]=arguments[i+1];
            }
            var _w = control.makeWidget(w);
            control.widgets.push(_w);
            eval("control.addWidget(" + w.name + ", control.currentPage);");
            return;
        break;
        case "/control/removeWidget":
            control.removeWidgetWithName(arguments[2]);
            return;
        break;
        case "/control/setBounds":
            var w = control.getWidgetWithName(arguments[2]);
            w.setBounds([arguments[3], arguments[4], arguments[5], arguments[6]]);
            return;
            break;
        case "/control/setColors":
            var w = control.getWidgetWithName(arguments[2]);
            w.setColors([arguments[3], arguments[4], arguments[5]]);
            return;
            break;
        case "/control/setRange":
            var w = control.getWidgetWithName(arguments[2]);
            w.setRange(arguments[3], arguments[4]);
            return;
            break;
        case "/control/setAddress":
            var w = control.getWidgetWithName(arguments[2]);
            w.address = arguments[3];
            return;
            break;
        case "/control/createBlankInterface":
            control.unloadWidgets();
            var _json = "loadedInterfaceName = '" + arguments[2] + "'; interfaceOrientation = '" + arguments[3] + "'; pages = [["
            if(typeof arguments[4] == "undefined" || arguments[4] == "true") {
                _json += '{\
                    "name": "menuButton",\
                    "type": "Button",\
                    "bounds": [.8,.8,.2,.1],\
                    "mode":"toggle",\
                    "colors": ["#000", "#444", "#aaa"],\
                    "ontouchstart": "if(this.value == this.max) { control.showToolbar();} else { control.hideToolbar(); }",\
                    "label": "menu",\
                },';
            }
            _json += "]];";
            
            interfaceManager.runInterface(_json);
            $.mobile.changePage('#SelectedInterfacePage');
            return;
            break;           
    }

	for(var i = 2; i < arguments.length; i++) {
		args[i - 2] = arguments[i];
	}

	this.delegate.processOSC(address, typetags, args);
}	
