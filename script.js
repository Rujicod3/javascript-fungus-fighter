// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
 let fungusHP = 100;
 let ap = 100;

function attackButtonHandler(event){
    let clickedButton = event.target

    if (clickedButton.className.includes("arcane-scepter")) {
        console.log('Arcane-scepter attack used', attackButtonHandler)
        ap -= 12
        fungusHP -= 14
    
    } else if (clickedButton.className.includes("entangle")) {   
        console.log('Entangle attack used', attackButtonHandler)
        ap -= 29
        fungusHP -= 9
    } else if (clickedButton.className.includes("dragon-blade")) {
        console.log('Dragon-Blade attack used', attackButtonHandler)
        ap -= 38
        fungusHP -= 47

    } else if (clickedButton.className.includes("star-fire")) {
        console.log('Star-fire attack used', attackButtonHandler)

        ap -= 33
        fungusHP -= 25
    
    } else {
        console.log("WTF???")
        return;
    }
    
    if (ap < 0) {
        ap = 0
        //disable buttons
    }

    if (fungusHP < 0) {
        fungusHP = 0
    }
   
    let  = document.querySelector(".attack-btn arcane-sceptor")
   
    console.log('arcane sceptor attack')
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
    render ()
}


