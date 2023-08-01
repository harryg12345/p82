canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
lastmouseX="";
lastmouseY="";
mousevalue="";
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mousevalue="md";
    console.log("mousedown");
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mousevalue="mu";
    console.log("mouseup");
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mousevalue="ml";
    console.log("mouseleave");
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_mouseX=e.clientX-canvas.offsetLeft;
    current_mouseY=e.clientY-canvas.offsetTop;
    if(mousevalue=="md"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth= 2;
        ctx.arc(current_mouseX ,current_mouseY, 40 ,0 ,2 * Math.PI);
        ctx.stroke();
    }
    lastmouseX=current_mouseX;
    lastmouseY=currentmouseY;
}