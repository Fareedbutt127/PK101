import { Component, OnInit } from '@angular/core';

import { ApexAxisChartSeries, ApexNonAxisChartSeries, ApexGrid, ApexChart, ApexXAxis, ApexYAxis, ApexMarkers, ApexStroke, ApexLegend, ApexResponsive, ApexTooltip, ApexFill, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle } from 'ng-apexcharts';

import { NgbDateStruct, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Ng2-charts
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color, SingleDataSet } from 'ng2-charts';

// Progressbar.js
import ProgressBar from 'progressbar.js';
import { MouseEvent } from '@agm/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';


export type apexChartOptions = {
  series: ApexAxisChartSeries;
  nonAxisSeries: ApexNonAxisChartSeries;
  colors: string[];
  grid: ApexGrid;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers,
  stroke: ApexStroke,
  legend: ApexLegend,
  responsive: ApexResponsive[],
  tooltip: ApexTooltip,
  fill: ApexFill
  dataLabels: ApexDataLabels,
  plotOptions: ApexPlotOptions,
  labels: string[],
  title: ApexTitleSubtitle
};
export type ChartOptionsA = {
  series: ApexAxisChartSeries;
  nonAxisSeries: ApexNonAxisChartSeries;
  colors: string[];
  grid: ApexGrid;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers,
  stroke: ApexStroke,
  legend: ApexLegend,
  responsive: ApexResponsive[],
  tooltip: ApexTooltip,
  fill: ApexFill
  dataLabels: ApexDataLabels,
  plotOptions: ApexPlotOptions,
  labels: string[],
  title: ApexTitleSubtitle
};

declare const AmCharts;

@Component({
  selector: 'app-dashboard-lab',
  templateUrl: './dashboard-lab.component.html',
  styleUrls: ['./dashboard-lab.component.scss'],
  preserveWhitespaces: true
})
export class DashboardLabComponent implements OnInit {

  router: any;
 
  basicModalCloseResult: string = '';
  openVerticalCenteredModal(content) {
    this.modalService.open(content, {centered: true}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }

  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]


  /**
   * Apex chart
   */
  public apexChart1Options: Partial<apexChartOptions>;
  public apexChart2Options: Partial<apexChartOptions>;
  public apexChart3Options: Partial<apexChartOptions>;
  public apexChart4Options: Partial<apexChartOptions>;
  public areaChartOptions: Partial<ChartOptionsA>;

  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;

  /**
   * Ng2 Bar Chart 1
   */
  public ng2BarChart1Options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: '#8392a5',
          fontSize: 10
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(77, 138, 240, .1)'
        },
        ticks: {
          fontColor: '#8392a5',
          fontSize: 10,
          min: 80,
          max: 200
        }
      }]
    }
  };
  public ng2BarChart1Labels: Label[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  public ng2BarChart1Type: ChartType = 'bar';
  public ng2BarChart1Colors: Color[] = [ { backgroundColor: "#727cf5" } ]
  public ng2BarChart1Legend = false;
  public ng2BarChart1Data: ChartDataSets[] = [
    { data: [150,110,90,115,125,160,190,140,100,110,120,120], label: 'Sales', categoryPercentage: .6, barPercentage: .3 }
  ];

  

      /**
   * Age Doughnut chart
   */
       public doughnutChartLabels: Label[] = ["0-30", "30-60", "60-90"];
       public doughnutChartData: SingleDataSet = [2478,4267,1334];
       public doughnutChartType: ChartType = 'doughnut';
       public doughnutChartColors: Color[] = [
         { backgroundColor: ["#7ee5e5","#727cf5","#5bd7c0"] }
       ];
     
        /**
        * Gender Doughnut chart
        */
       public genderDoughnutChartLabels: Label[] = ["Men", "Women", "Others"];
       public genderDoughnutChartData: SingleDataSet = [2478,4267,1334];
       public genderDoughnutChartType: ChartType = 'doughnut';
       public genderDoughnutChartColors: Color[] = [
         { backgroundColor: ["#7ee5e5","#727cf5","#5bd7c0"] }
       ];
     
        /**
        * Height Doughnut chart
        */
         public heightDoughnutChartLabels: Label[] = ["120cm-150cm", "150cm-180cm", "180cm-210cm"];
         public heightDoughnutChartData: SingleDataSet = [2478,4267,1334];
         public heightDoughnutChartType: ChartType = 'doughnut';
         public heightDoughnutChartColors: Color[] = [
           { backgroundColor: ["#7ee5e5","#727cf5","#5bd7c0"] }
         ];
     
         /**
        * Weight Doughnut chart
        */
          public weightDoughnutChartLabels: Label[] = ["100lb-150lb", "150lb-200lb", "200lb-250lb"];
          public weightDoughnutChartData: SingleDataSet = [2478,4267,1334];
          public weightDoughnutChartType: ChartType = 'doughnut';
          public weightDoughnutChartColors: Color[] = [
            { backgroundColor: ["#7ee5e5","#727cf5","#5bd7c0"] }
          ];
     
       /**
        * Mixed chart
        */
        public mixedChartOptions: ChartOptions = {
         responsive: true,
       };
       public mixedChartLabels: Label[] = ["1900", "1950", "1999", "2050"];
       public mixedChartType: ChartType = 'bar';
       public mixedChartColors: Color[] = [
         { 
           backgroundColor: "rgba(0,0,0,0)",
           borderColor:  "#7ee5e5"
         },
         {
           backgroundColor: "rgba(0,0,0,0)",
           borderColor:  "#7ee5e5"
         },
         {
           backgroundColor: "#727cf5"
         },
         {
           backgroundColor: "#7ee5e5"
         }
       ];
       public mixedChartData: ChartDataSets[] = [
         {
           label: "Collectors",
           data: [408,547,675,734],
           type: 'line'
         }, {
           label: "Samples",
           data: [133,221,783,2478],
           type: 'line'
         },  {
           label: "Individuals",
           data: [133,221,783,2478]
         }
       ];
     


  constructor(private calendar: NgbCalendar,private modalService: NgbModal,private toastr: ToastrService) {

    
    /**
     * Area chart options
     */    
     this.areaChartOptions = {
      series: [
        {
          name: 'Individuals',
          data: this.generateDayWiseTimeSeries(0, 18)
        }, {
          name: 'Samples',
          data: this.generateDayWiseTimeSeries(1, 18)
        }
      ],
      colors: ["#727cf5", "#7ee5e5"],
      stroke: {
        curve: "smooth",
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: "rgba(77, 138, 240, .1)",
        padding: {
          left: -10,
          bottom: 0
        }
      },
      chart: {
        type: "area",
        height: 300,
        parentHeightOffset: 0,
        foreColor: "#999",
        stacked: true,
        dropShadow: {
          enabled: true,
          // enabledSeries: [0],
          top: -2,
          left: 2,
          blur: 5,
          opacity: 0.06
        }
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        min: 0,
        labels: {
          offsetX: 24,
          offsetY: -5
        },
        tooltip: {
          enabled: true
        }
      },
      markers: {
        size: 0,
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 1,
        hover: {
          size: 6
        }
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      fill: {
        type: "solid"
      }
    };


    /**
     * ApexChart1 options
     */
    this.apexChart1Options = {
      chart: {
        type: "line",
        height: 60,
        sparkline: {
          enabled: !0
        }
      },
      series: [{
          data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843]
      }],
      stroke: {
        width: 2,
        curve: "smooth"
      },
      markers: {
        size: 0
      },
      colors: ["#727cf5"],
      tooltip: {
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },
        y: {
          title: {
            formatter: (e) => {
              return ""
            }
          }
        },
        marker: {
          show: !1
        }
      }
    };



    /**
     * ApexChart2 options
     */
    this.apexChart2Options = {
      chart: {
        type: "bar",
        height: 60,
        sparkline: {
          enabled: !0
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "60%"
        }
      },
      colors: ["#727cf5"],
      series: [{
        data: [36, 77, 52, 90, 74, 35, 55, 23, 47, 10, 63]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },
        y: {
          title: {
            formatter: (e) => {
              return ""
            }
          }
        },
        marker: {
          show: !1
        }
      }
    };



    /**
     * ApexChart3 options
     */
    this.apexChart3Options = {
      chart: {
        type: "line",
        height: 60,
        sparkline: {
          enabled: !0
        }
      },
      series: [{
          data: [41, 45, 44, 46, 52, 54, 43, 74, 82, 82, 89]
      }],
      stroke: {
        width: 2,
        curve: "smooth"
      },
      markers: {
        size: 0
      },
      colors: ["#727cf5"],
      tooltip: {
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },
        y: {
          title: {
            formatter: (e) => {
              return ""
            }
          }
        },
        marker: {
          show: !1
        }
      }
    };



    /**
     * ApexChart4 options
     */
    this.apexChart4Options = {
      chart: {
        type: "line",
        height: 350,
        sparkline: {
          // enabled: !0
        },
        toolbar: {
          show: false
        }
      },
      series: [{
        data: [
          49.3,
          48.7,
          50.6,
          53.3,
          54.7,
          53.8,
          54.6,
          56.7,
          56.9,
          56.1,
          56.5,
          60.3,
          58.7,
          61.4,
          61.1,
          58.5,
          54.7,
          52.0,
          51.0,
          47.4,
          48.5,
          48.9,
          53.5,
          50.2,
          46.2,
          48.6,
          51.7,
          51.3,
          50.2,
          54.6,
          52.4,
          53.0,
          57.0,
          52.9,
          48.7,
          52.6,
          53.5,
          58.5,
          55.1,
          58.0,
          61.3,
          57.7,
          60.2,
          61.0,
          57.7,
          56.8,
          58.9,
          62.4,
          58.7,
          58.4,
          56.7,
          52.7,
          52.3,
          50.5,
          55.4,
          50.4,
          52.4,
          48.7,
          47.4,
          43.3,
          38.9,
          34.7,
          31.0,
          32.6,
          36.8,
          35.8,
          32.7,
          33.2,
          30.8,
          28.6,
          28.4,
          27.7,
          27.7,
          25.9,
          24.3,
          21.9,
          22.0,
          23.5,
          27.3,
          30.2,
          27.2,
          29.9,
          25.1,
          23.0,
          23.7,
          23.4,
          27.9,
          23.2,
          23.9,
          19.2,
          15.1,
          15.0,
          11.0,
          9.20,
          7.47,
          11.6,
          15.7,
          13.9,
          12.5,
          13.5,
          15.0,
          13.9,
          13.2,
          18.1,
          20.6,
          21.0,
          25.3,
          25.3,
          20.9,
          18.7,
          15.3,
          14.5,
          17.9,
          15.9,
          16.3,
          14.1,
          12.1,
          14.8,
          17.2,
          17.7,
          14.0,
          18.6,
          18.4,
          22.6,
          25.0,
          28.1,
          28.0,
          24.1,
          24.2,
          28.2,
          26.2,
          29.3,
          26.0,
          23.9,
          28.8,
          25.1,
          21.7,
          23.0,
          20.7,
          29.7,
          30.2,
          32.5,
          31.4,
          33.6,
          30.0,
          34.2,
          36.9,
          35.5,
          34.7,
          36.9
        ]
      }],
      stroke: {
        width: 2,
        curve: "straight"
      },
      markers: {
        size: 0
      },
      grid: {
        borderColor: "rgba(77, 138, 240, .1)",
        padding: {
          bottom: -10
        }
      },
      xaxis: {
        categories: ["Jan","","","","","","","","","","","","","","","","Feb","","","","","","","","","","","","","","","","Mar","","","","","","","","","","","","","","","","Apr","","","","","","","","","","","","","","","","May","","","","","","","","","","","","","","","","Jun","","","","","","","","","","","","","","","","Jul","","","","","","","","","","","","","","","","Aug","","","","","","","","","","","","","","","","Sep","","","","","","","","","","","","","","","","Oct","","","","",""],
        labels: {
          style: {
            colors: '#686868',
            fontSize: '13px',
            fontFamily: 'Overpass, sans-serif',
            fontWeight: 400,
          },
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#686868',
            fontSize: '11px',
            fontFamily: 'Overpass, sans-serif',
            fontWeight: 400,
          }
        },
      },
      colors: ["#727cf5"],
      tooltip: {
        fixed: {
          enabled: !1
        },
        x: {
          show: !1
        },
        y: {
          title: {
            formatter: function(e) {
              return ""
            }
          }
        },
        marker: {
          show: !1
        }
      }
    };


  }
  finishFunction() {
    alert('Successfully Completed');

    // this.toastr.success("The result is added");
  }


  ngOnInit(): void {
    var map = AmCharts.makeChart( "chartdiv", {

      "type": "map",
      "theme": "light",
      "projection": "miller",

      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
      },
      "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000"
      },
  } );
    this.currentDate = this.calendar.getToday();

    /**
     * Progressbar1 initialization
     */
    var progressbar1 = new ProgressBar.Circle('#progressbar1', {
      color: '#727cf5',
      trailColor: 'rgba(77, 138, 240, .1)',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#727cf5', width: 1 },
      to: { color: '#727cf5', width: 4 },
      // Set default step function for all animate calls
      step: (state, circle) => {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + '%');
        }
    
      }
    });
    progressbar1.text.style.fontFamily = "'Overpass', sans-serif;";
    progressbar1.text.style.fontSize = '3rem';
    progressbar1.animate(.78);


  }

  /**
   * Generating demo data for area chart
   */    
   generateDayWiseTimeSeries(s, count) {
    var values = [[
      4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
    ], [
      2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
    ]];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2020").getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }



  /**
   * Generating demo data for area chart
   */
  generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
  }

}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}