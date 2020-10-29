let buttons = document.getElementsByClassName("btn");
let changeMe = document.getElementById("changeMe");

for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', function(e){
        alert("You clicked on " + e.target.innerText);
        //Removes button after clicking
        //this.remove();
        changingText(e.target.innerText);
    });
}

function changingText(textToChange)
{
    changeMe.innerText = textToChange;

    //reset the css
    changeMe.classList = "";
    switch(textToChange)
    {
        case "Primary":
            changeMe.classList.add("blue");
            break;
        case "Secondary":
            changeMe.classList.add("grey");
            break;
        case "Success":
            changeMe.classList.add("green");
            break;
        case "Danger":
            changeMe.classList.add("red");
            break;
        case "Warning":
            changeMe.classList.add("yellow");
            break;
        case "Info":
            changeMe.classList.add("teal");
            break;
        default:
            changeMe.classList.add("dark");
            break;
    }
}

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function(e){
//         changeMe.innerHTML = e.target.innerHTML;
//         changeMe.className = this.className;
//     });
// } // end of loop
