class Groups {
   group

   constructor(group) {
      this.group = group
   }

   renderHeader() {
      return `
      <thead>
      <tr>
         <th>Team</th>
         <th>Flag</th>
         <th>XP</th>
         <th>Points</th>
      </tr>
      </thead>`
   }

   renderTeamData(data, label, id) {
      const $td = document.createElement('td')
      $td.textContent = data
      $td.id = `${label}-${id}`
      $td.classList.value = `${label}`
      return $td
   }

   renderTeamRow({ name, flag, xp, points, id }) {
      const $trow = document.createElement('tr')
      $trow.appendChild(this.renderTeamData(name, "name", id))
      $trow.appendChild(this.renderTeamData(flag, "flag", id))
      $trow.appendChild(this.renderTeamData(xp, "xp", id))
      $trow.appendChild(this.renderTeamData(points, "points", id))
      return $trow
   }

   renderGroup(group) {
      const $body = document.createElement('tbody')
      group.forEach(team => {
         $body.appendChild(this.renderTeamRow(team))
      })
      return $body
   }

   renderTables() {
      for (const groupKey in this.group) {
         const group = this.group[groupKey]

         const $table = document.createElement('table')
         $table.classList.value = `group group__${groupKey}`
         $table.innerHTML = this.renderHeader()
         $table.appendChild(this.renderGroup(group))

         const $groupName = document.createElement('h3')
         $groupName.textContent = `GROUPE ${groupKey}`

         const $wrapper = document.createElement('article')
         $wrapper.appendChild($groupName)
         $wrapper.appendChild($table)

         const $dom = document.getElementById('groups')
         $dom.appendChild($wrapper)
      }
   }
}
