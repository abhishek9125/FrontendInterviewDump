

function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
}

class Calendar {

    constructor(events) {
        this.events = events.map((event, index) => ({
            ...event,
            id: index,
            startMinutes: timeToMinutes(event.startTime),
            endMinutes: timeToMinutes(event.endTime)
        })).sort((a, b) => {
            if(a.startMinutes === b.startMinutes) {
                return b.endMinutes - a.endMinutes
            } else {
                return a.startMinutes - b.startMinutes
            }
        });
    }

    createHeader() {
        const header = document.createElement('div');
        header.className = 'header';
        header.innerHTML = '<h1>Mock Sessions</h1>';
        return header;
    }

    createSubheader() {
        const subheader = document.createElement('div');
        subheader.className = 'subheader';
        subheader.innerHTML = '<ul><li>Conflicting Meetings</li></ul>';
        return subheader;
    }

    findOverlappingEvents(event) {
        return this.events.filter(e => e.id !== event.id && !(e.endMinutes <= event.startMinutes || e.startMinutes >= event.endMinutes))
    }

    calculateEventPosition(event, overlappingEvents) {
        
        const containingEvents = overlappingEvents.filter(e => e.startMinutes <= event.startMinutes && e.endMinutes >= event.endMinutes);
        const containedEvents = overlappingEvents.filter(e => e.startMinutes >= event.startMinutes && e.endMinutes <= event.endMinutes);
        
        if (containingEvents.length > 0) return containingEvents.length;
        if (containedEvents.length > 0) return 0;

        return overlappingEvents.filter(e => e.startMinutes <= event.startMinutes).length
    }

    render() {
        const wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = '';

        wrapper.appendChild(this.createHeader());
        wrapper.appendChild(this.createSubheader());

        const calendar = document.createElement('div');
        calendar.className = 'calendar';
        
        const timeline = document.createElement('div');
        timeline.className = 'timeline';

        for(let hour = 1; hour <= 24; hour++) {

            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';

            const timeLabel = document.createElement('div');
            timeLabel.className = 'time-label';

            const displayHour = hour % 12 || 12;
            const period = hour < 12 ? 'AM' : 'PM';
            
            timeLabel.textContent = `${displayHour}:00 ${period}`;

            timeSlot.appendChild(timeLabel);
            timeline.appendChild(timeSlot);
        }

        const eventsContainer = document.createElement('div');
        eventsContainer.className = 'events-container';
        timeline.appendChild(eventsContainer);

        const maxOverlap = new Map();
        
        this.events.forEach(event => {
            const overlapping = this.findOverlappingEvents(event);
            maxOverlap.set(event.id, overlapping.length + 1);
        });

        this.events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.className = 'event';

            const overlapping = this.findOverlappingEvents(event);
            const position = this.calculateEventPosition(event, overlapping);
            const totalOverlap = maxOverlap.get(event.id);

            const baseWidth = 200;
            const width = totalOverlap > 0 ? baseWidth / totalOverlap : baseWidth;

            const top = (event.startMinutes / 60) * 80;
            const height = ((event.endMinutes - event.startMinutes) / 60) * 80;

            Object.assign(eventElement.style, {
                top: `${top}px`,
                height: `${height}px`,
                backgroundColor: event.color,
                width: `${width}px`,
                right: `${position * width}px`,
                zIndex: totalOverlap - position
            });

            const startTime = event.startTime;
            const endTime = event.endTime;

            eventElement.innerHTML = `
                <div class="event-title">${event.title}</div>
                <div class="event-time">
                    ${startTime} - ${endTime}
                </div>
            `;

            eventsContainer.appendChild(eventElement);
        })

        calendar.appendChild(timeline);
        wrapper.appendChild(calendar);
    }
};


const events = [
    { startTime: "00:00", endTime: "01:30", color: "#f6be23", title: "#TeamDevkode" },
    { startTime: "3:30", endTime: "7:30", color: "#f6501e", title: "#TeamDevkode" },
    { startTime: "4:30", endTime: "8:30", color: "#f6501e", title: "#TeamDevkode" },
    { startTime: "6:30", endTime: "9:00", color: "#f6501e", title: "Demo" },
    { startTime: "11:00", endTime: "13:30", color: "#029be5", title: "#TeamDevkode" },
    { startTime: "11:00", endTime: "13:30", color: "#029be5", title: "#TeamDevkode" },
    { startTime: "12:00", endTime: "14:30", color: "#029be5", title: "#TeamDevkode" },
    { startTime: "9:30", endTime: "10:30", color: "#029be5", title: "#TeamDevkode" },
    { startTime: "16:00", endTime: "17:00", color: "#029be5", title: "#TeamDevkode" },
    { startTime: "15:00", endTime: "17:00", color: "#029be5", title: "#TeamDevkode" },
    { startTime: "18:00", endTime: "19:00", color: "#f6501e", title: "#TeamDevkode" },
    { startTime: "20:30", endTime: "22:30", color: "#029be5", title: "#TeamDevkode" },
];

const calendar = new Calendar(events);
calendar.render();