// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Donut Chart 
var AppCate = document.getElementById("myDonutChart");
var myDoughChartAppCate = new Chart(AppCate, {
  type: 'doughnut',
  data: {
    labels: ["attribute 1", "attribute 2", "attribute 3"],
    datasets: [{
      data: [20, 16, 9],
      backgroundColor: ['#5ec2e2', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#5ec2e2', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 60,
  },
});

// Pie Chart
var Heavey = document.getElementById("myPieChart");
var MypieChartHeavey = new Chart(Heavey, {
  type: 'pie',
  data: {
    labels: ["attribute 1", "attribute 2", "attribute 3"],
    datasets: [{
      data: [20, 10, 15],
      backgroundColor: ['#5ec2e2', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#5ec2e2', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 0,
  },
});
