document.addEventListener("DOMContentLoaded", function(event) {
    const wrapper = document.querySelector(".wrapper");
    const mode = document.querySelector(".mode");
    const card = document.querySelector(".card");
    mode.onclick = function(){
        wrapper.classList.toggle('dark');
        card.classList.toggle('dark-card');
        mode.classList.toggle('dark-mode');
        
        
    }
});

