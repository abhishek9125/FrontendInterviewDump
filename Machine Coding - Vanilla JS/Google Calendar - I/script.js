document.addEventListener('DOMContentLoaded', function() {

    const calendar = document.querySelector('.calendar');

    function buildTimeSlots() {
        for(let i = 0; i < 13; i++) {
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.innerText = `${i}:00`;
            calendar.appendChild(timeSlot);
        }
    }

    function timeToMinutes(time) {
        const [hours, minutes] = time.split(':').map((item) => Number(item));
        return hours * 60 + minutes;
    }

    function renderEvents() {
        let events = EVENTS.sort((a,b) => timeToMinutes(a.start) - timeToMinutes(b.start));

        let lastEnd = 0;
        let overlapCount = 0;

        events.forEach((event) => {

            const eventElement = document.createElement('div');
            eventElement.className = 'event';
            eventElement.style.backgroundColor = event.color;

            let eventStartInMinutes = timeToMinutes(event.start);
            let eventEndInMinutes = timeToMinutes(event.end);

            eventElement.style.top = `${eventStartInMinutes}px`;
            eventElement.style.height = `${eventEndInMinutes - eventStartInMinutes}px`; 
            eventElement.innerText = event.title;

            if(eventStartInMinutes < lastEnd) {
                overlapCount++;
            } else {
                overlapCount = 1;
            }

            const offsetLeft = 60 + (overlapCount - 1) * 100;
            eventElement.style.left = `${offsetLeft}px`;
            calendar.appendChild(eventElement);

            lastEnd = Math.max(lastEnd, eventEndInMinutes);
        })
    }

    function initialiseCalendar() {
        buildTimeSlots();
        renderEvents();
    }

    initialiseCalendar();

})