class PomodoroTimer {
   constructor() {
      this.states = ['play', 'pause']
      this.stateIndex = 1
      this.count = 25
      // dom
      this.$playBtn = document.querySelector('.btn__pomodoro')
      this.$btnReload = document.querySelector('.btn__reload')
      this.$main = document.querySelector('main')
      this.$wrapper = document.querySelector('.container')
      this.$counter = document.querySelector('.counter__content')
      this.$minutes = document.querySelector('.minutes')
      this.$seconds = document.querySelector('.seconds')
      this.$btnContainer = document.querySelector('.btn__container')
   }

   getState() {
      return this.states[this.stateIndex % 2]
   }

   changeDomState(state) {
      this.$wrapper.dataset.state = state
      const playIcon = 'fa-solid fa-play'
      const pauseIcon = 'fa-solid fa-pause'

      switch (this.$wrapper.dataset.state) {
         case 'init':
            this.$playBtn.querySelector('i').classList.value = playIcon
            break
         case 'play':
            this.$playBtn.querySelector('i').classList.value = pauseIcon
            break
         case 'pause':
            this.$playBtn.querySelector('i').classList.value = playIcon
            break
      }
   }

   handlePlayPause(e) {
      e.preventDefault()
      this.stateIndex++
      const state = this.getState()
      this.changeDomState(state)
      this.handleTimer()
      this.$seconds.textContent = this.count
   }

   handleReset(e) {
      e.preventDefault()
      clearTimeout(this.play)
      const state = 'init'
      this.changeDomState(state)
      this.count = 25
      this.$seconds.textContent = this.count
   }

   handleTimer() {
      if (this.$wrapper.dataset.state === 'pause' || this.count < 0) return clearTimeout(this.play)
      setTimeout(() => this.play(), 1000)
   }

   play() {
      console.log(this.count)
      this.count--
      this.handleTimer()
      this.$seconds.textContent = this.count
   }

   init() {
      this.changeDomState('init')
      this.$playBtn.addEventListener('click', e => this.handlePlayPause(e))
      this.$btnReload.addEventListener('click', e => this.handleReset(e))
   }
}

const timer = new PomodoroTimer()
timer.init()
