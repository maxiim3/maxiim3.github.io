const simulate = (count, team1, team2) => {
   const match = new Match(team1, team2)
   let i = 0
   const t1 = team1.name
   const t2 = team2.name
   let result = {}
   result[`${t1}`] = 0
   result[`${t2}`] = 0
   while (i < count) {
      const run = match.getWinner(false)
      if (run.props.name === team1.name) result[`${t1}`]++
      else if (run.props.name === team2.name) result[`${t2}`]++
      i++
   }
   console.log(result)
   console.log(team1)
   console.log(team2)
}

class Api {
   constructor() {
      this.src = 'src/teams.json'
   }

   async get() {
      return await fetch(this.src)
         .then(res => res.json())
         .then(data => data)
         .catch(e => e)
   }
}

class App {
   constructor() {
      this.teams = {}
      this.$main = document.getElementById('main')
      this.control = document.getElementById('control')
   }

   async fetchTeams() {
      const api = new Api()
      return await api.get()
   }

   setControl(type) {
      if (document.querySelector('button')) {
         this.control.removeChild(document.querySelector('button'))
      }
      const $btn = document.createElement('button')
      switch (type) {
         case 'poules':
            $btn.textContent = 'RUN'
            this.control.appendChild($btn)
            return $btn
         case 'next':
            $btn.textContent = 'NEXT'
            this.control.appendChild($btn)
            return $btn
         case 'huitieme':
            break
         case 'quart':
            break
         case 'demi':
            break
         case 'finale':
            break
      }
   }

   async teamsConstructor(teams) {
      for (const key in teams) {
         const { name, xp, flag } = teams[key]
         this.teams[name.toLowerCase()] = new Team(
            name,
            xp,
            flag,
            key.toLowerCase().replace(' ', '')
         )
      }
   }

   async scenario(wc, groups) {
      const runBtn = this.setControl('poules')

      runBtn.addEventListener('click', await poules)


      async function poules(e){
         e.preventDefault()
         await wc.emulateGroups(groups)
         runBtn.removeEventListener('click', await poules)
      }
         // const nextBtn = this.setControl('poules')
         // todo set 'SEE RESULT' in new modal
         // todo ensuite, 'Go to Eight's'
         // todo naviguer a limage dun carousel entre les 'pages'
         // todo le design est immonde 🤮
      // wc.emulateRoundOf16()
   }
   async init() {
      const teams = await this.fetchTeams()
      await this.teamsConstructor(teams)

      const wc = new WorldCup(this.teams)
      const groups = wc.mapGroups()

      const $tables = new Groups(groups)
      await $tables.renderTables()

      await this.scenario(wc, groups)


   }
}

const app = new App()
app.init().then(r => r)
