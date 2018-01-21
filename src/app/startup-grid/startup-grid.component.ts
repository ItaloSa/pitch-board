import { StartupService } from './../startup.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-startup-grid',
  templateUrl: './startup-grid.component.html',
  styleUrls: ['./startup-grid.component.css']
})
export class StartupGridComponent implements OnInit {

  // private startups: any = {}
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;


  constructor(
    db: AngularFireDatabase
    // private startupService: StartupService
  ) {
    this.itemsRef = db.list('pitches');
    this.items = this.itemsRef.snapshotChanges().map(changes=>{
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
  }
  
  ngOnInit() {
    // this.startups = this.startupService.getStartups()["startups"]
  }

}
