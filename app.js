const btnsNodes = document.querySelectorAll(".btn")
const btns = [...btnsNodes]
const input = document.querySelector(".input")
const checkboxes = document.querySelectorAll(".checkbox")
const root_theme = document.querySelector(":root")
const id = document.getElementById('logo')
const themeText = document.querySelector('.small-txt')
const spanArray = Array.from(document.querySelector('.spans').children)

function applyThemeOne() {
  spanArray.forEach((tag) => {
    tag.style.color = "white"
  })
  themeText.style.color = "white"
  id.style.color = "white"
  root_theme.style.setProperty("--mainBackground", "hsl(222, 26%, 31%)")
  root_theme.style.setProperty("--veryDarkBlue", "hsl(223, 31%, 20%)")
  root_theme.style.setProperty("--screenBackground", "hsl(224, 36%, 15%)")
  // keys
  root_theme.style.setProperty("--blueKeyBackground", "hsl(225, 21%, 49%)")
  root_theme.style.setProperty(
    "--blueKeyBackgroundOpacity",
    "hsla(225, 21%, 49%,75%)"
  )
  root_theme.style.setProperty("--blueKeyShadow", "hsl(224, 28%, 35%)")
  root_theme.style.setProperty("--redKeyBackground", "hsl(6, 63%, 50%)")
  root_theme.style.setProperty(
    "--redKeyBackgroundOpacity",
    "hsla(6, 63%, 50%,90%)"
  )
  root_theme.style.setProperty("--redKeyShadow", "hsl(6, 70%, 34%)")
  root_theme.style.setProperty("--grayishKeyBackground", "hsl(30, 25%, 89%)")
  root_theme.style.setProperty("--grayishKeyShadow", "hsl(28, 16%, 65%)")
  // text
  root_theme.style.setProperty("--darkGrayishBlueText", "hsl(28, 16%, 65%)")
  root_theme.style.setProperty("--white", "hsl(0, 0%, 100%)")
}

function applyThemeTwo() {
  spanArray.forEach((tag) => {
    tag.style.color = "black"
  })
  themeText.style.color = "black"
  id.style.color = "black"
  root_theme.style.setProperty("--mainBackground", "hsl(0, 0%, 90%)")
  root_theme.style.setProperty("--veryDarkBlue", "hsl(0, 5%, 81%)")
  root_theme.style.setProperty("--screenBackground", "hsl(0, 0%, 93%)")
  // keys
  root_theme.style.setProperty("--blueKeyBackground", "hsl(185, 42%, 37%)")
  root_theme.style.setProperty(
    "--blueKeyBackgroundOpacity",
    "hsla(185, 42%, 37%,75%)"
  )
  root_theme.style.setProperty("--blueKeyShadow", "hsl(185, 58%, 25%)")
  root_theme.style.setProperty("--redKeyBackground", "hsl(25, 98%, 40%)")
  root_theme.style.setProperty(
    "--redKeyBackgroundOpacity",
    "hsla(25, 98%, 40%,90%)"
  )
  root_theme.style.setProperty("--redKeyShadow", "hsl(25, 99%, 27%)")
  root_theme.style.setProperty("--grayishKeyBackground", "hsl(45, 7%, 89%)")
  root_theme.style.setProperty("--grayishKeyShadow", "hsl(35, 11%, 61%)")
  // text
  root_theme.style.setProperty("--darkGrayishBlueText", "hsl(60, 10%, 19%)")
  root_theme.style.setProperty("--white", "hsl(0, 0%, 100%)")
}

function applyThemeThree() {
  spanArray.forEach((tag) => {
    tag.style.color = "white"
  })
  themeText.style.color = "white"
  id.style.color = "white"
  root_theme.style.setProperty("--mainBackground", "hsl(268, 75%, 9%)")
  root_theme.style.setProperty("--veryDarkBlue", "hsl(268, 71%, 12%)")
  root_theme.style.setProperty("--screenBackground", "hsl(268, 71%, 12%)")
  // keys
  root_theme.style.setProperty("--blueKeyBackground", "hsl(281, 89%, 26%)")
  root_theme.style.setProperty(
    "--blueKeyBackgroundOpacity",
    "hsla(281, 89%, 26%,75%)"
  )
  root_theme.style.setProperty("--blueKeyShadow", "hsl(285, 91%, 52%)")
  root_theme.style.setProperty("--redKeyBackground", "hsl(176, 100%, 44%)")
  root_theme.style.setProperty(
    "--redKeyBackgroundOpacity",
    "hsla(176, 100%, 44%,90%)"
  )
  root_theme.style.setProperty("--redKeyShadow", "hsl(177, 92%, 70%)")
  root_theme.style.setProperty("--grayishKeyBackground", "hsl(268, 47%, 21%)")
  root_theme.style.setProperty("--grayishKeyShadow", "hsl(290, 70%, 36%)")
  // text
  root_theme.style.setProperty("--darkGrayishBlueText", "hsl(52, 100%, 62%)")
  root_theme.style.setProperty("--white", "hsl(0, 0%, 100%)")
}

input.innerHTML = ""

btns.map((btn) => {
  btn.addEventListener("click", (e) => {
    const operation = e.target.innerHTML
    switch (operation) {
      case "del":
        input.innerHTML = input.innerHTML.slice(0, -1)
        break
      case "reset":
        input.innerHTML = ""
        break
      case "=":
        let result = eval(input.innerHTML.replace(/x/g, "*"))
        input.innerHTML = result
        break
      default:
        input.innerHTML += e.target.innerHTML.replace("=", "")
        break
    }
  })
})


checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkboxes.forEach(tag=>tag.classList.remove('active'))
    checkbox.classList.add('active')
    if (checkbox.id === "checkbox-1") {
      applyThemeOne()
    }
    if (checkbox.id === "checkbox-2") {
      applyThemeTwo()
    } else if (checkbox.id === "checkbox-3") {
      applyThemeThree()
    }
  })
})