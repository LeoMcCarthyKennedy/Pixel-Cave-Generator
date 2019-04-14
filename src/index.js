var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var framerate = 60;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cave = new Cave();
var map = cave.generate(128, 0.5, 8, 5);
