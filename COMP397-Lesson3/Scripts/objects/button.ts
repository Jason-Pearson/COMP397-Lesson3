module objects { //adding the module to same objects folder to partition to another file (game.ts)
    export class Button extends createjs.Bitmap { // creating the button class - to add positioning and mouse-event functionality to all the bitmap buttons via variables in game.ts as objects of this class
        //PRIVATE INSTACNE VARIABLES
        width: number; //just like javascript - all numbers are floating-point values - in Typescript, all float numbers are kept in variable type "number"
        height: number;
        //CONSTRUCTOR
        constructor(pathString:string, x:number, y:number) { // constructor holds string argument to easily pass to the file-path the file names for the other buttons - as well as hold the x and y values to position the button
            super("../../Assets/images/State_Machine_Buttons/" + pathString + ".png") // super class needs path to buttons through the folders via string concatenation

            //for the position of the button in the canvas initialized in the contructor to assign to these private variables when a new Button object (variable of type Button - to be instantiated as a Button object) is made in game.ts -
            //(3) after x and y size registered - allowing to move the button by x and y positioning within the canvas - relative (or absolute?) to the canvas size (640 x 480) 
            this.x = x;
            this.y = y;
            //(1) for the actual width and height of the button image -
            this.width = 150;
            this.height = 50;
            //(2) - to validate the size of the button image (instantiated within a bitmap in the Button variable made in game.ts) within the canvas - going into step (3) of position
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //calling both these functions give the button a roll-over effect - changing the alpha of the image on mouseover and then back to solid upon mouseout
            this.on("mouseover", this.overButton, this); // listen to event handler (on - "mouseover") to call function
            this.on("mouseout", this.outButton, this); // listen to event handler (on - "mouseout") to call function
        }
        //PRIVATE METHODS
        // Event Handler for mouse over
        overButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - mouseover - the  button
        event.currentTarget.alpha = 0.7; // when mouse over any button - go to .7 alpha - makes the current image in the Button variable (in game.ts) lighter
        }
        // Event Handler for mouse out
        outButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - mouseout - of the button
            event.currentTarget.alpha = 1.0; // when mouse out of any button - go back to 1.0 alpha for the current image in the Button variable (in game.ts) - back to the orignal, solid color
        }
    }
}
//ALSO REMEMBER - 3 STEPS TO ADDING NEW MODULE (NEW CLASS) INTO YOUR CODE:
//1 - create class in its own .ts file
//2 - go to index.html, add the script - <script src="Scripts/objects/[insert file name here].js"></script>
//3 - add a reference path to the game.ts in order to use this class from this button.ts script on the game.ts script
