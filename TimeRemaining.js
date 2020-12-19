function timeManager(time, idtimer, cseconds, cminutes, chours) {
   
    // TimeRemaining Manager by TheStrikeM
    // Github, Instagram, Telegram - @thestrikem

    // Get time remaining, return seconds, minutes, hours and total
    function getRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/1000/60/60) % 60);

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    }

    // Set time remaining to element by id and elements by class name
    function setRemaining(id, sec, min, h, endtime) {
        let timer = document.getElementById(id),
            seconds = timer.querySelector(sec),
            minutes = timer.querySelector(min),
            hours = timer.querySelector(h),
            interval = setInterval(updateRemaining, 1000);
        
        function fixed(item) {
            if (item <= 9) {
                return "0" + item;
            } else { return item; }
        }

        // Update info every second
        function updateRemaining() {
            let i = getRemaining(endtime);

            seconds.textContent = fixed(i.seconds);
            minutes.textContent = fixed(i.minutes);
            hours.textContent = fixed(i.hours);

            if (i.total == 0) {
            	clearInterval(interval);
                seconds.textContent = "00";
                minutes.textContent = "00";
                hours.textContent = "00";
            }
        }
    }

    // Use this function
    setRemaining(idtimer, cseconds, cminutes, chours, time);

}