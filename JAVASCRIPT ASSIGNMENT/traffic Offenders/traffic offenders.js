document.addEventListener('DOMContentLoaded', () => {
    const offenderTable = document.getElementById('offenderTable');
    const offenderBody = document.getElementById('offenderBody');
    const searchBar = document.getElementById('searchBar');
    const searchBtn = document.getElementById('searchBtn');
    const offenderForm = document.getElementById('offenderForm');
    const offenderId = document.getElementById('offenderId');
    const offenderName = document.getElementById('offenderName');
    const offenderOffense = document.getElementById('offenderOffense');

    let offenders = [
        { id: 1, name: 'John Doe', offense: 'Speeding' },
        { id: 2, name: 'Jane Smith', offense: 'Running a red light' },
        { id: 3, name: 'will Smith', offense: 'Speeding' },
        { id: 4, name: 'Kelvin Cart', offense: 'Running a red light' }
    ];

    function renderTable() {
        offenderBody.innerHTML = '';
        offenders.forEach(offender => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${offender.id}</td>
                <td>${offender.name}</td>
                <td>${offender.offense}</td>
                <td>
                    <button class="editBtn" data-id="${offender.id}">Edit</button>
                    <button class="deleteBtn" data-id="${offender.id}">Delete</button>
                </td>
            `;
            offenderBody.appendChild(tr);
        });
    }

    function updateOffender() {
        const id = parseInt(offenderId.value, 10);
        const name = offenderName.value;
        const offense = offenderOffense.value;
        const offender = offenders.find(off => off.id === id);
        if (offender) {
            offender.name = name;
            offender.offense = offense;
        }
        renderTable();
        offenderForm.reset();
    }

    function deleteOffender(id) {
        offenders = offenders.filter(off => off.id !== id);
        renderTable();
    }

    function searchOffender() {
        const query = searchBar.value.toLowerCase();
        const filteredOffenders = offenders.filter(off => off.name.toLowerCase().includes(query));
        offenderBody.innerHTML = '';
        filteredOffenders.forEach(offender => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${offender.id}</td>
                <td>${offender.name}</td>
                <td>${offender.offense}</td>
                <td>
                    <button class="editBtn" data-id="${offender.id}">Edit</button>
                    <button class="deleteBtn" data-id="${offender.id}">Delete</button>
                </td>
            `;
            offenderBody.appendChild(tr);
        });
    }

    offenderBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('editBtn')) {
            const id = parseInt(e.target.getAttribute('data-id'), 10);
            const offender = offenders.find(off => off.id === id);
            if (offender) {
                offenderId.value = offender.id;
                offenderName.value = offender.name;
                offenderOffense.value = offender.offense;
            }
        } else if (e.target.classList.contains('deleteBtn')) {
            const id = parseInt(e.target.getAttribute('data-id'), 10);
            deleteOffender(id);
        }
    });

    offenderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        updateOffender();
    });

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchOffender();
    });

    renderTable();
});
