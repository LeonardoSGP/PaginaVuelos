new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [
      {
        label: 'Primary',
        data: [2,3,4,2,1,2],       
        backgroundColor: '#425C59',
        borderRadius: 12,
        barPercentage: 0.15,
        categoryPercentage: 0.45
      },
      {
        label: 'Secondary',
        data: [3,4,2,5,6,4],      
        backgroundColor: '#e6c576',
        borderRadius: 12,
        barPercentage: 0.15,
        categoryPercentage: 0.45
      }
    ]
  },
  options: {
  plugins: {
    legend: { display: false }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 12,
          weight: 500
        },
        color: '#6f7a7a'
      }
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 7,
      ticks: {
        stepSize: 1,
        autoSkip: false,
        precision: 0,
        font: { size: 12 },
        color: '#6f7a7a'
      },
      grid: {
        color: '#e9e9e9',      
        lineWidth: 1
      },
      border: {
        display: false
      }
    }
  }
}

});

new Chart(document.getElementById('pieChart'), {
  type: 'doughnut',
  data: {
    labels: ['Boeing', 'Airbus', 'Emirates', 'Other'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#2d5b4e','#75c9c8','#2b6f8e','#e6c576'],
      borderWidth: 2,
      borderColor: '#ffffff'
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    cutout: '65%',
    responsive: true,
    maintainAspectRatio: false
  }
});


new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [
      {
        label: 'Flights Line 1',
        data: [3.0, 4.2, 2.7, 4.0, 6.0, 4.9],
        borderColor: '#C89C32',
        backgroundColor: 'rgba(200, 156, 50, 0.3)',
        fill: true,   
        tension: 0.4,
        pointBackgroundColor: '#C89C32',
        pointBorderColor: '#C89C32',
        pointRadius: 6,
        pointHoverRadius: 10,
        pointBorderWidth: 3
      },
      {
        label: 'Flights Line 2',
        data: [3.0, 2.0, 4.0, 3.0, 4.5, 5.0],
        borderColor: '#425C59',
        backgroundColor: 'rgba(66, 92, 89, 0.3)',
        fill: true,  
        tension: 0.4,
        pointBackgroundColor: '#425C59',
        pointBorderColor: '#425C59',
        pointRadius: 6,
        pointHoverRadius: 10,
        pointBorderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#425C59',
        padding: 12,
        displayColors: false,
        callbacks: {
          title: function() {
            return '';
          },
          label: function(context) {
            return context.parsed.y * 1000 + '\nPassangers';
          }
        },
        bodyFont: {
          size: 16,
          weight: 'bold'
        },
        bodyAlign: 'center',
        caretSize: 8,
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false }
      },
      y: {
        beginAtZero: true,
        max: 7,
        ticks: { stepSize: 1 },
        grid: {
          color: '#e6e6e6',
          drawBorder: false
        },
        border: { display: false }
      }
    }
  }
});
