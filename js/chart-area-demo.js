// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Bar Chart

var stacked = document.getElementById('MyBarChart').getContext("2d");

var data = {
    labels: ['attribute 1','attribute 2','attribute 3'],
      datasets: [
  {label: 'attribute 1',
    data: [50,10,30],
    backgroundColor: "#34ad88",
   borderColor:"#34ad88"
  },
  {label: 'attribute 2',
    data: [23,12,10],
    backgroundColor: "#31E791",
   borderColor:"#31E791"
  },
  {label: 'attribute 3',
    data: [40,23,5],
    backgroundColor: "#5ec2e2", 
   borderColor:"#5ec2e2"
  }
]
    
};
var mybarChart = new Chart(stacked, {
  type: 'bar',
  data: data,
  options: {
      legend: {
                  position: 'bottom',
                  display: true
              },
      maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
  scales: {
    xAxes: [{barPercentage:0.5, stacked: true, ticks: {
          beginAtZero: true
        }
 }],
    yAxes: [{ stacked: true, ticks: {
          beginAtZero: true
        }
 }]
  }
}
});



// Line Chart 
new Chart(document.getElementById("MyLineChart"), {
  type: 'line',
  data: {
    labels: [2010,2014,2018,2022],
    datasets: [{ 
        data: [5,10,20,15],
        label: "attribute 1",
        backgroundColor:"#31E791",
        borderColor: "#31E791",
        fill: false
      }, { 
        data: [20,10,10,20],
        label: "attribute 2",
        backgroundColor: "#34ad88",
          borderColor: "#34ad88",
        fill: false
      }, { 
        data: [9,4,23,13],
        label: "attribute 3",
        backgroundColor: "#3e95cd",
          borderColor:"#3e95cd",
        fill: false
      }, { 
        data: [15,10,20,12],
        label: "attribute 4",
         backgroundColor: "#5ec2e2",
        borderColor: "#5ec2e2",
        fill: false
      }
    ]},
  options: {
    
    legend: {
                  position: 'bottom',
                  display: true
              },
      maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
  }}
});


window.onload = function() {
  var UserGroupBarChart = document.getElementById("BarChartUserGroup").getContext("2d");
  window.myBar = new Chart(UserGroupBarChart, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });
};

