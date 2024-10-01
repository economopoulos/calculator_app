const btnsNodes = document.querySelectorAll('.btn')
const btns = [...btnsNodes]
const input = document.querySelector('.input')

input.innerHTML = ""

btns.map(btn => {
  btn.addEventListener('click', (e)=>{
    const operation = e.target.innerHTML
    switch(operation){
      case "del":
        input.innerHTML = input.innerHTML.slice(0, -1)
        break
      case "reset":
        input.innerHTML = ""
        break
      case "=":
        let result =  eval(input.innerHTML.replace(/x/g, "*"))
        input.innerHTML =  result
      default:
        input.innerHTML += e.target.innerHTML.replace("=","")
        break
    }
  })
})