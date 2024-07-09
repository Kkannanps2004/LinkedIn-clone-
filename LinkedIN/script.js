const Business = document.getElementById('Business')
const ForBusiness = document.getElementById('ForBusiness')
const Try_Premium = document.getElementById('Try_Premium')
const Me = document.getElementById('Me')
const me_myProfil = document.getElementById('me_myProfil')

Business.addEventListener("click" , ()=>{
    me_myProfil.style.display = "none"
    ForBusiness.classList.add("popUp_animation")
    ForBusiness.style.display = 'flex'

})


Me.addEventListener("click" , () =>{
    ForBusiness.style.display = "none"
    me_myProfil.classList.add("popUp_animation")
    me_myProfil.style.display = "block"
})

Try_Premium.addEventListener("click" ,()=>{
    ForBusiness.style.display = "none"
    me_myProfil.style.display = "none"    
})
