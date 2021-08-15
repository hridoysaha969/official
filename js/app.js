$(document).ready(function() {
    $('.food-slider').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.nav-trigger').click(function() {
        $('.site-content-wrapper').toggleClass('scaled');
    })
});

/* ==== Counter ==== */   

let dayElement = document.getElementById('day');
let hourElement = document.getElementById('hour');
let minuteElement = document.getElementById('minute');
let secondElement = document.getElementById('second');

// Demo Target Date
// let demoTarget = new Date().getDate() + 10;
let demoTargetYear = new Date().getFullYear() + 1;
console.log(demoTargetYear)

// Demo Date & Time
const targetMonth = 'Jan';
const targetDate = '01';
const targetYear = demoTargetYear;
const targetHour = '00';
const targetMinute = '00';
const targetSecond = '00';


/* === Your Target Date & Time === */
var countDate = new Date(`${targetMonth} ${targetDate}, ${targetYear} ${targetHour}:${targetMinute}:${targetSecond}`).getTime();

/* === Count Down Function === */
function newYear() {
    let now = new Date().getTime();
        gap = countDate - now;

        // Convert into Miliseconds
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        // Convert into Actual Date & Time
        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / second);

        if (gap <= 0) {
            dayElement.innerText = '00';
            hourElement.innerText = '00';
            minuteElement.innerText = '00';
            secondElement.innerText = '00';
        } else {
            // To Show the unmbers With Zero
            d = (d < 10) ? '0' + d : d;
            h = (h < 10) ? '0' + h : h;
            m = (m < 10) ? '0' + m : m;
            s = (s < 10) ? '0' + s : s;

            // Final Output
            dayElement.innerText = d;
            hourElement.innerText = h;
            minuteElement.innerText = m;
            secondElement.innerText = s;
        }
}

setInterval(newYear, 1000)