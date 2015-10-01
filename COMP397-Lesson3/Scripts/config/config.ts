module config { //making a conig class in Config module folder to cycle through states (screens) in this StateMachine
    
    // State Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var OVER_STATE: number = 2;
} 
//ALSO REMEMBER - 3 STEPS TO ADDING NEW MODULE (NEW CLASS) INTO YOUR CODE:
//1 - create class in its own .ts file
//2 - go to index.html, add the script - <script src="Scripts/objects/[insert file name here].js"></script>
//3 - add a reference path to the game.ts in order to use this class from this button.ts script on the game.ts script