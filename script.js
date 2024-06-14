const calendar = document.getElementById('calendar');
const totalWeeks = 52 * 90; // 52 weeks * 90 years
const birthDate = new Date('2004-06-30');
const today = new Date();

// Calculate the number of weeks passed since the birth date
const passedWeeks = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 7));

// Create weeks
for (let i = 0; i < totalWeeks; i++) {
    const week = document.createElement('div');
    week.className = 'week';
    
    if (i < passedWeeks) {
        week.classList.add('passed');
    } else if (i === passedWeeks) {
        week.classList.add('current');
    }
    
    calendar.appendChild(week);
}
