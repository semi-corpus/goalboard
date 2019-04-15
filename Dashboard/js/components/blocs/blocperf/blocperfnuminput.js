export function blocperfnuminput(){
    document.querySelector('.input--value__goal').addEventListener('keypress', preventNonNumbersInInput);
    document.querySelector('.input--value__current').addEventListener('keypress', preventNonNumbersInInput);  
    function preventNonNumbersInInput(event) {
        let characters = String.fromCharCode(event.which);
        if (!(/[0-9]/.test(characters))) {
            event.preventDefault();
        }
    }
}