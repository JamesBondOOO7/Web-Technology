var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight/2;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 220;
var positionOfPaddle2 = 220;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;

// 2 player game
// 1st player will use : W and S key
// 2nd player will use up and down arrow keys

// Starts the ball
function startBall()
{
    topPositionOfBall = 510;
    leftPositionOfBall = 820;

    // Deciding the direction of the ball;
    if( Math.random() < 0.5 )
    {
        var side = 1;
    }
    else
    {
        var side = -1;
    }

    leftSpeedOfBall = side * (Math.random() * 6 + 5);

    topSpeedOfBall = Math.random() * 6 + 5;
}

// For movement of the paddle
document.addEventListener('keydown', function(e){

    // W
    if(e.keycode == 87 || e.which == 87 )
    {
        speedOfPaddle1 = -10;
    }

    // S
    if(e.keycode == 83 || e.which == 83 )
    {
        speedOfPaddle1 = 10;
    }
    
    // Up
    if(e.keycode == 38 || e.which == 38 )
    {
        speedOfPaddle2 = -10;
    }

    // Down
    if(e.keycode == 40 || e.which == 40 )
    {
        speedOfPaddle2 = 10;
    }
});


// For fixing the paddles
document.addEventListener('keyup', function(e){

    // W
    if(e.keycode == 87 || e.which == 87 )
    {
        speedOfPaddle1 = 0;
    }

    // S
    if(e.keycode == 83 || e.which == 83 )
    {
        speedOfPaddle1 = 0;
    }
    
    // Up
    if(e.keycode == 38 || e.which == 38 )
    {
        speedOfPaddle2 = 0;
    }

    // Down
    if(e.keycode == 40 || e.which == 40 )
    {
        speedOfPaddle2 = 0;
    }
});

// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
window.setInterval(function show(){

    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;


    // Updating the position of the ball according to the speed
    topPositionOfBall += topSpeedOfBall;
    leftPositionOfBall += leftSpeedOfBall;


    // Fixing the paddles so that they don't escape from the screen

    // Top
    if( positionOfPaddle1 <= 1)
    {
        positionOfPaddle1 = 1;
    }

    if( positionOfPaddle2 <= 1)
    {
        positionOfPaddle2 = 1;
    }

    // Bottom
    if( positionOfPaddle1 >= window.innerHeight - paddleHeight)
    {
        positionOfPaddle1 = window.innerHeight - paddleHeight;
    }

    if( positionOfPaddle2 >= window.innerHeight - paddleHeight)
    {
        positionOfPaddle2 = window.innerHeight - paddleHeight;
    }

    // Controlling the ball

    // We want the ball to bounce back when it hits the top and bottom wall
    if( topPositionOfBall <= 10 || topPositionOfBall >= window.innerHeight - ballRadius)
    {
        topSpeedOfBall = - topSpeedOfBall;
    
    }   

    // Controlling Horizontal Direction

    // Paddle1
    if( leftPositionOfBall <= paddleWidth )
    {
        if( topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight)
        {
            leftSpeedOfBall = - leftSpeedOfBall;
        }
        else
        {
            score2++;
            startBall();
        }
    }

    // Paddle2
    if( leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth)
    {
        if( topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight)
        {
            leftSpeedOfBall = - leftSpeedOfBall;
        }
        else
        {
            score1++;
            startBall();
        }
    }


    document.getElementById('paddle1').style.top = positionOfPaddle1 + 'px';
    document.getElementById('paddle2').style.top = positionOfPaddle2 + 'px';

    document.getElementById('ball').style.top = topPositionOfBall + 'px';
    document.getElementById('ball').style.left = leftPositionOfBall + 'px';


    // Updating the score
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
    
}, 1000/60);