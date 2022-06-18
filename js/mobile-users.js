const ctx2 = document.getElementById('mobile-users');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',

    data: {

        datasets: [{

            // label: 'MOBILE USERS',
            data: [50, 15, 15],

            backgroundColor: [
              'rgb(116, 119, 191)',
              'rgb(129, 201, 143)',
              'rgb(81, 182, 200)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
    legend: {
      labels: {
        padding: 20
      }
    }
  }

});
