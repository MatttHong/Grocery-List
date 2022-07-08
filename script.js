
//create tags
const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#input")

//create listener pattern
form.addEventListener("submit", val => {
  val.preventDefault()

  //create update sequence
  const item = document.createElement('ul')
  const li = document.createElement('li')
  li.innerText = input.value
  item.classList.add('list-item')
  //add item
  item.appendChild(li)
  list.appendChild(item)

  //clear input
  input.value = ""

  li.addEventListener('click', () => {
          list.removeChild(item)
  })
})
