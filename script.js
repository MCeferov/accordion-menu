

const accordionBtns = document.querySelectorAll(".accordion")

// accordionBtns.forEach((accordion))  => {
//     accordion.addEventListener("click", ()=> {accordion.classlist.toggle(is-open);
    
//     let content = accordion.nextElementSibling;
// console.log(content);
// }
    
//     )
// }

accordionBtns.forEach((accordion) => {
    accordion.addEventListener("click", ()=> {accordion.classList.toggle("is-open");

    let content = accordion.nextElementSibling;
    console.log(content);

    if(content.style.maxHeight){
        // this is if accordion is open
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(content.style.maxHeight);
    }
    })
})
