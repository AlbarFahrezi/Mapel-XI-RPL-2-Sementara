document.addEventListener('DOMContentLoaded', function() {
    const jadwalData = {
        senin: [
            { time: '07.00 - 09.15', name: 'Ela Nurlela', title: 'S.Pd' },
            { time: '09.15 - 11.00', name: 'Retno Novia A.', title: 'S.Kom' },
            { time: '11.45 - 13.15', name: 'Ai Sa\'adatuddaroin', title: 'S.Pd' },
            { time: '13.15 - 15.30', name: 'Iin Solihin', title: 'M.Pd' }
        ],
        selasa: [
            { time: '07.00 - 09.15', name: 'Elis Waliah', title: 'S.Ag' },
            { time: '09.15 - 11.45', name: 'Keresna Bayu W.K.', title: 'S.Pd' },
            { time: '12.30 - 15.30', name: 'Taufik Dzikri P.', title: 'S.Pd' }
        ],
        rabu: [
            { time: '07.00 - 08.30', name: 'Dian Maelani', title: 'S.Pd' },
            { time: '08.30 - 10.00', name: 'Buyung Supriadi', title: 'S.S' },
            { time: '10.15 - 11.45', name: 'Dede Iskandar', title: 'S.T' },
            { time: '14.00 - 15.30', name: 'Ai Sa\'adatuddaroin', title: 'S.Pd' }
        ],
        kamis: [
            { time: '07.00 - 08.30', name: 'Septo Mayang Saputri', title: 'S.Pd' },
            { time: '08.30 - 10.00', name: 'Keresna Bayu K.', title: 'S.Pd' },
            { time: '10.15 - 11.45', name: 'Gelar Laksana C.', title: 'S.Pd' },
            { time: '12.30 - 15.30', name: 'Taufik Dzikri P.', title: 'S.Pd' }
        ],
        jumat: [
            { time: '07.45 - 10.45', name: 'Retno Novia A.', title: 'S.Kom' },
            { time: '10.45 - 13.30', name: 'Cahya Nurhaeni', title: 'S.Pd' },
            { time: '13.30 - 15.00', name: 'Lia Yuliasari', title: 'S.Pd' }
        ]
    };

    function loadSchedule() {
        for (const day in jadwalData) {
            const ulElement = document.getElementById(`${day}-schedule`);
            if (ulElement) {
                jadwalData[day].forEach(lesson => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <span class="time">${lesson.time}</span>
                        <span class="subject-teacher">${lesson.name}, <span class="teacher-name">${lesson.title}</span></span>
                    `;
                    li.addEventListener('click', function() {
                        const messages = [
                            `Gelombang ilmu datang dari ${lesson.name} di jam ${lesson.time}! Siap-siap menimba harta karun pengetahuan!`,
                            `Waktunya menyelam dalam materi bareng ${lesson.name} di jam ${lesson.time}! Jangan sampai karam ya!`,
                            `Alarm berbunyi! Saatnya petualangan bareng ${lesson.name}. Semoga otakmu tidak jadi ubur-ubur!`,
                            `Lautnya tenang, otak kita nge-GAS bareng ${lesson.name} di jam ${lesson.time}. Semangat!`,
                            `Ada pesan dari dasar laut: ${lesson.name} menunggumu! Jangan telat, nanti jadi fosil!`,
                            `Duhai para pelaut ilmu, ${lesson.name} akan memandu kita di samudera pelajaran. Jangan sampai tersesat!`
                        ];
                        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                        alert(randomMessage);
                    });
                    ulElement.appendChild(li);
                });
            }
        }
    }

    loadSchedule();
});