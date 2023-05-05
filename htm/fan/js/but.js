let but1=createButton("left")
but1.position(w-100,w-200)
but1.mousePressed(b1f)

function b1f(){
    pa1State = "flinging";
    Matter.Body.setAngularVelocity(pa1.body, -0.5);
}

let but2=createButton("left")
but2.position(w-200,w-200)
but2.mousePressed(b2f)

function b2f(){
    pa2State = "flinging";
    Matter.Body.setAngularVelocity(pa2.body, 0.5);
}

let but3=createButton("left")
but3.position(w,w-300)
but3.mousePressed(b3f)

function b3f(){
gamestate = "waiting";
Matter.Body.setPosition(ball.body, {x: 400, y: 550});

}


    
