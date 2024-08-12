
let includedKids = []

function addLogan() {
        let isLoganChecked = document.getElementById("loganCheck")
        if(isLoganChecked.checked == true){
                includedKids.push("logan")
        }
                
        else if(isLoganChecked.checked == false){
                includedKids = includedKids.filter(e => e !== 'logan')
        }
}

function addPatrick() {
        let isPatrickChecked = document.getElementById("patrickCheck")
        if(isPatrickChecked.checked == true){
                includedKids.push("patrick")
        }
        else if(isPatrickChecked.checked == false){
                includedKids = includedKids.filter(e => e !== 'patrick')
        }
}

function addLillian() {
        let isLillianChecked = document.getElementById("lillianCheck")
        if(isLillianChecked.checked == true){
                includedKids.push("lillian")
        }
        else if(isLillianChecked.checked == false){
                includedKids = includedKids.filter(e => e !== 'lillian')
        }
}

function addSamuel() {
        let isSamuelChecked = document.getElementById("samuelCheck")
        if(isSamuelChecked.checked == true){
                includedKids.push("samuel")
        }
        else if(isSamuelChecked.checked == false){
                includedKids = includedKids.filter(e => e !== 'samuel')
        }
}


document.getElementById("choice").addEventListener(
 "click",
 () => {
    let randomNum = (Math.floor(Math.random()*includedKids.length))
    if(includedKids.length < 1){
        document.getElementById("logan").hidden = true;
        document.getElementById("patrick").hidden = true;
        document.getElementById("lillian").hidden = true;
        document.getElementById("samuel").hidden = true;
        document.getElementById("notEnough").hidden = false;
    }

    else if(includedKids[randomNum] == "logan"){
    document.getElementById("logan").hidden = false;
    document.getElementById("patrick").hidden = true;
    document.getElementById("lillian").hidden = true;
    document.getElementById("samuel").hidden = true;
    document.getElementById("notEnough").hidden = true;
    }
    else if( includedKids[randomNum] == "patrick"){
        document.getElementById("patrick").hidden = false;
        document.getElementById("logan").hidden = true;
        document.getElementById("lillian").hidden = true;
        document.getElementById("samuel").hidden = true;
        document.getElementById("notEnough").hidden = true;
        }
    else if(includedKids[randomNum] == "lillian"){
            document.getElementById("lillian").hidden = false;
            document.getElementById("logan").hidden = true;
            document.getElementById("patrick").hidden = true;
            document.getElementById("samuel").hidden = true;
            document.getElementById("notEnough").hidden = true;
            }
    else{
            document.getElementById("samuel").hidden = false;
            document.getElementById("logan").hidden = true;
            document.getElementById("patrick").hidden = true;
            document.getElementById("lillian").hidden = true;
            document.getElementById("notEnough").hidden = true;
    }  
 }   
)