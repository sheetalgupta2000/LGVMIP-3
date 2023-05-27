let container = document.querySelector('.container .right'),
    NameInputData = document.querySelector('.Name'),
    ContactInputData = document.querySelector('.Contact'),
    EmailInputData = document.querySelector('.Email')

let btn = document.querySelector('.enroll')
btn.addEventListener('click', () => {

    const gender = document.querySelectorAll('input[name="gender"]:checked')
    const Gendervalue = []
    gender.forEach((radio) => {
        Gendervalue.push(radio.value)
    })

    const skills = document.querySelectorAll('input[name="skills"]:checked')
    const Skillvalues = []
    skills.forEach((checkbox) => {
        Skillvalues.push(checkbox.value)
    })

    let content = document.createElement('div')
    content.classList.add('row', 'bg-light', 'p-2', 'my-3')
    content.innerHTML = `<div class="col text-start">
    <h2>${NameInputData.value.toUpperCase()}</h2>
    <h6>${Gendervalue}</h5>
      <h6>${EmailInputData.value}</h6>
      <h6>${ContactInputData.value}</h6>
      <h6>SKILL SET : ${Skillvalues.join(' , ').toUpperCase()}</h6>
  </div>
  <div class="col text-end mx-4 my-4"><img class="img-fluid rounded-circle"
      src="https://source.unsplash.com/90x80/?${Gendervalue}" alt="">
  </div>`

    container.appendChild(content)
})
