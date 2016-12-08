
  var svg = document.getElementById("svg");
  var svg_width;
  var body_width = document.body.clientWidth;
  var starting_point;
  setTimeout(function(){

    console.log(svg.width.baseVal.value);
    svg_width = parseInt(svg.width.baseVal.value);
    starting_point = svg_width/2 - body_width/2;
     svg.style.left = -starting_point+"px";


  },100)
  document.addEventListener("touchmove", animMovementMobile, false);
  document.onmousemove = animMovement;
function animMovement(e){
  var excessSpaceOnOneSide = (svg_width - body_width)/2;
  var ratio_offset = (e.clientX / body_width)*2 -1;
  var offset_position = excessSpaceOnOneSide*ratio_offset;
   svg.style.left = -starting_point -offset_position+"px";
}
function animMovementMobile(e){
  var excessSpaceOnOneSide = (svg_width - body_width)/2;
  var ratio_offset = (e.targetTouches[0].pageX / body_width)*2 -1;
  var offset_position = excessSpaceOnOneSide*ratio_offset;
   svg.style.left = -starting_point -offset_position+"px";
}
