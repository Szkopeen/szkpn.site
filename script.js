
function showSection(section) {

    const sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        sec.classList.remove('show');  
    });

  
    setTimeout(() => {
        document.getElementById(section).classList.add('show');  
    }, 400); 
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('strony');
});
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    
    const icon = this;
});
