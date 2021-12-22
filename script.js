let clockTime = document.getElementById('clockTime');

function Clock(e) {
    this.clockTime = e;
    this.isFullFormat = true;
    this.clockTime.addEventListener('click', () => this.switchFormat());
};

function AssemblyClock(e) {
    Clock.call(this, e);
    
    Clock.prototype.render = function () {
        let date = new Date();
        this.hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(); 
        this.minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();  
        this.seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

        this.clockTime.innerText = this.isFullFormat ? + this.hours + ":" + this.minutes + ":" + this.seconds : this.hours + ":" + this.minutes;
    };

    this.switchFormat = function() {
        this.isFullFormat = !this.isFullFormat;
    };
};

AssemblyClock.prototype = this.Clock.prototype;
let assembly = new AssemblyClock(clockTime);

setInterval(() => assembly.render(), 250);