/// <reference path="../config/config.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../states/menu.ts" />



// GLOBAL GAME FRAMEWORK VARIABLES
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats; //make a function to set up game stats - via this variable that is of class Stats (imported from Stats.d.js in Scripts/typings folder) 
var state: number;
var scene: createjs.Container; // a box that other objects can be added to and used via addChild and similar functions - like Stage
var stateFunction: any; // a variable of (any) type to hold and call the current state function from the functions of menu, play, and over.ts scripts from the states module (folder)

// Game Variables
var helloLabel: objects.Label;
var startButton: objects.Button; // this button variable is of type Button class - where it will hold an image as a bitmap, and have position and mouse-event functionality

//Our void Start () method per se - upon intial frame, execute code
function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // listening every 20fps for any mouse over events to enable them in the Stage (our main canvas - our scene per se)
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats();//sets up our stat counting before calling Main function - to start counting in Main function
    
    state = config.MENU_STATE; // on first frame - we have the state number equal to the menu state first - 
    changeState(); // - which calls this function on first frame to have menu state show up first
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
//(1) without main function needed - need to show the current state function is the main function for the stage -
//State Machine
function changeState(): void {
    //Launch various scenes
    switch (state) { // for example, based on (assignemnt 1) choices leading you to a state number and changing the state (screen) to progress
        case config.MENU_STATE:
            //if state number = 0, show menu scene
            stateFunction = states.menu; // variable points to and calls the function of menu.ts from states module when the state (number) is equal to 0 (MENU_STATE number variable from config.ts/config module)
            break;
        case config.PLAY_STATE:
            //if state number = 1, show play scne
            break;
        case config.OVER_STATE:
            //if state number = 2, shot game over;
            break;
    }
    stateFunction();
}