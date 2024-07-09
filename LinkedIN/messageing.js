const messageArea = document.getElementById('messageArea')
const receiveImg = document.getElementById('receive-img')
const sendImg = document.getElementById('send-img')
const uplodbth = document.getElementById('uplodbth')

const massagebox = document.getElementById("messagebox")

const sendt = document.getElementById('sendt')
const sendi = document.getElementById('sendi')




sendt.addEventListener("click" , ()=>{
    const sendtext = messageArea.value

    if ( 0 < sendtext.length) {

    const newMessgeStatusSend = document.createElement('div')
    newMessgeStatusSend.className = 'mbdc mbdcs-i'

    newMessgeStatusSend.innerHTML = `<div class=" mbdc mbdcs-i">
                                <div class=" scdccm-i sbdcds-i">
                                    <h4>${sendtext}</h4>
                                </div>
                            </div>`

//    newMessgeStatusSend.innerHTML= `<div class=" mbdc mbdcs-i">
//                                 <div class=" scdccm-i sbdcc-i sbdcds-i">
//                                     <img class=" sbdcc-ip" id="send-img" src="/imgsize/water6.jpg" alt="">
//                                 </div>
//                             </div>`

    massagebox.append(newMessgeStatusSend)
    massagebox.scrollTop = massagebox.scrollHeight;


    console.log("hello");
    
    }
    messageArea.value =''
})

const resivedt = document.getElementById("resivedt")

resivedt.addEventListener('click' , ()=>{

    const sendtext = messageArea.value

    if ( 0 < sendtext.length) {
    
    const newMessgeStatusReceive = document.createElement('div')
    newMessgeStatusReceive.className = 'mbdc mbdcr-i'
    
    newMessgeStatusReceive.innerHTML = `<div class=" mbdc mbdcr-i">
                                <div class=" scdccm-i sbdcdr-i">
                                    <h4> ${sendtext} </h4>
                                </div>
                            </div>`;

    massagebox.append(newMessgeStatusReceive)
    massagebox.scrollTop = massagebox.scrollHeight;
                        

    messageArea.textContent = ''

        
    }
    messageArea.value =''
    
})

// // ------------------------------------------------
// const m_m_m_main = document.getElementById("m-m-m-menu")
// const m_m_m_main_child = Array.from(m_m_m_main.children)

// m_m_m_main_child.forEach((child,index) => {
//     child.addEventListener('click' , ()=>{
//         m_m_m_main_child.forEach((c,idx) =>{        
//             if (idx === index) {
//                 c.classList.add("m-m-menu-m-cclick")
//             }else{
//                 c.classList.remove("m-m-menu-m-cclick")
//             }
//         })
//     })
// })

// -------------------------------------------------------
function m_menu() {
    const mmm_menu = document.getElementById("m-m-m-menu")
    const mmmm_menuchild = Array.from(mmm_menu.children)
    const Add = "m-m-menu-m-cclick"
    const Remove = "m-m-menu-m-cclick"

    cilckAll(mmmm_menuchild,Add,Remove)
}

m_menu()

// --------------------------------------------------
// const messagerInfo = document.getElementById('messagerInfo')
// 
// const messagerchild = Array.from( messagerInfo.children)
// 
// 
// 
// console.log(messagerInfo);
// console.log(messagerchild);
// 
// messagerchild.forEach((child , index) => {
//     child.addEventListener('click', function () {
//         messagerchild.forEach((c,idx) =>{
//             if (idx === index) {
//                 if (!c.className.match("main_messagingBox-meassagerInfo-prosenClick")) {
//                     c.classList.add("main_messagingBox-meassagerInfo-prosenClick")
//                 }else{
//                     console.log("Alerady avabil");
//                 }
//             }else{
//                 c.classList.remove("main_messagingBox-meassagerInfo-prosenClick") 
//             }
//         })
//     })
// });


// =================================================================
function messagerInfo() {

    const messagerInfo  = document.getElementById('messagerInfo')
    const messagerchild = Array.from( messagerInfo.children)
    const Add           = "main_messagingBox-meassagerInfo-prosenClick"
    const Remove        = "main_messagingBox-meassagerInfo-prosenClick"

    cilckAll(messagerchild,Add,Remove)
}


messagerInfo()

// ================================================================
function cilckAll(mainChild,Add,Remove) {
    mainChild.forEach((child,index) =>{
        child.addEventListener("click", function() {
            mainChild.forEach((c,idx) =>{
                if(idx === index){
                    if (!c.className.match(Add)) {
                        c.classList.add(Add)
                    }else{
                        console.log("Alerady avabil");
                    }
                }else{
                    c.classList.remove(Remove)
                }
            })
        })
    })
}
// ===============================================================