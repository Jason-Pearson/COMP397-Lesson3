/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../objects/label.ts" />



// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats; //make a function to set up game stats - via this variable that is of class Stats (imported from Stats.d.js in Scripts/typings folder) 

// Game Variables
var helloLabel: objects.Label;
var goodByeLabel: objects.Label;

//Our void Start () method per se - upon intial frame, execute code
function init():void {
    console.log("Game Started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats();//sets up our stat counting before calling Main function - to start counting in Main function

    main(); // call main game function
}

// Main Game Loop - Our void Update() per se - checks and executes code every frame/per frame
function gameLoop(event: createjs.Event): void {
    stats.begin(); //start counting per frame -
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // - stop counting per frame
}
//Setup Game Stats - FramesPerSecond, MilliSeconds Response Time in Latency, etc.
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";//from the screen's exact position (absolute) -
    stats.domElement.style.right = "0px";// - go 0px from the very right of the screen
    stats.domElement.style.top = "0px";// - go 0px from very top of the screen- domElement translates to DivElement in JS
    document.body.appendChild(stats.domElement); // translates to adding Stats to index.html in JS

}
// This is where all the fun happens
function main(): void {
    helloLabel = new objects.Label("Hello World", "60px Consolas", "#000000", 320, 240);
    stage.addChild(helloLabel); // add label to the stage

    goodByeLabel = new objects.Label("Good Bye!", "40px Consolas", "#000000", 320, 340);
    stage.addChild(goodByeLabel);
}
 