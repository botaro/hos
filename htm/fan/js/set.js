function preload(){  //load in the font
}

function setup() {
let w=displayWidth
let h=displayHeight
//create canvas 450 700
let cnv=createCanvas(450,700)
cnv.parent("cnv")

  //more matterJS set up
  engine = Engine.create();
  world = engine.world;
  //render = Render.create({ element: document.body, engine: engine, options: { width: 450, height: 700, wireframes: false } });

  //create the s of the machine
  R1 = new RectangleObject(390, 370, 20, 520);
  R2 = new RectangleObject(450, 350, 50, 1000);
  R3 = new RectangleObject(405, 650, 50, 140);
  R4 = new RectangleObject(225, 20, 450, 100);
  R5 = new RectangleObject(0, 350, 50, 1000);

  FR1 = new FlexableRectObj(202.5, 350, 100, 10);
  FR2 = new FlexableRectObj(132.5, 425, 100, 10);
  FR3 = new FlexableRectObj(272.5, 425, 100, 10);

  T1 = new TriangleObject(415, 60, 40, PI/11);
  T2 = new TriangleObject(132.5, 220, 30, PI/2);
  T3 = new TriangleObject(272.5, 220, 30, PI/2);
  T4 = new TriangleObject(22.5, 585, 35, PI/2);
  T5 = new TriangleObject(382.5, 585, 35, PI/2);
  T6 = new TriangleObject(30, 60, 40, PI/1.15);

  FT1 = new FlexableTriObj(142.5, 520, 25, 0);
  FT2 = new FlexableTriObj(262.5, 520, 25, PI/-3);
  FT3 = new FlexableTriObj(202.5, 150, 35, PI/2);
  FT4 = new FlexableTriObj(62.5, 275, 30, PI/2);
  FT5 = new FlexableTriObj(342.5, 275, 30, PI/2);

  screw1 = new Screw(FR1.body, {x: 202.5, y: 350}, 1, 0, 0);
  screw2 = new Screw(FR2.body, {x: 122.5, y: 425}, 1, 0, 0);
  screw3 = new Screw(FR3.body, {x: 272.5, y: 425}, 1, 0, 0);

  screw4 = new Screw(FT1.body, {x: 142.5, y: 520}, 1, 0, 0);
  screw5 = new Screw(FT2.body, {x: 262.5, y: 520}, 1, 0, 0);
  screw6 = new Screw(FT3.body, {x: 202.5, y: 150}, 1, 0, 0);

  screw7 = new Screw(FT4.body, {x: 62.5, y: 275}, 1, 0, 0);
  screw8 = new Screw(FT5.body, {x: 342.5, y: 275}, 1, 0, 0);

  ball = new Ball(400, 550);

  pa1 = new Paddle(100, 670, 130, 40, 1);
  screw9 = new Screw(pa1.body, {x: 40, y: 650}, 1, 0, -65);

  pa2 = new Paddle(305, 670, 130, 40, 0);
  screw10 = new Screw(pa2.body, {x: 365, y: 650}, 1, 0, 65);

  charge = 0;
  gamestate = "waiting";

  pa1State = "resting";
  pa2State = "resting";

    // but //
let but1=createButton("left")
    but1.addClass("btn btn-info")
but1.position(w/2-200,w-200)
but1.mousePressed(b1f)

function b1f(){
pa1State = "flinging";
Matter.Body.setAngularVelocity(pa1.body, -0.5);
}

let but2=createButton("right")
    but2.addClass("btn btn-warning")
but2.position(w,w-200)
but2.mousePressed(b2f)

function b2f(){
pa2State = "flinging";
Matter.Body.setAngularVelocity(pa2.body, 0.5);
}

let but3=createButton("reset")
    but3.addClass("btn btn-danger")
but3.position(w,w-300)
but3.mousePressed(b3f)

function b3f(){
gamestate = "waiting";
Matter.Body.setPosition(ball.body, {x: 400, y: 550});

}


}

