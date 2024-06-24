
    const container2 = document.querySelector(".container2");
    const container = document.querySelector(".container");
    const btn = document.querySelector("#btn")
    const close = document.querySelector("#close")
    const overlay = document.querySelector(".overlay");

    btn.addEventListener("click",()=>{

        overlay.classList.add("active")


    })

    close.addEventListener("click",()=>{
        overlay.classList.remove("active")
    
    
    })

    overlay.addEventListener("click", (event) => {
        overlay.classList.remove("active")
    });

    container2.addEventListener("click",(e)=>{
        e.stopPropagation()
    })

    document.addEventListener("keydown",(e)=>{
        console.log(e)
        if(e.key === "Escape"){
            overlay.classList.remove("active")
        }
    })