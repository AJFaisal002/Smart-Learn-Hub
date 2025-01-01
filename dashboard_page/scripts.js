// Chart.js Configurations
// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Completed', 'Pending', 'Skipped'],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ['#007bff', '#ffc107', '#dc3545']
        }]
    }
});

// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Online', 'Offline', 'Hybrid'],
        datasets: [{
            label: 'Study Mode',
            data: [40, 35, 25],
            backgroundColor: ['#007bff', '#ffc107', '#28a745']
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
