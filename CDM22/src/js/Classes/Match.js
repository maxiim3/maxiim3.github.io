class Match {
   team1
   team2

   constructor(team1, team2) {
      this.team1 = {
         props: team1,
         score: 0
      };
      this.team2 = {
         props: team2,
         score: 0
      };
   }

   updateScore(team, n) {
      const getScore = team.score
      return team.score = getScore + n
   }

   calculateScore(team) {
      return Math.floor((Math.random() * 3) + 1 * team.props.xp / 100)
   }

   updateTeam(resT1, resT2) {
      const balance = (Math.abs(resT1 - resT2))
      if (resT1 > resT2) {
         this.team1.props.xp += balance
         this.team2.props.xp -= balance
      }
      else if (resT1 < resT2) {
         this.team2.props.xp += balance
         this.team1.props.xp -= balance
      }
   }

   round(scoreTeam1, scoreTeam2) {
      scoreTeam1 += this.calculateScore(this.team1)
      scoreTeam2 += this.calculateScore(this.team2)

      return {scoreTeam1, scoreTeam2}
   }

   getWinner(eliminationDirecte) {

      let scoreTeam1Start = 0
      let scoreTeam2Start = 0

      const res1 = this.round(scoreTeam1Start, scoreTeam2Start)
      this.updateTeam(res1.scoreTeam1, res1.scoreTeam2)

      const res2 = this.round(scoreTeam1Start, scoreTeam2Start)
      this.updateTeam(res2.scoreTeam1, res2.scoreTeam2)

      const team1FinalScore = Math.ceil((res1.scoreTeam1 + res2.scoreTeam1) / 2)
      const team2FinalScore = Math.ceil((res1.scoreTeam2 + res2.scoreTeam2) / 2)

      this.updateScore(this.team1, team1FinalScore)
      this.updateScore(this.team2, team2FinalScore)


      // console.log(`\t ${this.team1.props.name} :  ${this.team1.score} - ${this.team2.score} : ${this.team2.props.name}`)
      let isWinner = (Math.abs(team1FinalScore - team2FinalScore))

      if (isWinner === 0) {
         // console.log('Match Nul ...')
         return eliminationDirecte ? this.getWinner(true) : 0

      }
      else if (team1FinalScore > team2FinalScore) {
         // console.log(`Winner is ${this.team1.props.name} ${this.team1.props.flag}`);
         return this.team1.props
      }
      else {
         // console.log(`Winner is ${this.team2.props.name} ${this.team2.props.flag}`)
         return this.team2.props
      }
   }
}