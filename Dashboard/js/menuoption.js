const chooseoptionbtn = document.querySelector("#choose--option__btn");
const dropdown = document.querySelector(".choose--option__dropdown");

export class ChooseOptionBtn {

    initchooseoptionbtn() {
        chooseoptionbtn.addEventListener('click', function (e) {
            e.preventDefault();        
            if (dropdown.style.display == "none"){
                dropdown.style.display = "block";
            }
            else{
                dropdown.style.display = "none";  
            }
        });

        window.addEventListener('mouseup',function(e){
            if(e.target != dropdown && e.target != chooseoptionbtn){
                dropdown.style.display = 'none';
            }
        });  
    }
}