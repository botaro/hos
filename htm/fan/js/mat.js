//set up for matterJS
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

var engine, world, body, render;

//variables
var R1, R2, R3, R4, R5;
var FR1, FR2, FR3;
var T1, T2, T3, T4, T5;
var FT1, FT2, FT3, FT4, FT5;
var ball;
var screw1, screw2, screw3, screw4, screw5, screw6, screw7, screw8, screw9, screw10;
var pa1, pa2;
var pa1State, pa2State;

var charge;
var gamestate;

/*
Calculations for the center of the playing area
450 - 25 (R5's space) - 70 (R1's space) = 355 pixels to use
355/2 + 25 (to be far from  R5) = 202.5 which should be the center
*/
