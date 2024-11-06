let image = document.querySelector('#image')
let name = document.querySelector('.name')
let skillText = document.querySelector('.skill-text');
let nameText = document.querySelector('.name-text');
let hover = document.querySelector('#image-hover');





function change(x){
    if (x === "charan"){
        nameText.innerHTML= 'Charan Perabathuala';
        skillText.innerHTML= 'html,css,javascript,python';
       
        image.style.backgroundImage = "url('hulk.jpg')"; 
        image.style.backgroundSize = "cover"; 
        image.style.backgroundPosition = "center"; 
    
    }
    else if (x === "ganesh") {
        nameText.innerHTML= 'Ganesh Mattaparthi';
        skillText.innerHTML= 'html,css,js,python,c';
        image.style.backgroundImage = "url('captain.jpg')";  
        image.style.backgroundSize = "cover";  
        image.style.backgroundPosition = "center"; 
    } 
    else if (x === "srinivas" ) {
        
    nameText.innerHTML= 'Srinivas Vakada';
    skillText.innerHTML= 'html,css,python';
    image.style.backgroundImage = "url('hawkeye.jpg')";
    image.style.backgroundSize = "cover";  
    image.style.backgroundPosition = "center"; 
        
    } 
    else if (x ==="ganesh_y") {
        
        nameText.innerHTML= 'Ganesh yalla';
        skillText.innerHTML= 'html,css,js,python,c';
        image.style.backgroundImage = "url('black panther.jpg')";  
        image.style.backgroundSize = "cover";  
        image.style.backgroundPosition = "center"; 
    } 
    else if (x === "vinay") {
        nameText.innerHTML= 'Vinay Basava';
    skillText.innerHTML= 'html,css,js,python,java';
    image.style.backgroundImage = "url('iron man.jpg')";  
    image.style.backgroundSize = "cover";  
    image.style.backgroundPosition = "center"; 
        
    } 
    else if (x === "sai charan") {
         
    nameText.innerHTML= 'sai charan';
    skillText.innerHTML= 'html,css,python';
    image.style.backgroundImage = "url('loki.jpg')";  
    image.style.backgroundSize = "cover";  
    image.style.backgroundPosition = "center"; 
        
    } 
    
    else {
        image.style.backgroundColor = "black";
        nameText.innerHTML= 'team name';
        skillText.innerHTML= 'web developers.';
        image.style.backgroundImage = "url('avengers.jpg')"; 
        image.style.backgroundSize = "cover"; 
        image.style.backgroundPosition = "center";  
    }
}
