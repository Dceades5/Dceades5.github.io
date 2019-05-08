var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeRunner = function() {
        
        window.opspark.runner = {};
        var runner = window.opspark.runner;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables //
        var circle;
        var circles = [];
        var drawCircle = function() {
        // TODO 2 : Create a function that draws a circle  //
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
        }
        
        
        

        // TODO 3 : Call the drawCircle function 5 times //
      
        

        // TODO 7 : Create a Loop to call drawCircle 100 times
        /**
         * Comment From Ben:
         * 
         * Each of these for loops will run 10 times. Instead of using 
         * both, choose just 1 and adjust the conditions of the loop so that
         * it runs 100 times. I would recommend going with the for loop.
         * 
         * Within the code block of the loop you need to call drawCircle 
         * and you are so close! You just need to add parentheses at the end:
         * 
         *      drawCircle();
         * 
         * This is the correct way to call the function. Otherwise you are just
         * referencing the name of the function and not telling it to run. That's
         * what the parentheses do.
         * */
       
        
        for (var counter = 0; counter < 100; counter++){
             drawCircle();
        }
        
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        runner.checkCircleBounds = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            
            /** 
            Comment from Ben:
            
            This is a good start. I like that you changed the sign from ">" to "<" for opposite
            sides and that you adjusted "circle.x" to "circle.y" and "canvas.width" to "canvas.height"
            when dealing with the top and bottom of the screen. You have the right idea with both of
            those changes but the coordinates that you are comparing with your circle's coordinates aren't
            quite right. First let's talk about how the first if statement works. Then, we can figure out how to 
            fix the other ones. To simplify things, I've removed all instances of circle.radius.
            
            1) The first if statement, which we gave you, correctly places the circle on the left side
            of the screen if the circle goes past the right side of the screen. To do this we set 
            
                circle.x = 0
            
            because 0 is the x-coordinate for the\ left side of the screen. We only do this based on the condition:
            
                if (circle.x > canvas.width)
                
            because if this is true, then we know that the circle's x-coordinate is to the right of the right
            edge of the screen where x = canvas.width.
            
            2) Now, to check if the circle has gone past the left side I like that you changed the sign to <
            However, canvas.width is the x-coordinate for the RIGHT side of the screen. what is the x-coordinate 
            at the left side of the screen? 
            
            If the circle has gone past this point, we want to put the circle at the RIGHT side. But as we saw in the first
            example, setting x to 0 will place at the LEFT side.
            */
            
            // if the circle has gone out the RIGHT side of the screen then place it off-screen LEFT
            if ( circle.x > canvas.width) {
                circle.x = 0;
            } 
            // TODO 5a) if the circle has gone out of the LEFT side of the screen then place it off-screen RIGHT
            else if ( circle.x < 0) {
                circle.x = canvas.width;
            } 

            // TODO 5b) if the circle has gone out of the TOP side of the screen then place it off-screen BOTTOM
            if ( circle.y < 0) {
                circle.y = canvas.height;
            }
            // TODO 5c) if the circle has gone out of the BOTTOM side of the screen then place it off-screen TOP 
            else if ( circle.y > canvas.height) {
                circle.y = 0;
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        }
    
        var update = function() {
            // TODO 4 : Update the circle's position //
           
            
            // TODO 6 : Call checkCircleBounds on your circles.
          

            // TODO 8 : Iterate over the array
            
            /*
            Comment From Ben:
            
            Hey David, this is a fine place to start and I can see that you've copied the 
            example code and tried to fit it into our program. You should be careful when
            doing this. When you see code examples in the instructions read carefully about
            what you should do with them. Here are my thougths:
            
            1) The sample code was meant to demonstrate the process of iteration: accessing
            every value of an Array using a for loop. In our project we want to iterate over
            an Array that already exists: circles.
            
            This Array is created at the top (see line 24) and every time we draw a circle
            that circle is pushed into the array (see line 30). So we don't want to create a new array of
            circles as it will overwrite the existing one.
            */
           
           
          
       
       
            /*
            2) We only need one for loop to iterate over the circles array so let's use this one. You
            ALMOST have the right code here. To access each value from the circles array we need want
            
                circle = circles[i]
                
            We use i in the brackets because as the value of i changes during the loop, circles[i] will access
            a new value on every loop, thus achieving our goal of iteration. 
            
            Then, we want to put those function calls to physikz.updatePosition and runner.checkCircleBounds INSIDE
            the code block so that for every circle we can update its position and check its bounds
            
            */
           for (var i = 0; i < circles.length; i++){
               circle = circles[i];
               console.log(circle);
                // move your function calls HERE
                 physikz.updatePosition(circle)
                 runner.checkCircleBounds(circle)
           }
           
        }
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        runner.circle = circle;
        runner.circles = circles;
        runner.drawCircle = drawCircle;
        runner.update = update;
        
        app.addUpdateable(window.opspark.runner);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
