document.addEventListener('DOMContentLoaded', () => {
    const scheduleData = {
        'SENIN': [
            { guru: 'Taufik Dzikri P., S.Pd', waktu: '07.00-10.00', mapel: 'PRODUKTIF' },
            { guru: 'Gelar Laksana C., S.Pd', waktu: '10.15-11.45', mapel: 'PJOK' },
            { guru: 'Ai Sa\'adatuddaroin, S.Pd', waktu: '12.30-14.00', mapel: 'B.INGGRIS' },
            { guru: 'Lia Yuliasari, S.Pd', waktu: '14.00-15.30', mapel: 'PPKN' }
        ],
        'SELASA': [
            { guru: 'Elis Waliah, S.Ag', waktu: '07.00-09.15', mapel: 'AGAMA' },
            { guru: 'Ela Nurlela, S.Pd', waktu: '09.15-11.45', mapel: 'MTK' },
            { guru: 'Dede Iskandar, S.T', waktu: '12.30-15.30', mapel: 'PRODUKTIF' }
        ],
        'RABU': [
            { guru: 'Retno Novia A., S.Kom', waktu: '07.00-11.45', mapel: 'PRODUKTIF' },
            { guru: 'Septi Mayang S., S.Pd', waktu: '12.30-14.00', mapel: 'BK' },
            { guru: 'Ai Sa\'adatuddaroin', waktu: '14.00-15.30', mapel: 'B.INGGRIS' }
        ],
        'KAMIS': [
            { guru: 'Dian Maelani, S.Pd', waktu: '07.00-08.30', mapel: 'MPKK' },
            { guru: 'Taufik Dzikri P., S.Pd', waktu: '08.30-11.45', mapel: 'PRODUKTIF' },
            { guru: 'Cahya Nurhaeni, S.Pd', waktu: '12.30-14.00', mapel: 'SEJARAH' },
            { guru: 'Keresna Bayu W.K., S.Pd', waktu: '14.00-15.30', mapel: 'PKK/KWU' }
        ],
        'JUMAT': [
            { guru: 'Buyung Supriadi, S.S', waktu: '07.45-09.15', mapel: 'B.JEPANG' },
            { guru: 'Iin Solihin', waktu: '09.15-11.30', mapel: 'B.INDONESIA' },
            { guru: 'Keresna Bayu W.K., S.Pd', waktu: '12.45-15.00', mapel: 'KWU' }
        ]
    };

    const scheduleContainer = document.querySelector('.schedule-grid');

    for (const day in scheduleData) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerHTML = `<h2>${day}</h2>`;
        
        scheduleData[day].forEach(lesson => {
            const lessonDiv = document.createElement('div');
            lessonDiv.classList.add('lesson');
            lessonDiv.innerHTML = `
                <h3>${lesson.guru}</h3>
                <p class="time">${lesson.waktu}</p>
                <span class="subject-tag">${lesson.mapel}</span>
            `;
            dayDiv.appendChild(lessonDiv);
        });
        
        scheduleContainer.appendChild(dayDiv);
    }
});
