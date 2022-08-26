window.onload = function() {
    document.getElementsByClassName('time')[0].innerHTML = "<span id='hours1'>0</span><span id='hours2'>0</span>:<span id='minutes1'>0</span><span id='minutes2'>0</span>:<span id='seconds1'>0</span><span id='seconds2'>0</span>:<span id='milliseconds1'>0</span><span id='millisconds2'>0</span>";
}
let flag = false;
let element_w = document.getElementsByClassName('stopwatch')[0];
let element_s = document.getElementsByClassName('stop')[0]
let moment;
let hours2_count = 0;
let hours1_count = 0;
let minutes2_count = 0;
let minutes1_count = 0;
let seconds2_count = 0;
let seconds1_count = 0;
let milliseconds2_count = 0;
let milliseconds1_count = 0;

function counter(number, time, id, type) {
    setInterval(() => {
        if (flag) {
            number++
            if (number == 10) {
                number = 0;
            }
            if (type === 6) {
                if (number == 6) {
                    number = 0;
                }
            }
            if (type === 2) {
                if (number == 3) {
                    number = 0;
                }
            }
            if (type === 4) {
                if (number == 5) {
                    number = 0;
                }
            }
            document.getElementById(id).innerHTML = number;
        } else {

        }
    }, time)
}
element_w.addEventListener('click', () => {
    flag = true;
    counter(milliseconds2_count, 10, 'millisconds2')
    counter(milliseconds1_count, 100, 'milliseconds1')
    counter(seconds2_count, 1000, 'seconds2')
    counter(seconds1_count, 10000, 'seconds1', 6)
    counter(minutes2_count, 60000, 'minutes2', )
    counter(minutes1_count, 1000000, 'minutes1', 6)
    counter(hours2_count, 6000000, 'hours2', 4)
    counter(hours1_count, 100000000, 'hours1', 2)
})
element_s.addEventListener('click', () => {
    flag = false;
    moment = document.getElementsByClassName('time')[0].textContent.replace(':', '')
    moment = moment.replace(':', '');
    moment = moment.replace(':', '');
    moment = moment.split('')
    hours2_count = parseInt(moment[0]);
    hours1_count = parseInt(moment[1]);
    minutes2_count = parseInt(moment[2]);
    minutes1_count = parseInt(moment[3]);
    seconds2_count = parseInt(moment[4]);
    seconds1_count = parseInt(moment[5]);
    milliseconds2_count = parseInt(moment[6]);
    milliseconds1_count = parseInt(moment[7]);
})