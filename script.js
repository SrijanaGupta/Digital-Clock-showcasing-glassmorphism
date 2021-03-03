function clock(){
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minute');
    let seconds = document.getElementById('second');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM';

    //converting 24hours to 12hour clock to aim AM/PM
    if(h>12){
        h= h-12;
        var am = 'PM';
    }

    //adding 0 in the beginning of the number in case of single digit
    h = (h<10) ? '0'+h : h;
    m = (m<10) ? '0'+m : m;
    s = (s<10) ? '0'+s : s;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}

var interval = setInterval(clock,1000);