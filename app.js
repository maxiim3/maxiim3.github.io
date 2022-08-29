class Project {
   _id
   _label
   _url

   constructor(id, label, url) {
      this._id = id
      this._label = label
      this._url = url
   }
}

const projects = [
   new Project(1, 'Booki', 'oc_projet_2_booki'),
   new Project(2, 'OhMyFood', 'oc_projet_3_ohmyfood'),
   new Project(3, 'GameOn', 'oc_projet_4_gameon/starterOnly'),
   new Project(4, 'FishEye', 'oc_projet_6_fisheye'),
   new Project(5, 'Pomodoro', 'pomodoro'),
   new Project(5, 'CDM2022', 'CDM2022'),
   new Project(6, 'Sestini-Pizza', 'http://sestini-pizza.fr'),
   new Project(7, 'portfolio', 'https://maxii.me'),
]

const links = document.querySelector('#links')

projects.forEach(project => {
   const list = document.createElement('li')
   const link = document.createElement('a')
   project._label.split('').forEach(l => {
      const letter = document.createElement('span')
      letter.className = 'letter'
      letter.innerText = l.toUpperCase()
      letter.addEventListener('mouseover', () => {
         letter.animate(
            [
               { transform: 'rotate(0deg)' },
               { transform: 'rotate(45deg)' },
               { transform: 'rotate(-45deg)' },
               { transform: 'rotate(35deg)' },
               { transform: 'rotate(-32deg)' },
               { transform: 'rotate(20deg)' },
               { transform: 'rotate(-15deg)' },
               { transform: 'rotate(0deg)' },
            ],
            1000
         )
      })
      link.appendChild(letter)
   })
   link.href = project._url
   link.className = 'navigation'
   list.appendChild(link)
   links.appendChild(list)
})

// Keyboard Arrow Up | Down Focus Navigation
const keyUp = document.querySelector('.keys__icon--up')
const keyDown = document.querySelector('.keys__icon--down')

document.addEventListener('keydown', k => {
   const links = [...document.querySelectorAll('.navigation')]
   let count = document.querySelector('#count')

   if (k.key === 'ArrowUp') {
      keyUp.dataset.keyPress = 'true'
      if (count.dataset.value === 'null') {
         count.dataset.value = '0'
      } else {
         count.dataset.value === '0' ? (count.dataset.value = '2') : count.dataset.value--
      }
   } else if (k.key === 'ArrowDown') {
      keyDown.dataset.keyPress = 'true'
      count.dataset.value < 2 ? count.dataset.value++ : (count.dataset.value = '0')
   }
   // links[count.dataset.value].focus()
})

document.addEventListener('keyup', k => {
   let delay = 150
   if (k.key === 'ArrowUp') {
      setTimeout(() => (keyUp.dataset.keyPress = 'false'), delay)
   } else if (k.key === 'ArrowDown') {
      setTimeout(() => (keyDown.dataset.keyPress = 'false'), delay)
   }
   clearTimeout()
})
