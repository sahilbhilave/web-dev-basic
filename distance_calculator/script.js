(function(){
    "use strict";
    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const anserDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown',function(event){
        var key = event.code;
        if(key=='KeyK')
        {
            convertType = 'km';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles";
        }
        else if(key = 'KeyM')
        {
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers";
        }
    });
        form.addEventListener('submit',function(event){
              event.preventDefault();
            //Always use const/let for variables
            const distance = parseFloat(document.getElementById('distance').value);
            const answer = document.getElementById('answer');
            if(distance) //check if distance is actual number
            {
                if(convertType=="miles")
                {
                    const conversion = (distance * 1.609344).toFixed(3);
                    answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
                }
                else
                {
                    const conversion = (distance * 0.621371192).toFixed(3);
                    answer.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`;
                }
                //Math.round(var) -> round off to closest integer
                //var.toFixed(n) -> print value for 3 decimal places 
                
            }
            else
            {
                answer.innerHTML = `<h2>Please provide a valid number!</h2>`;
            }
        
        
    });


})();