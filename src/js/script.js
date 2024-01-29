const adviceUpdate = document.querySelector(".advice-update")
const adviceId = document.querySelector(".advice-id")
const advice = document.querySelector(".advice")

async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice")
    const adviceContent = await response.json()
    const adviceId = `Advice #${adviceContent.slip.id}`;
    const adviceText = `"${adviceContent.slip.advice}"`;
    console.log(adviceContent)
    console.log(adviceId)
    console.log(adviceText)

    adviceId.innerHTML = adviceId;
    advice.innerHTML = adviceText;
}

adviceUpdate.addEventListener("click", getAdvice);

getAdvice()
