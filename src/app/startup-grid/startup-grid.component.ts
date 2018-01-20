import { StartupService } from './../startup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startup-grid',
  templateUrl: './startup-grid.component.html',
  styleUrls: ['./startup-grid.component.css']
})
export class StartupGridComponent implements OnInit {

  private startups: any = {}

  constructor(private startupService: StartupService) {  }
  
  ngOnInit() {
    this.startups = this.startupService.getStartups()["startups"]
  }

}
