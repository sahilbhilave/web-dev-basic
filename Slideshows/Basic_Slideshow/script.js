(function() {

"use strict"

const images = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
let current = 0;

document.getElementById('next').onclick = nextPhoto;
document.getElementById('previous').onclick = previousPhoto;

function nextPhoto()
    {
    current++;

    console.log(current);
    if(current >= 5)
    {
        current = 0;
    }
    document.getElementById('myimage').src = images[current];
            
    }

    function previousPhoto()
    {

        current--;
        console.log(current);
        document.getElementById('myimage').src = images[current];
        if(current <= 0)
        {
            current = images.length;
        }
    }
})();