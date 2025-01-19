// Marketing Effort Graph (Bar Chart)
const marketingData = {
    labels: ['Guzman y Gomez', 'McDonalds', 'Mocha', 'Iced Coffee'],
    datasets: [{
        label: 'Coffee Brands and Types Promoted',
        data: [80, 60, 50, 40], // Example values indicating frequency or reach
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F0A500'],
        borderColor: ['#FF5733', '#33FF57', '#3357FF', '#F0A500'],
        borderWidth: 1,
    }]
};

const marketingCtx = document.getElementById('marketingGraph').getContext('2d');
const marketingGraph = new Chart(marketingCtx, {
    type: 'bar',
    data: marketingData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

// Market Research Graph (Pie Chart)
const researchData = {
    labels: ['Feedback on Business Ideas', 'Other'],
    datasets: [{
        label: 'Market Research Feedback',
        data: [90, 10], // Percentage of feedback collected
        backgroundColor: ['#FFCC00', '#333333'],
        borderColor: ['#FFCC00', '#333333'],
        borderWidth: 1,
    }]
};

const researchCtx = document.getElementById('researchGraph').getContext('2d');
const researchGraph = new Chart(researchCtx, {
    type: 'pie',
    data: researchData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

// Coffee Alternatives Graph (Doughnut Chart)
const alternativesData = {
    labels: ['Traditional Coffee', 'Alternatives (Tea, Herbal, etc.)'],
    datasets: [{
        label: 'Coffee Alternatives vs Traditional Coffee',
        data: [70, 30], // Percentage of traditional coffee vs alternatives
        backgroundColor: ['#32CD32', '#FF6347'],
        borderColor: ['#32CD32', '#FF6347'],
        borderWidth: 1,
    }]
};

const alternativesCtx = document.getElementById('alternativesGraph').getContext('2d');
const alternativesGraph = new Chart(alternativesCtx, {
    type: 'doughnut',
    data: alternativesData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});

// Health Benefits Graph (Radar Chart)
const healthData = {
    labels: ['Mental Alertness', 'Energy Boost', 'Digestive Health', 'Liver Health', 'Antioxidants'],
    datasets: [{
        label: 'Health Benefits of Coffee',
        data: [80, 70, 60, 50, 90], // Example percentage for each health benefit
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
    }]
};

const healthCtx = document.getElementById('healthGraph').getContext('2d');
const healthGraph = new Chart(healthCtx, {
    type: 'radar',
    data: healthData,
    options: {
        responsive: true,
        scales: {
            r: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});
