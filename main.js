window.addEventListener( 'load', function () {
        //
        Chart.defaults.spanGaps = true;
        //
        let plotLineChart = document.querySelector( '#working__chart' ); 
        const data = {
          labels: [ '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19' ],
          datasets: [
            {
              label: '',
              borderWidth: 3,
              borderColor: '#ff0000',
              backgroundColor: 'transparent',
              pointStyle: 'rect',
              lineTension: 0,
              data: [1100, 700, 500, 800, 850, 900, 300, 750, 1200, 1050, 1150, 1250, 1350, 1450, 1300, 1650, 1050, 550, 800, 600, 750, 850, 800, 800, 750, 800, 800, 550, 800, 250, 500 ]
            },
            {
              label: '',
              borderColor: 'transparent',
              backgroundColor: '#9bb31b',
              pointHoverRadius: 0,
              pointRadius: 0,
              lineTension: 0,
              data: [ 1000, 600, 400, 700, 750, 800, 200, 650, 1100, 950, 1050, 1150, 1250, 1350, 1200, 1550, 950, 450, 700, 500, 650, 750, 700, 700, 650, 700, 700, 450, 700, 150, 400 ]
            },
            {
              label: '',
              borderColor: 'transparent',
              backgroundColor: '#82bbf2',
              pointHoverRadius: 0,
              pointRadius: 0,
              lineTension: 0,
              data: [ 1900, 2050, 1900, 1800, 2050, 2050, 2050, 1850, 2100, 2050, 2000, 2250, 2000, 2150, 1850, 2000, 2150, 2150, 2000, 2000, 1850, 2050, 1850, 2000, 1900, 1800, 1750, 2050, 2000, 1900, 2200 ]
            },
            {
              label: '',
              borderColor: 'transparent',
              backgroundColor: '#cfcfcf',
              pointHoverRadius: 0,
              pointRadius: 0,
              lineTension: 0,
              data: [ 2000, 2300, 2000, 1900, 2250, 1850, 1650, 1650, 2350, 2250, 2100, 2400, 1900, 2200, 2350, 2350, 2400, 2200, 2000, 2350, 2050, 2350, 2250, 2200, 2150, 2050, 2300, 2000, 2250, 2050, 2300 ]
            }
          ]
        };
        const LineChart = new Chart( plotLineChart, {
          type: 'line',
          options: {
            tooltips: {
              enabled: false
            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false
                }
              }],
              yAxes: [{
                gridLines: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  stepSize: 500,
                  beginAtZero: true
                },
                afterBuildTicks: function(LineChart) {
                  LineChart.ticks = [];
                  LineChart.ticks.push(500);
                  LineChart.ticks.push(1000);
                  LineChart.ticks.push(1500);
                  LineChart.ticks.push(2000);
                }
              }]
            }
          },
          data: data
        });
        
      }, false );
  //
  //
  let plotBarChart = document.querySelector( '#speed__chart' );
          const data = {
            labels: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20' ],
            datasets: [
            {
              label: '',
              backgroundColor: '#7cb5ec',
              data: [ 18, 16, 14, 14, 12.5, 12, 11.5, 11.5, 11, 11, 10.5, 10.5, 10, 9, 9, 8.5, 8.5, 8.5, 8.5, 9 ]
            }
            ]
          };
          const barChart = new Chart(plotBarChart, {
            type: 'bar',
            options: {
              tooltips: {
                enabled: false
              },
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    fontColor: 'transparent'
                  }
                }],
                yAxes: [{
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    beginAtZero: true,
                    stepSize: 5
                  }
                }]
              }
            },
            data: data
          });
//
//
$(document).ready(function(){
  //
  //
   $('.language').click(function(){
    $('.select_lang').toggle();
  });
  //
  //
  $('.user-profile').click(function(){
    $('.user_dropdown').toggle();
  });
  //
  //
  $(function(){
    $('.sort-table').DataTable({
      paging: false,
      searching: false,
      lengthChange: false,
      info: false
    });
  });
  //
  //
  $('.select_chart__buttons label').click(function(){
    var chartId = $(this).attr('data-id');
    //          
    $('.chart').addClass('-hide');
    //          
    $(this).removeClass('-hide');
    $("#"+chartId).removeClass('-hide');        
  });
  //
  //
});
//