const ham = document.querySelector(`.ham`)
ham.addEventListener(`click`, (e)=> {
   document.querySelector(`.navigation`).classList.add(`hidden`)
document.querySelector(`.x`).classList.add(`hid`)

    })
    document.querySelector(`.x`).addEventListener(`click`, ()=> {
        document.querySelector(`.navigation`).classList.remove(`hidden`)
        document.querySelector(`.x`).classList.remove(`hid`)
    })
console.log(ham)