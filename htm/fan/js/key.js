function keyReleased(){
  if(keyCode === UP_ARROW) {
    Matter.Body.setVelocity(ball.body, {x: 0, y: charge});

    charge = 0;
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    pa1State = "flinging";
    Matter.Body.setAngularVelocity(pa1.body, -0.5);
  }

  if(keyCode === RIGHT_ARROW){
    pa2State = "flinging";
    Matter.Body.setAngularVelocity(pa2.body, 0.5);
  }

  if(keyCode === 32){
    gamestate = "waiting";
    Matter.Body.setPosition(ball.body, {x: 400, y: 550});
  }
}


