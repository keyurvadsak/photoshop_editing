let menuicon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let buttons = document.querySelectorAll(".sidebar-a")
let btnclick = 0;
menuicon.addEventListener("click" , ()=>{
    console.log("button click");
    if(btnclick == 0){
        sidebar.style.left = "0";
        btnclick = 1;

    }else if(btnclick == 1){
        sidebar.style.left = "-200px";
        btnclick = 0;
    
    }
});
buttons.forEach(button => {
    button.addEventListener("click" ,()=>{
        sidebar.style.left = "-200px";
        btnclick = 0;
    })
});




