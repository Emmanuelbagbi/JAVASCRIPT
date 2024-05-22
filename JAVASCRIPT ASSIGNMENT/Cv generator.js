document.getElementById('cvForm').addEventListener('submit', generateCV);

function addEducation() {
    const educationFields = document.getElementById('educationFields');
    const newField = document.createElement('div');
    newField.classList.add('education');
    newField.innerHTML = `
        <label for="schoolName">School Name:</label>
        <input type="text" name="schoolName" required>
        <label for="degree">Degree:</label>
        <input type="text" name="degree" required>
        <label for="gradYear">Graduation Year:</label>
        <input type="number" name="gradYear" required>
    `;
    educationFields.appendChild(newField);
}

function addExperience() {
    const experienceFields = document.getElementById('experienceFields');
    const newField = document.createElement('div');
    newField.classList.add('experience');
    newField.innerHTML = `
        <label for="companyName">Company Name:</label>
        <input type="text" name="companyName" required>
        <label for="jobTitle">Job Title:</label>
        <input type="text" name="jobTitle" required>
        <label for="jobYears">Years:</label>
        <input type="number" name="jobYears" required>
        <label for="jobDesc">Description:</label>
        <textarea name="jobDesc" required></textarea>
    `;
    experienceFields.appendChild(newField);
}

function generateCV(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const educationFields = document.querySelectorAll('#educationFields .education');
    const experienceFields = document.querySelectorAll('#experienceFields .experience');
    const skills = document.getElementById('skills').value.split(',');

    let educationHTML = '';
    educationFields.forEach(field => {
        const schoolName = field.querySelector('[name="schoolName"]').value;
        const degree = field.querySelector('[name="degree"]').value;
        const gradYear = field.querySelector('[name="gradYear"]').value;
        educationHTML += `<li>${degree} from ${schoolName} (${gradYear})</li>`;
    });

    let experienceHTML = '';
    experienceFields.forEach(field => {
        const companyName = field.querySelector('[name="companyName"]').value;
        const jobTitle = field.querySelector('[name="jobTitle"]').value;
        const jobYears = field.querySelector('[name="jobYears"]').value;
        const jobDesc = field.querySelector('[name="jobDesc"]').value;
        experienceHTML += `<li><strong>${jobTitle}</strong> at ${companyName} (${jobYears} years): ${jobDesc}</li>`;
    });

    let skillsHTML = '<ul>';
    skills.forEach(skill => {
        skillsHTML += `<li>${skill.trim()}</li>`;
    });
    skillsHTML += '</ul>';

    const cvHTML = `
        <h2>${fullName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Education</h3>
        <ul>${educationHTML}</ul>
        <h3>Work Experience</h3>
        <ul>${experienceHTML}</ul>
        <h3>Skills</h3>
        ${skillsHTML}
    `;

    const cvPreview = document.getElementById('cvPreview');
    cvPreview.innerHTML = cvHTML;
    cvPreview.style.display = 'block';

    const downloadButton = document.getElementById('downloadButton');
    downloadButton.style.display = 'block';
}

function downloadCV() {
    const cvContent = document.getElementById('cvPreview').innerHTML;
    const cvWindow = window.open('', '', 'height=700,width=700');
    cvWindow.document.write('<html><head><title>My CV</title>');
    cvWindow.document.write('</head><body >');
    cvWindow.document.write(cvContent);
    cvWindow.document.write('</body></html>');
    cvWindow.document.close();
    cvWindow.print();
}
