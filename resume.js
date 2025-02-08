// Event listener for form submission
document.getElementById('resume-form').addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    event.preventDefault();
    // Get values from input fields and check if elements exist
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
    var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
    var about = ((_d = document.getElementById('about')) === null || _d === void 0 ? void 0 : _d.value) || '';
    var school = ((_e = document.getElementById('school')) === null || _e === void 0 ? void 0 : _e.value) || '';
    var degree = ((_f = document.getElementById('degree')) === null || _f === void 0 ? void 0 : _f.value) || '';
    var experience = ((_g = document.getElementById('experience')) === null || _g === void 0 ? void 0 : _g.value) || '';
    var skills = ((_h = document.getElementById('skills')) === null || _h === void 0 ? void 0 : _h.value) || '';
    var interests = ((_j = document.getElementById('interests')) === null || _j === void 0 ? void 0 : _j.value) || '';
    var address = ((_k = document.getElementById('address')) === null || _k === void 0 ? void 0 : _k.value) || '';
    var photoFile = (_m = (_l = document.getElementById('photo')) === null || _l === void 0 ? void 0 : _l.files) === null || _m === void 0 ? void 0 : _m[0];
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
            var reader = new FileReader();
            reader.onload = function (event) {
                var result = event.target.result;
                localStorage.setItem('photo', result);
                document.getElementById('profile-pic-output').src = result;
            };
            reader.readAsDataURL(photoFile);
        }
        else {
            // Clear photo output if no photo is uploaded
            localStorage.removeItem('photo');
            document.getElementById('profile-pic-output').src = '';
        }
        // Call the displayData function to show the input data
        displayData();
    }
    catch (error) {
        console.error('Error saving data to localStorage', error);
    }
});
// Function to display data from localStorage
function displayData() {
    var _a, _b;
    try {
        document.getElementById('name-output').innerText = "Name: ".concat(localStorage.getItem('name') || '');
        document.getElementById('email-output').innerText = "Email: ".concat(localStorage.getItem('email') || '');
        document.getElementById('phone-output').innerText = "Phone: ".concat(localStorage.getItem('phone') || '');
        document.getElementById('address-output').innerText = "Address: ".concat(localStorage.getItem('address') || '');
        document.getElementById('about-output').innerText = localStorage.getItem('about') || '';
        document.getElementById('school-output').innerText = "School: ".concat(localStorage.getItem('school') || '');
        document.getElementById('degree-output').innerText = "Degree: ".concat(localStorage.getItem('degree') || '');
        document.getElementById('experience-output').innerText = localStorage.getItem('experience') || '';
        document.getElementById('skills-output').innerHTML = ((_a = localStorage.getItem('skills')) === null || _a === void 0 ? void 0 : _a.split('\n').map(function (skill) { return "<span class=\"skill\">".concat(skill, "</span>"); }).join('')) || '';
        document.getElementById('interests-output').innerHTML = ((_b = localStorage.getItem('interests')) === null || _b === void 0 ? void 0 : _b.split('\n').map(function (interest) { return "<span class=\"interest\">".concat(interest, "</span>"); }).join('')) || '';
        var photo = localStorage.getItem('photo');
        if (photo) {
            document.getElementById('profile-pic-output').src = photo;
        }
    }
    catch (error) {
        console.error('Error displaying data from localStorage', error);
    }
}
// Load data from localStorage when page loads
window.onload = function () {
    displayData();
};
