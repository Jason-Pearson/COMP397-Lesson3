/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas;
var stage;
var stats; //make a function to set up game stats - via this variable that is of class Stats (imported from Stats.d.js in Scripts/typings folder) 
// Game Variables
var helloLabel;
var startButton; // this button variable is of type Button class - where it will hold an image as a bitmap, and have position and mouse-event functionality
//Our void Start () method per se - upon intial frame, execute code
function init() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // listening every 20fps for any mouse over events to enable them in the Stage (our main canvas - our scene per se)
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); //sets up our stat counting before calling Main function - to start counting in Main function
    main(); // call main game function
}
// Main Game Loop - Our void Update() per se - checks and executes code every frame/per frame
function gameLoop(event) {
    stats.begin(); //start counting per frame -
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // - stop counting per frame
}
//Setup Game Stats - FramesPerSecond, MilliSeconds Response Time in Latency, etc.
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute"; //from the screen's exact position (absolute) -
    stats.domElement.style.right = "0px"; // - go 0px from the very right of the screen
    stats.domElement.style.top = "0px"; // - go 0px from very top of the screen- domElement translates to DivElement in JS
    document.body.appendChild(stats.domElement); // translates to adding Stats to index.html in JS
}
// Callback function / Event Handler for Start Button Click
function clickStartButton(event) {
    helloLabel.text = "Clicked"; // change text for helloLabel - won't be the same position in the canvas as before in Main function - "Game Start"
}
// This is where all the fun happens
function main() {
    // hello label
    helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
    stage.addChild(helloLabel); // add label to the stage
    // start button
    startButton = new objects.Button("startButton", 320, 340); //looking for image-url (path to image) to hold in this variable
    startButton.on("click", clickStartButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called
    stage.addChild(startButton); // add Start Button (of type Button) to the Stage (a variable of type createJS (class) which holds the Canvas as a reference)
}
//# sourceMappingURL=game.js.map