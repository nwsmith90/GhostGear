
let includedGear = []

function addDots() {
        let isDotsChecked = document.getElementById("dotsCheck")
        if(isDotsChecked.checked == true){
                includedGear.push("dots")
        }
                
        else if(isDotsChecked.checked == false){
                includedGear = includedGear.filter(e => e !== 'dots')
        }
}

function addEMF() {
        let isEMFChecked = document.getElementById("emfCheck")
        if(isEMFChecked.checked == true){
                includedGear.push("emf")
        }
        else if(isEMFChecked.checked == false){
                includedGear = includedGear.filter(e => e !== 'emf')
        }
}

function addBook() {
        let isBookChecked = document.getElementById("bookCheck")
        if(isBookChecked.checked == true){
                includedGear.push("book")
        }
        else if(isBookChecked.checked == false){
                includedGear = includedGear.filter(e => e !== 'book')
        }
}

function addSpirit() {
        let isSpiritChecked = document.getElementById("spiritCheck")
        if(isSpiritChecked.checked == true){
                includedGear.push("spirit")
        }
        else if(isSpiritChecked.checked == false){
                includedGear = includedGear.filter(e => e !== 'spirit')
        }
}

function addThermo() {
        let isThermoChecked = document.getElementById("thermoCheck")
        if(isThermoChecked.checked == true){
                includedGear.push("thermo")
        }
        else if(isThermoChecked.checked == false){
                includedGear = includedGear.filter(e => e !== 'thermo')
        }
}

function addUV() {
        let isUVChecked = document.getElementById("uvCheck")
        if(isUVChecked.checked == true){
                includedGear.push('uv')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'uv')
        }
}

function addVideo() {
        let isVideoChecked = document.getElementById("videoCheck")
        if(isVideoChecked.checked == true){
                includedGear.push('video')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'video')
        }
}

function addFlashlight() {
        let isFlashlightChecked = document.getElementById("flashlightCheck")
        if(isFlashlightChecked.checked == true){
                includedGear.push('flashlight')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'flashlight')
        }
}

function addCrucifix() {
        let isCrucifixChecked = document.getElementById("crucifixCheck")
        if(isCrucifixChecked.checked == true){
                includedGear.push('crucifix')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'crucifix')
        }
}

function addFirelight() {
        let isFirelightChecked = document.getElementById("firelightCheck")
        if(isFirelightChecked.checked == true){
                includedGear.push('firelight')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'firelight')
        }
}

function addHeadgear() {
        let isHeadgearChecked = document.getElementById("headgearCheck")
        if(isHeadgearChecked.checked == true){
                includedGear.push('headgear')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'headgear')
        }
}

function addIgniter() {
        let isIgniterChecked = document.getElementById("igniterCheck")
        if(isIgniterChecked.checked == true){
                includedGear.push('igniter')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'igniter')
        }
}

function addIncense() {
        let isIncenseChecked = document.getElementById("incenseCheck")
        if(isIncenseChecked.checked == true){
                includedGear.push('incense')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'incense')
        }
}

function addMotion() {
        let isMotionChecked = document.getElementById("motionCheck")
        if(isMotionChecked.checked == true){
                includedGear.push('motion')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'motion')
        }
}

function addParabolic() {
        let isParabolicChecked = document.getElementById("parabolicCheck")
        if(isParabolicChecked.checked == true){
                includedGear.push('parabolic')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'parabolic')
        }
}

function addPhoto() {
        let isPhotoChecked = document.getElementById("photoCheck")
        if(isPhotoChecked.checked == true){
                includedGear.push('photo')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'photo')
        }
}

function addSalt() {
        let isSaltChecked = document.getElementById("saltCheck")
        if(isSaltChecked.checked == true){
                includedGear.push('salt')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'salt')
        }
}

function addSanity() {
        let isSanityChecked = document.getElementById("sanityCheck")
        if(isSanityChecked.checked == true){
                includedGear.push('sanity')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'sanity')
        }
}

function addSound() {
        let isSoundChecked = document.getElementById("soundCheck")
        if(isSoundChecked.checked == true){
                includedGear.push('sound')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'sound')
        }
}

function addTripod() {
        let isTripodChecked = document.getElementById("tripodCheck")
        if(isTripodChecked.checked == true){
                includedGear.push('tripod')
        }
        else{
                includedGear = includedGear.filter(e => e !== 'tripod')
        }
}

// Generate Array of available options
let availableItems = []

// Click "Roll"
document.getElementById("choice").addEventListener(
 "click",
 () => {
    let randomNum = (Math.floor(Math.random()*includedGear.length))
    let showMessages = document.getElementsByClassName("messages")

    // Display not enough selections message if nothing checked
    if(includedGear.length < 1){
        document.getElementById("notEnough").hidden = false
    }

    //  Display random selection one at a time. 
    //  Need to change to add to an array, which should be displayed in dom under heading "Available Items"
//     else{
//         for (let k=0; k<showMessages.length; k++){
//                 if(includedGear[randomNum] == showMessages[k].id){
//                         showMessages[k].hidden = false;
//                 }
//                 else{
//                         showMessages[k].hidden = true;
//                 }
//         }
//     }
    else {
        for(let k=0; k<showMessages.length; k++){
                if(includedGear[randomNum] == showMessages[k].id){
                        availableItems = availableItems.push(`test`)
                        console.log(availableItems)
                }
        }
    }
 }   
)

 document.getElementById("reset").addEventListener(
        "click",
        () => {
        
           /* empty arrays */
           includedGear = []
           availableItems = []

           /* clear any items onscreen */
           let messageToBeCleared = document.getElementsByClassName("messages")
           for (let i=0; i<messageToBeCleared.length; i++) {
                messageToBeCleared[i].hidden = true
           }


           /* uncheck all boxes */
           let boxesToBeUnchecked = document.getElementsByClassName("itemsx")
           for (let j=0; j<boxesToBeUnchecked.length; j++) {
                boxesToBeUnchecked[j].checked = false;
           }
       
        }   
)