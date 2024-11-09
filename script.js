function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();

// Function to open popup
function openPopup(projectId) {
    document.getElementById(projectId).style.display = 'block';
}

// Function to close popup
function closePopup(projectId) {
    document.getElementById(projectId).style.display = 'none';
}

function toggleMoreInfo() {
    const moreInfo = document.getElementById('moreInfo');
    const seeMoreBtn = document.getElementById('seeMoreBtn');

    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        seeMoreBtn.textContent = 'See Less';
    } else {
        moreInfo.style.display = 'none';
        seeMoreBtn.textContent = 'See More';
    }
}

