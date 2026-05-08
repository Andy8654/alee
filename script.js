const stars = document.querySelectorAll(".star");

const message = document.getElementById("message");

const box = document.getElementById("box");


function startJourney(){

    document.getElementById("intro").style.display = "none";

    stars.forEach((star,index)=>{

        setTimeout(()=>{

            star.classList.add("show");

        }, index * 300);

    });

}


stars.forEach(star=>{

    star.addEventListener("click", ()=>{

        box.innerHTML = `
            ${star.dataset.msg}

            <div class="close" onclick="closeMsg()">
                Cerrar ✨
            </div>
        `;

        message.style.display = "flex";

    });

});


function closeMsg(){

    message.style.display = "none";

}