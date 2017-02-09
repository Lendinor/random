var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.

function createFirstScene()
{    
    makeRect(0,0,200,75,"pink",1)   
    makeRect(0,75,200,25,"blue",1)
    makeCircle(100,112.5,50,"tan",1)
    makeRect(100,17.5,7.5,50,"brown",1)
    makeCircle(103.75,17.5,15,"green",1)
    makeEllipse(155,75,5,3,"white",1)
    var x = Math.random()
    if(x<.5)
    {
        x = 200
    } else
    {
        x = 0
    }
    makeCircle(x,0,25,"#FDB813",1)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene()
{
    var y = Math.random()
    if(y<.5)
    {
        y = 1
    } else
    {
        y = 0
    }

    makeRect(0,0,200,75,"darkblue",1)
    makeRect(0,75,200,25,"green",1)
    makeCircle(25,112.5,50,"green",1)
    makeCircle(0,0,25,"orange",1)
    makeCircle(0,0,24.5,"black",y)
    makeEllipse(130,75,20,7.5,"green",1)
    makeEllipse(175,75,15,12.5,"green",1)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene()
{
    var x = Math.random()
    if(x <.5)
    {
        x = 1
    } else
    {
        x = 0
    }
    makeRect(0,0,200,75,"#000019",1)
    makeRect(0,75,200,25,"tan",1)
    makeCircle(175,112.5,50,"tan",1)
    makeRect(100,50,3.75,25,"green",1)
    makeRect(103,60,10,3.75,"green",1)
    makeRect(109.2,55,3.75,7,"green",1)
    makePolygon("0,75,25,50,50,75","#C2B48C",1)
    //makeCircle(50,25,25,"ivory",1)
    
    makeCircle(2,10,1,"white",1)
    makeCircle(10,20,1,"white",1)
    makeCircle(20,10,1,"white",1)
    makeCircle(30,20,1,"white",1)
    makeCircle(40,10,1,"white",1)
    makeCircle(50,20,1,"white",1)
    makeCircle(60,10,1,"white",1)
    makeCircle(70,20,1,"white",1)
    makeCircle(80,10,1,"white",1)
    makeCircle(90,20,1,"white",1)
    makeCircle(100,10,1,"white",1)
    makeCircle(110,20,1,"white",1)
    makeCircle(120,10,1,"white",1)
    makeCircle(130,20,1,"white",1)
    makeCircle(140,10,1,"white",1)
    makeCircle(150,20,1,"white",1)
    makeCircle(160,10,1,"white",1)
    makeCircle(170,20,1,"white",1)
    makeCircle(180,10,1,"white",1)
    makeCircle(190,20,1,"white",1)
    makeCircle(198,10,1,"white",1)

    makeCircle(7,20,1,"white",x)
    makeCircle(15,10,1,"white",x)
    makeCircle(25,20,1,"white",x)
    makeCircle(35,10,1,"white",x)
    makeCircle(45,20,1,"white",x)
    makeCircle(55,10,1,"white",x)
    makeCircle(65,20,1,"white",x)
    makeCircle(75,10,1,"white",x)
    makeCircle(85,20,1,"white",x)
    makeCircle(95,10,1,"white",x)
    makeCircle(105,20,1,"white",x)
    makeCircle(115,10,1,"white",x)
    makeCircle(125,20,1,"white",x)
    makeCircle(135,10,1,"white",x)
    makeCircle(145,20,1,"white",x)
    makeCircle(155,10,1,"white",x)
    makeCircle(165,20,1,"white",x)
    makeCircle(175,10,1,"white",x)
    makeCircle(185,20,1,"white",x)
    makeCircle(195,10,1,"white",x)
    

    
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene()
{
    // Generate a random number between 0 and 1, and store it in a variable.   
    // If the number is less than 0.33, call the function to create your first scene.
    // Else, if the number is less than 0.67, call the function to create your second scene.
    // Else, call the function to create your third scene.
    var dice = Math.random()
  if(dice < 0.17){
    createFirstScene();
  }else if(dice < 0.33){
    createFirstScene();
  }else if(dice < 0.5){
    createSecondScene();
  }else if(dice < 0.67){
    createSecondScene();
  } else if(dice <0.83){
    createThirdScene();
  }else{
    createThirdScene();
  }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}