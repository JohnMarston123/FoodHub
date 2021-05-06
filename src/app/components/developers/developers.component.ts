import { Component, OnInit } from '@angular/core';
import { developers } from '../../Mocks/index';
@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {
  developersList = developers;
  constructor() {
  
   }

  ngOnInit(): void {
  }

}
