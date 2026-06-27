import { Component } from '@angular/core';
import { Api } from '../../Service/api';
import { HighchartsChartDirective, ChartConstructorType } from 'highcharts-angular';
import { model } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {

  selected = model<Date | null>(null);

  userCount:number=0
  feedbackCount:number=0
  recipeCount:number=0
  chartOptions: Highcharts.Options = {

  chart: {
    type: 'column',
    backgroundColor: '#fff8f2',
    borderRadius: 22,
    style: {
      fontFamily: 'Poppins'
    }
  },

  title: {
    text: 'CooksPedia Recipe Analytics',
    style: {
      color: '#FF6B35',
      fontSize: '24px',
      fontWeight: '700'
    }
  },

  subtitle: {
    text: 'Weekly Recipe Engagement Report',
    style: {
      color: '#2E8B57',
      fontSize: '14px'
    }
  },

  xAxis: {

    categories: [
      'Italian',
      'Indian',
      'Chinese',
      'Mexican',
      'Thai',
      'Arabic'
    ],

    crosshair: true,

    lineColor: '#ffd6c7',

    tickColor: '#ffd6c7',

    labels: {
      style: {
        color: '#444',
        fontSize: '14px',
        fontWeight: '500'
      }
    }

  },

  yAxis: {

    min: 0,

    title: {
      text: 'Recipe Counts',
      style: {
        color: '#2E8B57',
        fontWeight: '600'
      }
    },

    labels: {
      style: {
        color: '#555'
      }
    },

    gridLineColor: 'rgba(0,0,0,0.06)'

  },

  tooltip: {

    shared: true,

    backgroundColor: '#ffffff',

    borderColor: '#FF6B35',

    borderRadius: 14,

    style: {
      color: '#333'
    },

    valueSuffix: ' Recipes'

  },

  plotOptions: {

    column: {

      borderRadius: 10,

      pointPadding: 0.18,

      borderWidth: 0

    }

  },

  legend: {

    itemStyle: {
      color: '#444',
      fontWeight: '600'
    },

    itemHoverStyle: {
      color: '#FF6B35'
    }

  },

  series: [

    {
      type: 'column',
      name: 'Downloads',

      data: [120, 180, 90, 150, 110, 75],

      color: '#FF6B35'
    },

    {
      type: 'column',
      name: 'Saved Recipes',

      data: [95, 140, 70, 120, 85, 60],

      color: '#FFB703'
    },

    {
      type: 'column',
      name: 'Likes',

      data: [200, 240, 150, 180, 160, 100],

      color: '#2E8B57'
    }

  ],

  credits: {
    enabled: false
  }
};

// Required
chartConstructor: ChartConstructorType = 'chart';

  constructor(private api:Api){}

  ngOnInit(){
    this.getCount()
  }

  getCount(){
    this.api.getAdminFeedbacks().subscribe((res:any)=>{
      this.feedbackCount=res?.length
    })
    
    this.api.getAdminRecipes().subscribe((res:any)=>{
      this.recipeCount=res?.length
    }) 

    this.api.getAdminUsers().subscribe((res:any)=>{
      this.userCount=res?.length
    }) 
  }
}
