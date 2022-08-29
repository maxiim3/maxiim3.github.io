class PomodoroTimer {
   constructor() {
      this.states = ['play', 'pause']
      this.stateIndex = 1
      // dom
      this.$btn = document.querySelector('.btn__pomodoro')
      this.$btnReload = document.querySelector('.btn__reload')
      this.$main = document.querySelector('main')
      this.$wrapper = document.querySelector('.container')
      this.$counter = document.querySelector('.counter__content')
      this.$btnContainer = document.querySelector('.btn__container')
   }

   getState() {
      return this.states[this.stateIndex % 2]
   }

   changeState(state) {
      this.$wrapper.dataset.state = state
      const playIcon = 'fa-solid fa-play'
      const pauseIcon = 'fa-solid fa-pause'
      const timer = new Timer(this.$counter)

      switch (this.$wrapper.dataset.state) {
         case 'init':
            this.$btn.querySelector('i').classList.value = playIcon
            this.$counter.textContent = ''
            break
         case 'play':
            this.$btn.querySelector('i').classList.value = pauseIcon
            timer.isRunning = true
           // this.$counter.textContent = timer.run()
           this.renderCounter(timer)
            break
         case 'pause':
            this.$btn.querySelector('i').classList.value = playIcon
            timer.isRunning = false
            break
      }
   }

   renderCounter(timer){
     setInterval(()=>{
        this.$counter.textContent = timer.run()
     }, 1000)
   }

   handleBtn(e) {
      e.preventDefault()
      this.stateIndex++
      const state = this.getState()
      this.changeState(state)
      console.log(e)
   }

   init() {
      this.changeState('init')
      this.$btn.addEventListener('click', e => this.handleBtn(e))
      this.$btnReload.addEventListener('click', e => this.changeState('init'))
   }
}

class Timer {
   timeOutId

   isRunning

   constructor() {
      this.time = 25
      this.isRunning = false
   }

   run() {
      if (this.isRunning && this.time > 0) {
         this.time--
         // this.timeOutId = setTimeout(() => this.run(this.time), 1000)
         return this.time
      } else {
         // clearTimeout(this.timeOutId)
         return this.time
      }
   }

   pause() {
      this.isRunning = false
      return this.time
   }
}

const timer = new PomodoroTimer()
timer.init()
