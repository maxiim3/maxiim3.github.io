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

class Api {
   url

   constructor(url) {
      this.url = url
   }

   async get() {
      try {
         const api = await fetch(this.url)
         const promise = await api.json()
         return await promise
      } catch (e) {
         throw new Error('Cannot read data from api...')
      }
   }
}

class App {
   constructor() {
      this.links = document.querySelector('#links')
      this.api = new Api('https://maxiim3.github.io/sites.json')
   }

   async getData() {
      return await this.api.get()
   }

   getSites(data) {
      const projects = []
      data.map(site => {
         projects.push(new Project(site.id, site.name, site.url))
      })
      return projects
   }

   async renderSites(sites) {
      sites.forEach(project => {
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
         this.links.appendChild(list)
      })
   }

   keyBoardNavigation() {
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
   }

   async init() {
      const data = await this.getData()
      const projects = this.getSites(data)
      await this.renderSites(projects)
      this.keyBoardNavigation()
   }
}

const app = new App()
app.init()
