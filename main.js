let titleId = document.querySelector(".id-advice");
let paragraph = document.querySelector("p");
let dice = document.querySelector(".icon-dice");


async function apiAdvice() {
    let getData = await fetch("https://api.adviceslip.com/advice");
    let first = await getData.json();
    titleId.textContent = first.slip.id;
    paragraph.textContent = `"${first.slip.advice}"`
}
apiAdvice()


dice.onclick = function () {
    async function apiAdvice() {
        let getData = await fetch("https://api.adviceslip.com/advice");
        let first = await getData.json();
        titleId.textContent = first.slip.id;
        paragraph.textContent = `"${first.slip.advice}"`
    }
    apiAdvice()
}

