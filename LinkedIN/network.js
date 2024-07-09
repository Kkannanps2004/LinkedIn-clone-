console.log("My Network");

const main                       = document.getElementById("main")
const main_choose_popGrow        = document.getElementById("main_choose-pop-grow")
const main_choose_popCatchup     = document.getElementById("main_choose-pop-catchup")
const main_popCatchup            = document.getElementById("main_popCatchup")
const main_popGrow               = document.getElementById("main_popGrow")

main_choose_popGrow.addEventListener("click" , ()=>{
    main_choose_popGrow.classList.add("main_choose-popAll-click")
    main_choose_popCatchup.classList.remove("main_choose-popAll-click")
    main_popCatchup.style.display = "none"
    main_popGrow.style.display = "block"

})



main_choose_popCatchup.addEventListener("click" , ()=>{
    main_choose_popCatchup.classList.add("main_choose-popAll-click")
    main_choose_popGrow.classList.remove("main_choose-popAll-click")
    main_popCatchup.style.display = 'block'
    main_popGrow.style.display = "none"
})





const main_menu_all          = document.getElementById("main_choose-pop-catchup-menu-all")
const main_menu_jobChanges   = document.getElementById("main_choose-pop-catchup-menu-jobChanges")
const main_menu_birthdays    = document.getElementById("main_choose-pop-catchup-menu-birthdays" )
const main_menu_work         = document.getElementById("main_choose-pop-catchup-menu-work")
const main_menu_education    = document.getElementById("main_choose-pop-catchup-menu-education" )

const main_artical_all                   = document.getElementById("main_artical-allBth")
const main_artical_jobchangebtn          = document.getElementById("main_article-jobchangebtn")
const main_artical_birthdaysbtn          = document.getElementById("main_article-birthdaysbtn")
const main_artical_WorkAnniversariesbth  = document.getElementById("main_article-WorkAnniversariesbth")
const main_artical_Educationbth          = document.getElementById("main_article-Educationbth")

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

function mcpc_all() {
    const mcpc_all       = document.getElementById("mcpc-all")
    const mcpc_all_child = Array.from(mcpc_all.children)
    const Add            = "main_choose-pop-catchup-menu-click"
    const Remove         = "main_choose-pop-catchup-menu-click"

    clickAll(mcpc_all_child , Add, Remove)
}

mcpc_all()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function clickAll(mainChild , Add ,Remove) {
    
    mainChild.forEach((child,index) => {
        child.addEventListener("click",function() {
            mainChild.forEach((c,idx) =>{
                if (idx===index) {
                    if (!c.className.match(Add)) {
                        c.classList.add(Add)
                    }else{
                        console.log("Already availe");
                    }
                }else{
                    c.classList.remove(Remove)
                }
            })
        })
    });
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++