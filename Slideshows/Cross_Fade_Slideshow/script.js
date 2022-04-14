(function() {
    "use strict"
    //Always use const/let
    const images = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"];
    let current = 0;
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');
    
    nextBtn.addEventListener('click',function(event){
        //prevents the default operation
        event.preventDefault();
        current++;
        if(current> images.length-1)
        {
            current = 0;
        }
        nextImg();
    });

    prevBtn.addEventListener('click',function(event){
        //prevents the default operation
        event.preventDefault();
        current--;
        if(current < 0)
        {
            current = images.length-1;
        }
        nextImg();
    });

    function nextImg()
    {

        const newSlide = document.createElement('img'); //Creating a new img element
        newSlide.src = images[current];
        newSlide.className = "fadeinimg"; //animation given to this class - fadein
        container.appendChild(newSlide);

        //Container keeps on adding new img elements on top of another so we need to remove the old ones 
        if(container.children.length>2)
        {
            container.removeChild(container.children[0]);
        }
    }
    })();