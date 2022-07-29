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
   new Project(1, 'OhMyFood', 'https://maxiim3.github.io/ohmyfood'),
   new Project(2, 'Sestini-Pizza', 'http://sestini-pizza.fr'),
   new Project(3, 'portfolio', 'https://maxii.me'),
]

const links = document.querySelector('#links')

projects.forEach(project => {
   const list = document.createElement('li')
   const link = document.createElement('a')
   link.innerText = project._label.toUpperCase()
   link.href = project._url
   list.appendChild(link)
   links.appendChild(list)
})
