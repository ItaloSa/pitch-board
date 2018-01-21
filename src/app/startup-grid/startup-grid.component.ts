import { StartupService } from './../startup.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {enableProdMode} from '@angular/core';
import { Observable } from 'rxjs/Observable';

enableProdMode();

@Component({
  selector: 'app-startup-grid',
  templateUrl: './startup-grid.component.html',
  styleUrls: ['./startup-grid.component.css']
})
export class StartupGridComponent {

  startups: Observable<any[]>;

  itemsRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.startups = db.list('pitches').valueChanges();
    this.itemsRef = db.list('pitches');    
    this.startups = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
}
