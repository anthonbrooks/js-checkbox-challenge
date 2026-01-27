const checkboxes = document.querySelectorAll('input');

let lastChecked;

function handleCheck(e) {
    
    // Check if shift key is pressed and the box is unchecked
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // loop over every checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));