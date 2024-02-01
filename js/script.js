function validateForm() {
    const name = document.forms["message-form"]["first-last-name"].value;
    const email = document.forms["message-form"]["email-adress"].value;
    const interest = document.forms["message-form"]["field"].value;

    if (name == "" || email == "" || interest == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    return false;
}



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } 
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}

const button = document.getElementById("button");
button.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("show")
}) 