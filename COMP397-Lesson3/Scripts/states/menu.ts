// MENU STATE
module states {
     // exports main function with particular modifiations for the menu state - called menu function
        export function menu(): void {
        scene = new createjs.Container(); // instantiate the variable of type createJS Container

        // hello label
        helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
        stage.addChild(helloLabel); // add label to the stage
        // start button
        startButton = new objects.Button("startButton", 320, 340); //looking for image-url (path to image) to hold in this variable
        startButton.on("click", clickStartButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called

        stage.addChild(startButton); // add Start Button (of type Button) to the Stage (a variable of type createJS (class) which holds the Canvas as a reference)
        stage.addChild(scene); // this container will contain all our objects, and then implemented into the scene (stage) - preparation for the State Machine
    }
}