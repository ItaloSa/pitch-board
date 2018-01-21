import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inscricao: Subscription;
  showItens: Boolean = false;

  startups: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase
  ) { 
    this.itemsRef = db.list('pitches', ref=> ref.orderByChild('titulo'));    
    this.startups = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
   } 
   

   ir(value){
     console.log(value);
     
    }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        if (typeof(id) != typeof('')){
          this.showItens = true;
          console.log(this.showItens)
        }
        console.log(id)
      }
    );
  }

}
