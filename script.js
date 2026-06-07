document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const welcomeModal = document.getElementById("welcomeModal");
    const errorModal = document.getElementById("errorModal");

    if(username === "cute" && password === "cute"){
        welcomeModal.style.display = "flex";
    } else {
        errorModal.style.display = "flex";
    }
});

/* ❌ CLOSE ERROR */
document.getElementById("closeError").addEventListener("click", function(){
    document.getElementById("errorModal").style.display = "none";
});

/* 🌸 CLOSE SUCCESS + REDIRECT */
document.getElementById("closeWelcome").addEventListener("click", function(){
    document.getElementById("welcomeModal").style.display = "none";

    // 💖 redirect after clicking OK
    window.location.href = "https://urlto.me/Confession01.ppt";
});