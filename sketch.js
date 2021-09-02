// declaring variables
var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

// function preload
function preload(){
  // loading img
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();

  obstacleImage = loadImage("images/mushroom.png")
}

// function setup
function setup() {
  // creating canvas
  createCanvas(1000, 600);
  // database name
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

// function draw
function draw() {
  // background
  background(back_img);
  // if statements
   if (playerCount === 2) {
    //  updating game if playerCount === 2
     game.update(1);
   }
   if (gameState === 1) {
    //using clear
     clear(); 
    //  setting the gameState to play
     game.play();
   }
   if (gameState === 2) {
    //  if gameState === 2 game is set to end
     game.end();
   }
}