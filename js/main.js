
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


document.getElementById("choice").addEventListener(
 "click",
 () => {
    let randomNum = (Math.floor(Math.random()*includedGear.length))
    let showMessages = document.getElementsByClassName("messages")
    console.log(showMessages)
    for (let k=0; k<showMessages.length; k++){
        if(includedGear[randomNum] == showMessages[k]){
                console.log(showMessages[k])
                showMessages[k].hidden = false;
               
                document.getElementById(`${showMessages[k]}+Check`).hidden = true;
        }
    }
//     if(includedGear.length < 1){
//         document.getElementById("dots").hidden = true;
//         document.getElementById("emf").hidden = true;
//         document.getElementById("book").hidden = true;
//         document.getElementById("spirit").hidden = true;
//         document.getElementById("thermo").hidden = true;
//         document.getElementById("notEnough").hidden = false;
//     }

//     else if(includedGear[randomNum] == "dots"){
//     document.getElementById("dots").hidden = false;
//     document.getElementById("emf").hidden = true;
//     document.getElementById("book").hidden = true;
//     document.getElementById("spirit").hidden = true;
//     document.getElementById("thermo").hidden = true;
//     document.getElementById("notEnough").hidden = true;
//     }
//     else if( includedGear[randomNum] == "emf"){
//         document.getElementById("emf").hidden = false;
//         document.getElementById("dots").hidden = true;
//         document.getElementById("book").hidden = true;
//         document.getElementById("spirit").hidden = true;
//         document.getElementById("thermo").hidden = true;
//         document.getElementById("notEnough").hidden = true;
//         }
//     else if(includedGear[randomNum] == "book"){
//             document.getElementById("book").hidden = false;
//             document.getElementById("dots").hidden = true;
//             document.getElementById("emf").hidden = true;
//             document.getElementById("spirit").hidden = true;
//             document.getElementById("thermo").hidden = true;
//             document.getElementById("notEnough").hidden = true;
//             }
//     else if(includedGear[randomNum] == "spirit"){
//             document.getElementById("spirit").hidden = false;
//             document.getElementById("dots").hidden = true;
//             document.getElementById("emf").hidden = true;
//             document.getElementById("book").hidden = true;
//             document.getElementById("thermo").hidden = true;
//             document.getElementById("notEnough").hidden = true;
//     }  
//     else{
//             document.getElementById("spirit").hidden = true;
//             document.getElementById("dots").hidden = true;
//             document.getElementById("emf").hidden = true;
//             document.getElementById("book").hidden = true;
//             document.getElementById("thermo").hidden = false;
//             document.getElementById("notEnough").hidden = true;
//     }
 }   )

 document.getElementById("reset").addEventListener(
        "click",
        () => {
        
           /* empty arrays */
           includedGear = []

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