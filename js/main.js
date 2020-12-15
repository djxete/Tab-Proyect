

//=================== VARIABLES ========

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");





about.addEventListener("click", e => {


    let btnClickeado = e.target.getAttribute("data-id");

    if (btnClickeado != undefined) {
        
        // remove active from other buttons

        btns.forEach(btn =>{
            btn.classList.remove("active");
            e.target.classList.add("active");
        })

        // hide all articles

        articles.forEach(article =>{
            article.classList.remove("active");
            
        })

        //show article depends on the button you clicked on

        const element = document.getElementById(btnClickeado);
        
        element.classList.add("active");


    }
    
    else{
        console.log(`No es un botón`);
    }
})



