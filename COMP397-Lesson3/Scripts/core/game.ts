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
var startButton: createjs.Bitmap; // this variable will hold an image via the Bitmap class from the createJS

//Our void Start () method per se - upon intial frame, execute code
function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // listening every 20fps for any mouse over events to enable them in the Stage (our main canvas - our scene per se)
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
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";//from the screen's exact position (absolute) -
    stats.domElement.style.right = "0px";// - go 0px from the very right of the screen
    stats.domElement.style.top = "0px";// - go 0px from very top of the screen- domElement translates to DivElement in JS
    document.body.appendChild(stats.domElement); // translates to adding Stats to index.html in JS

}
// Callback function / Event Handler for Start Button Click
function clickStartButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - clicking - the start button
    helloLabel.text = "Clicked"; // change text for helloLabel - won't be the same position in the canvas as before in Main function - "Game Start"

}
// Event Handler for mouse over 
function overStartButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - mouseover - the start button
    startButton.alpha = 0.7; // when mouse over the start button - go to .7 alpha - makes the image lighter
}
// Event Handler for mouse out
function outStartButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - mouseout - of the start button
    startButton.alpha = 1.0; // when mouse out of the start button - go back to 1.0 alpha - orignal, solid color basically
}

// This is where all the fun happens
function main(): void {
    helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
    stage.addChild(helloLabel); // add label to the stage

    startButton = new createjs.Bitmap(".../../Assets/images/State_Machine_Buttons/startButton.png"); //looking for image-url (path to image) to hold in this variable
    // this validates the size of the start button image (instantiated within this bitmap variable) within the canvas -
    startButton.regX = 75; // startButton.getBounds().height * 0.5 --> register X position of start button image (via resolution width: 150) to the middle of the x-value of the screen (move to half = 75)
    startButton.regY = 25; // register for Y
    // - allowing it to move start button by x and y positioning within canvas 
    startButton.x = 320;
    startButton.y = 340;

    startButton.on("click", clickStartButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called
    //calling both these functions give the start button a roll-over effect - changin alpha of the image on mouseover and then back to solid upon mouseout
    startButton.on("mouseover", overStartButton, this); // listen to event handler (on - "mouseover") to call function
    startButton.on("mouseout", outStartButton, this); // listen to event handler (on - "mouseout") to call function
    
    stage.addChild(startButton); // add Start Button to the Stage ( a variable which holds the Canvas as a reference)
}
 