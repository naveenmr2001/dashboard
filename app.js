let input = document.getElementById('input');

function search() {
    let input = document.getElementById('input').value
    input=input.toLowerCase();
    console.log(input)
    let x = document.getElementsByClassName('hover-header');
    console.log(x)
    let y = document.getElementsByClassName('portfolio-item');
    console.log(y)
    for (i = 0; i < x.length; i++) { 
        console.log(x[i].innerHTML)
        console.log(y[i])
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            y[i].style.display="none";
        }
        else {
            y[i].style.display="grid";                 
        }
    }
}


let allbtn = document.getElementsByClassName("allbtn");
let htmlbtn = document.getElementsByClassName('htmlbtn');
let javabtn = document.getElementsByClassName("javabtn");
let javatddbtn = document.getElementsByClassName('javatddbtn')

javatddbtn[0].addEventListener('click',()=>{
    let htmlclass = document.getElementsByClassName("html")
    let javaclass = document.getElementsByClassName("java");
    let javatddclass = document.getElementsByClassName("javatdd")
    for(let i=0;i<javaclass.length;i++){
        javaclass[i].style.display="none";
    }
    for(let i=0;i<htmlclass.length;i++){
        htmlclass[i].style.display = "none";
    }
    for(let i=0;i<javatddclass.length;i++){
        javatddclass[i].style.display = "grid";
    }
})

htmlbtn[0].addEventListener('click',()=>{
    let htmlclass = document.getElementsByClassName("html")
    let javaclass = document.getElementsByClassName("java");
    let javatddclass = document.getElementsByClassName("javatdd");
    for(let i=0;i<htmlclass.length;i++){
        htmlclass[i].style.display="grid";
    }
    for(let i=0;i<javaclass.length;i++){
        javaclass[i].style.display = "none";
    }
    for(let i=0;i<javatddclass.length;i++){
        javatddclass[i].style.display = "none";
    }
})

javabtn[0].addEventListener('click',()=>{
    let htmlclass = document.getElementsByClassName("html")
    let javaclass = document.getElementsByClassName("java");
    let javatddclass = document.getElementsByClassName("javatdd");
    for(let i=0;i<javaclass.length;i++){
        javaclass[i].style.display="grid";
    }
    for(let i=0;i<htmlclass.length;i++){
        htmlclass[i].style.display = "none";
    }
    for(let i=0;i<javatddclass.length;i++){
        javatddclass[i].style.display = "none";
    }
})

allbtn[0].addEventListener('click',()=>{
    let htmlclass = document.getElementsByClassName("html")
    let javaclass = document.getElementsByClassName("java");
    let javatddclass = document.getElementsByClassName("javatdd");
    for(let i=0;i<javaclass.length;i++){
        javaclass[i].style.display="grid";
    }
    for(let i=0;i<htmlclass.length;i++){
        htmlclass[i].style.display = "grid";
    }
    for(let i=0;i<javatddclass.length;i++){
        javatddclass[i].style.display = "grid";
    }
})

input.addEventListener('change',()=>{
    search();
})