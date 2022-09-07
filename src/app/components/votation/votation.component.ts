import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { Votation, VotationOption } from 'src/app/models/votation.model';

@Component({
  selector: 'app-votation',
  templateUrl: './votation.component.html',
  styleUrls: ['./votation.component.css'],
})
export class VotationComponent implements OnInit {
  @Input('votationObject') votationObject: Votation = new Votation();
  selectedOptions: VotationOption[]=[];
  optionsLimitReached: boolean = false;

  data: any;
  chartOptions: any;
  basicData: any;
  basicOptions: any;
  pieOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: ['A', 'B'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: ['#9CC4F3', '#E77CBC'],
          hoverBackgroundColor: ['#9CC4F3', '#E77CBC'],
        },
      ],
    };

    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#9CC4F3',
          tension: 0.4,
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#E77CBC',
          tension: 0.4,
        },
      ],
    };

    this.pieOptions = {
      tooltips: {
          callbacks: {
              label: function (t:any, d:any) { // https://stackoverflow.com/a/44971825/10438278
                  let v = d.datasets[0].data[t.index];
                  var xLabel = d.labels[t.index];
                  var yLabel = v >= 1000 ? v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : v;
                  return xLabel + ': ' + yLabel;
              }
          }
      },
      legend: {
          position: 'right'
      }
    };
  }

}
