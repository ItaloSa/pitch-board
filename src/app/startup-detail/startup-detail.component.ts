import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-startup-detail',
  templateUrl: './startup-detail.component.html',
  styleUrls: ['./startup-detail.component.css']
})
export class StartupDetailComponent implements OnInit {

  pitches: Observable<any[]>;
  startup: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private router: Router

  ) {
    this.pitches = db.list('pitches').valueChanges(); 
  }


  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
      }
    );
  }
}
