// Event listener for form submission
document.getElementById('resume-form')!.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    // Get values from input fields and check if elements exist
    const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
    const about = (document.getElementById('about') as HTMLTextAreaElement)?.value || '';
    const school = (document.getElementById('school') as HTMLInputElement)?.value || '';
    const degree = (document.getElementById('degree') as HTMLInputElement)?.value || '';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || '';
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value || '';
    const interests = (document.getElementById('interests') as HTMLTextAreaElement)?.value || '';
    const address = (document.getElementById('address') as HTMLInputElement)?.value || '';
    const photoFile = (document.getElementById('photo') as HTMLInputElement)?.files?.[0];

    // Save data to localStorage
    try {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('about', about);
        localStorage.setItem('school', school);
        localStorage.setItem('degree', degree);
        localStorage.setItem('experience', experience);
        localStorage.setItem('skills', skills);
        localStorage.setItem('interests', interests);
        localStorage.setItem('address', address);

        if (photoFile) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const result = event.target!.result as string;
                localStorage.setItem('photo', result);
                (document.getElementById('profile-pic-output') as HTMLImageElement).src = result;
            };
            reader.readAsDataURL(photoFile);
        } else {
            // Clear photo output if no photo is uploaded
            localStorage.removeItem('photo');
            (document.getElementById('profile-pic-output') as HTMLImageElement).src = '';
        }

        // Call the displayData function to show the input data
        displayData();
    } catch (error) {
        console.error('Error saving data to localStorage', error);
    }
});

// Function to display data from localStorage
function displayData() {
    try {
        (document.getElementById('name-output') as HTMLElement).innerText = `Name: ${localStorage.getItem('name') || ''}`;
        (document.getElementById('email-output') as HTMLElement).innerText = `Email: ${localStorage.getItem('email') || ''}`;
        (document.getElementById('phone-output') as HTMLElement).innerText = `Phone: ${localStorage.getItem('phone') || ''}`;
        (document.getElementById('address-output') as HTMLElement).innerText = `Address: ${localStorage.getItem('address') || ''}`;
        (document.getElementById('about-output') as HTMLElement).innerText = localStorage.getItem('about') || '';
        (document.getElementById('school-output') as HTMLElement).innerText = `School: ${localStorage.getItem('school') || ''}`;
        (document.getElementById('degree-output') as HTMLElement).innerText = `Degree: ${localStorage.getItem('degree') || ''}`;
        (document.getElementById('experience-output') as HTMLElement).innerText = localStorage.getItem('experience') || '';
        (document.getElementById('skills-output') as HTMLElement).innerHTML = localStorage.getItem('skills')?.split('\n').map(skill => `<span class="skill">${skill}</span>`).join('') || '';
        (document.getElementById('interests-output') as HTMLElement).innerHTML = localStorage.getItem('interests')?.split('\n').map(interest => `<span class="interest">${interest}</span>`).join('') || '';

        const photo = localStorage.getItem('photo');
        if (photo) {
            (document.getElementById('profile-pic-output') as HTMLImageElement).src = photo;
        }
    } catch (error) {
        console.error('Error displaying data from localStorage', error);
    }
}

// Load data from localStorage when page loads
window.onload = function() {
    displayData();
};
