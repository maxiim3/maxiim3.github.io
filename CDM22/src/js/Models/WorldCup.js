class WorldCup {
   groups = []
   roundOf16 = []
   QuarterFinals = [[], [], [], []]
   SemiFinals = [[], []]
   Final = []
   teams = {}

   constructor(teams) {
      this.teams = teams
   }

   mapGroups() {
      return {
         A: [
            this.teams['qatar'],
            this.teams['ecuador'],
            this.teams['senegal'],
            this.teams['netherlands'],
         ],
         B: [this.teams['england'], this.teams['iran'], this.teams['usa'], this.teams['wales']],
         C: [
            this.teams['argentina'],
            this.teams['saudi-arabia'],
            this.teams['mexico'],
            this.teams['poland'],
         ],
         D: [
            this.teams['france'],
            this.teams['australia'],
            this.teams['denmark'],
            this.teams['tunisia'],
         ],
         E: [
            this.teams['spain'],
            this.teams['costa-rica'],
            this.teams['germany'],
            this.teams['japan'],
         ],
         F: [
            this.teams['belgium'],
            this.teams['canada'],
            this.teams['morocco'],
            this.teams['croatia'],
         ],
         G: [
            this.teams['brazil'],
            this.teams['serbia'],
            this.teams['switzerland'],
            this.teams['cameroun'],
         ],
         H: [
            this.teams['portugal'],
            this.teams['ghana'],
            this.teams['uruguay'],
            this.teams['south-korea'],
         ],
      }
   }

   computeFinals(arr) {
      const winners = []
      const size = arr.length
      if (size === 2) {
         const [team1, team2] = [arr[0], arr[1]]
         const match = new Match(team1, team2)
         const winner = match.getWinner(true)
         console.log(`LE GRAND CHAMPION EST : ${winner.name.toUpperCase()}`)
      } else {
         for (let i = 0; i < size; i += 2) {
            const [team1, team2] = [arr[i], arr[i + 1]]
            const match = new Match(team1, team2)
            // simulate(10, team1, team2)
            // this.competition[n + 1].push(match.getWinner())
         }
      }
   }

   play() {
      // const rounds = this.competition.length
      // for (let i = 0; i < rounds; i++) {
      //     console.log(`\n\t===== Starting ${this.competition[i].length}th Finals`)
      //     this.computeFinals(i)
      // }
   }

   async emulateGroups(groups) {
      for (const group in groups) {
         let i = 0
         const teams = groups[group]
         const length = teams.length

         for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
               if (i !== j) {
                  // console.log(`\n${teams[i].name} vs ${teams[j].name}`)
                  const match = new Match(teams[i], teams[j])
                  const winner = match.getWinner(false)
                  if (!winner) {
                     teams[i].points += 1
                     teams[j].points += 1
                     // console.log("1 point pour " + teams[i].name + ' et '+ teams[2].name)
                     groups[group][i] = teams[i]
                     groups[group][j] = teams[j]
                     const { id: id1, xp: xp1, points: points1 } = groups[group][i]
                     const { id: id2, xp: xp2, points: points2 } = groups[group][j]
                     document.getElementById(`xp-${id1}`).textContent = xp1
                     document.getElementById(`points-${id1}`).textContent = points1
                     document.getElementById(`xp-${id2}`).textContent = xp2
                     document.getElementById(`points-${id2}`).textContent = points2
                  } else {
                     winner.points += 3
                     if (groups[group][i].id === winner.id) groups[group][i].points = winner.points
                     else if (groups[group][j].id === winner.id)
                        groups[group][j].points = winner.points
                     // console.log("3points pour " + winner.name)
                  }
                  // teams.sort((a, b) => b.points - a.points)
               }
               const $group = document.querySelector(`.group__${group}`)
               const $teamsRow = [...$group.querySelectorAll('tbody tr')]
               for (let i = 0; i < $teamsRow.length - 1; i++) {
                  const firstTeam = $teamsRow[i]
                  const secondTeam = $teamsRow[i + 1]

                  await this.updateDom($group, firstTeam, secondTeam)
                  // teams.splice(2)
               }
            }
         }
         const $group = document.querySelector(`.group__${group}`)
         const $teams = [...$group.querySelectorAll('tbody tr')]
         $teams[0].classList.add('winner')
         $teams[1].classList.add('winner')
         $teams[2].classList.add('looser')
         $teams[3].classList.add('looser')
         console.log($teams)
      }
   }

   async updateDom(wrapper, team1, team2) {
      const { innerText: xpFirst } = team1.querySelector('.xp')
      const { innerText: pointsFirst } = team1.querySelector('.points')

      const { innerText: xpSecond } = team2.querySelector('.xp')
      const { innerText: pointsSecond } = team2.querySelector('.points')
      if (pointsFirst < pointsSecond) {
         wrapper.querySelector('tbody').insertBefore(team2, team1)
      } else if (pointsFirst === pointsSecond) {
         if (xpFirst < xpSecond) {
            wrapper.querySelector('tbody').insertBefore(team2, team1)
         }
      }
   }

   async emulateRoundOf16() {
      const a1 = this.groups.A[0]
      const a2 = this.groups.A[1]
      const b1 = this.groups.B[0]
      const b2 = this.groups.B[1]
      const c1 = this.groups.C[0]
      const c2 = this.groups.C[1]
      const d1 = this.groups.D[0]
      const d2 = this.groups.D[1]
      const e1 = this.groups.E[0]
      const e2 = this.groups.E[1]
      const f1 = this.groups.F[0]
      const f2 = this.groups.F[1]
      const g1 = this.groups.G[0]
      const g2 = this.groups.G[1]
      const h1 = this.groups.H[0]
      const h2 = this.groups.H[1]
      // premier tableau
      this.roundOf16.push([a1, b2])
      this.roundOf16.push([c1, d2])
      this.roundOf16.push([e1, f2])
      this.roundOf16.push([g1, h2])
      // deuxieme tableau
      this.roundOf16.push([a2, b1])
      this.roundOf16.push([c2, d1])
      this.roundOf16.push([e2, f1])
      this.roundOf16.push([g2, h1])
      // console.log(this.roundOf16)
      console.log('\n\n\t============')
      console.log('\tDEBUT DES 8e')
      for (const n in (this, this.roundOf16)) {
         console.log('======================')
         const [team1, team2] = this.roundOf16[n]
         const match = new Match(team1, team2)
         let isWinner = match.getWinner(true)
         const round = Math.ceil(n / 2)
      }
   }

   async init() {}
}


const $w = document.querySelector('.wrapper')
const $counter = document.createElement('p')
let count = 30
$counter.textContent = count
$w.appendChild($counter)


