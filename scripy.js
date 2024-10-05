document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var popup = document.getElementById("popup");
    
    // Show the popup
    popup.style.display = "flex";
    
    // Get the <span> element that closes the modal
    var closeBtn = document.getElementById("closePopup");
    
    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }
    
    // Optional: Close the popup if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});


