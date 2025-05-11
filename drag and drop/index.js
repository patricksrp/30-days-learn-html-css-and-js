let lists = document.getElementsByClassName("list");
let rightBox  = document.getElementById("right");
let leftBox = document.getElementById("left");


for(List of lists){
  List.addEventListener("dragstart", function(e){
    let selected = e.target;
    rightBox.addEventListener("dragover", function(e){
        e.preventDefault();
        leftBox.appendChild(selected);
        
    });
    
    rightBox.addEventListener("drop", function(e){
        rightBox.appendChild(selected);
        selected = null;
    })
    leftBox.addEventListener("dragover", function(e){
        e.preventDefault();
       
        
    });
    
    left.addEventListener("drop", function(e){
        leftBox.appendChild(selected);
        selected = null;
    })
  });
}