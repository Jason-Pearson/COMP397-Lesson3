var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        //CONSTRUCTOR
        function Button(pathString, x, y) {
            _super.call(this, "../../Assets/images/State_Machine_Buttons/" + pathString + ".png"); // super class needs path to buttons through the folders via string concatenation
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
        Button.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.7; // when mouse over any button - go to .7 alpha - makes the current image in the Button variable (in game.ts) lighter
        };
        // Event Handler for mouse out
        Button.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0; // when mouse out of any button - go back to 1.0 alpha for the current image in the Button variable (in game.ts) - back to the orignal, solid color
        };
        return Button;
    })(createjs.Bitmap);
    objects.Button = Button;
})(objects || (objects = {}));
//ALSO REMEMBER - 3 STEPS TO ADDING NEW MODULE (NEW CLASS) INTO YOUR CODE:
//1 - create class in its own .ts file
//2 - go to index.html, add the script - <script src="Scripts/objects/[insert file name here].js"></script>
//3 - add a reference path to the game.ts in order to use this class from this button.ts script on the game.ts script
//# sourceMappingURL=button.js.map