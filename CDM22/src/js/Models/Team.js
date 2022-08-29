class Team {
   constructor(name, xp, flag, id) {
      this._name = name;
      this._xp = xp;
      this._flag = flag;
      this._points = 0
      this.id = id
   }

   set points(value) {
      this._points = value;
   }

   get points() {
      return this._points;
   }

   get flag() {
      return this._flag;
   }

   get name() {
      return this._name;
   }


   get xp() {
      return this._xp;
   }

   set xp(value) {
      if (value >= 100) this._xp = 100
      else if (value <= 0) this._xp = 0
      else this._xp = value;

   }
}