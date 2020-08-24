var img = null;

function upload(){
  var imgcanvas = document.getElementById("d1");
  var fileinput = document.getElementById("finput_fg");
  img = new SimpleImage(fileinput);
  img.drawTo(imgcanvas);
}

function make_red(){
  if (img == null){
    alert("image not loader")
    return;
  }
  red_img = new SimpleImage(img.getWidth(), img.getHeight())
  for (var pixel of red_img.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var new_pixel = img.getPixel(x,y);
    var green = new_pixel.getGreen();
    var blue = new_pixel.getBlue();
    pixel.setRed(255);
    pixel.setGreen(green);
    pixel.setBlue(blue);
}
  var imgcanvas = document.getElementById("d1");
  red_img.drawTo(imgcanvas);
}

function make_gray(){
  if (img == null){
    alert("image not loader")
    return;
  }
  gray_img = new SimpleImage(img.getWidth(), img.getHeight())
  for (var pixel of gray_img.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var new_pixel = img.getPixel(x,y);
    var avg = (new_pixel.getRed() + new_pixel.getGreen() + new_pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
}
  var imgcanvas = document.getElementById("d1");
  gray_img.drawTo(imgcanvas);
}

function make_blur(){
  if (img == null){
    alert("image not loader")
    return;
  }
  blur_img = new SimpleImage(img.getWidth(), img.getHeight())
  for (var pixel of blur_img.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < img.getWidth() && y < img.getHeight() && x > 0 && y > 0){
      var pixel1 = img.getPixel(x-1,y-1);
      var pixel2 = img.getPixel(x-1,y);
      var pixel3 = img.getPixel(x-1,y+1);
      var pixel4 = img.getPixel(x,y-1);
      var pixel5 = img.getPixel(x,y+1);
      var pixel6 = img.getPixel(x+1,y-1);
      var pixel7 = img.getPixel(x+1,y);
      var pixel8 = img.getPixel(x+1,y+1);
      var red = (pixel1.getRed() + pixel2.getRed() + pixel3.getRed() + pixel4.getRed() + pixel5.getRed() + pixel6.getRed() + pixel7.getRed() + pixel8.getRed())/8;
      var green = (pixel1.getGreen() + pixel2.getGreen() + pixel3.getGreen() + pixel4.getGreen() + pixel5.getGreen() + pixel6.getGreen() + pixel7.getGreen() + pixel8.getGreen())/8;
      var blue = (pixel1.getBlue() + pixel2.getBlue() + pixel3.getBlue() + pixel4.getBlue() + pixel5.getBlue() + pixel6.getBlue() + pixel7.getBlue() + pixel8.getBlue())/8;
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
    }
  else{
    pixel.setRed(0)
    pixel.setGreen(0)
    pixel.setBlue(0)
  }
}
  var imgcanvas = document.getElementById("d1");
  blur_img.drawTo(imgcanvas);
}


function reset(){
  var imgcanvas = document.getElementById("d1");
  img.drawTo(imgcanvas);
}


function abc(){
    var imgcanvas = document.getElementById("d1");
    var ctx = imgcanvas.getContext("2d");
    ctx.clearRect(0,0,imgcanvas.width, imgcanvas.height);
 }

