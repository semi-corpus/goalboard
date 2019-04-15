export function blocdotsnuminput() {
    document.querySelector('.input--duration').addEventListener('keypress', preventNonNumbersInInput);
    function preventNonNumbersInInput(event) {
        let characters = String.fromCharCode(event.which);
        if (!(/[0-9]/.test(characters))) {
            event.preventDefault();
        }
    }
}