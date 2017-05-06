var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('meme');
var ctx = canvas.getContext('2d');

var img;
function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        img = new Image();
        img.onload = function(){
            keeping = img;
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
            draw(document.getElementById("top").value, document.getElementById("bottom").value);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);

}

function update() {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img,0,0);

  draw(document.getElementById("top").value, document.getElementById("bottom").value);
}


function draw(topfont,botfont) {
ctx.font = "40px Impact";
ctx.fillStyle = 'white';
canvas.textAlign = "center";

fwid = ctx.measureText(topfont).width;
ctx.fillText(topfont, (canvas.width / 2) - (fwid / 2), 60);
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.strokeText(topfont, (canvas.width / 2) - (fwid / 2), 60);

ctx.font = "40px Impact";
ctx.fillStyle = 'white';
canvas.textAlign = "center";

fwid = ctx.measureText(botfont).width;
ctx.fillText(botfont, (canvas.width / 2) - (fwid / 2), canvas.height - 20);
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.strokeText(botfont, (canvas.width / 2) - (fwid / 2), canvas.height - 20);
}
