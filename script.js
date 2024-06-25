let con = document.querySelectorAll(".con") 
let computer = document.querySelectorAll(".computer")
let triangle = document.querySelector(".triangle")
let user = document.querySelector(".user")
let house = document.querySelector(".house")
let winModal = document.querySelector(".win-modal")
let winner = document.querySelector(".winner")
let play = document.querySelector(".play")
let score = JSON.parse(localStorage.getItem("sc"))
let point = document.getElementById("point")
let rulebtn = document.querySelector(".btn-rule")
let ruleModal = document.querySelector(".rule-modal")
let ruleImg = document.querySelector(".rule-img")

if(score) {
    point.innerText = score
}

let count = 0


let random = Math.floor(Math.random() * 3)

con.forEach((element , index) => {
    element.addEventListener("click" , () => {

        user.style.opacity = "1"

        triangle.style.display = "none"
        con.forEach((item) => {
            item.style.display = "none"
        })
        element.style.display = "block"
        element.classList.add("show")

        setTimeout(() => {
            house.style.opacity = "1"
            setTimeout(() => {
                computer[random].classList.add("right")
                computer[random].style.display = "block"
            } , 1000)
        } , 500)

        setTimeout(() => {

            if(random == index) {
                winModal.style.display = "grid"
                winner.innerText = "Match Drawn";
            } else if(index == 0 && random == 2 || index == 1 && random == 0|| index == 2 && random == 1) {
                winModal.style.display = "grid"
                winner.innerText = "You Win";
                count = score
                count ++;
                point.innerText = count
                localStorage.setItem("sc" , JSON.stringify(count))
            } else {
                winModal.style.display = "grid"
                winner.innerText = "You Lose";
                // count = score
                // count --;
                // point.innerText = count
                // localStorage.setItem("sc" , JSON.stringify(count))
            }
        }, 1600);

    })
})

play.addEventListener("click" , () => {
    window.location.reload();
})

rulebtn.addEventListener("click" , () => {
    ruleModal.style.display = "flex"
    setTimeout(() => {
        ruleImg.style.transform = "translateY(0)"
    }, 400);
})

let close = document.querySelector(".close")
close.addEventListener("click" , () => {
    ruleImg.style.transform = "translateY(-200%)"
    setTimeout(() => {
        ruleModal.style.display = "none"
    }, 400);
})