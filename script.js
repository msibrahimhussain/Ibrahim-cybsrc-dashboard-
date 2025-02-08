// JavaScript code for handling dynamic dashboard interactions

// Sidebar navigation event handling
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('.sidebar nav ul li a').forEach(item => item.classList.remove('active'));
        link.classList.add('active');
        const page = link.getAttribute('data-page');
        console.log(`Navigated to: ${page}`);
    });
});

// Chart.js setup
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Performance Data',
            data: [30, 50, 40, 60, 70, 90, 100],
            borderColor: '#4cb6ef',
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

// Adjust chart size
ctx.canvas.parentNode.style.height = '400px';
ctx.canvas.parentNode.style.width = '100%';

// Table status color updates
const statusElements = document.querySelectorAll('.status');
statusElements.forEach(status => {
    if (status.classList.contains('pending')) {
        status.style.backgroundColor = '#ffa500';
    } else if (status.classList.contains('approved')) {
        status.style.backgroundColor = '#28a745';
    } else if (status.classList.contains('rejected')) {
        status.style.backgroundColor = '#dc3545';
    }
});

// Extend menu bar to cover full vertical height
document.querySelector('.sidebar').style.height = '100vh';

console.log('Dashboard interactions and chart initialized successfully.');
