var mousevent = "empty";
var last_position_of_x,last_position_of_y;
color = "red";
width_of_line = 5;

var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e) {
    mousevent = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if (mousevent == "mousedown") {
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.linewidth = width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
   mousevent = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e) {
    mousevent = "mouseleave";
}