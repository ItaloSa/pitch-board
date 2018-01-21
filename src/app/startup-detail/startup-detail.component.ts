import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase ,AngularFireObject} from 'angularfire2/database';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-startup-detail',
  templateUrl: './startup-detail.component.html',
  styleUrls: ['./startup-detail.component.css']
})
export class StartupDetailComponent {

  pitch: any;
  id: any;
  itemRef: AngularFireObject<any>;
  url: any;

  constructor(  private route: ActivatedRoute,
                private db: AngularFireDatabase,
                private router: Router,
                private sanitizer: DomSanitizer ) 
  {
    this.route.params.subscribe((params: any) => {this.id = params['id'];});
    this.itemRef = db.object('/pitches/'+this.id);
    this.itemRef.snapshotChanges().subscribe(action => {
    this.pitch = action.payload.val();
    this.url = 'https://www.youtube.com/embed/' +this.pitch.url;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.url);
    });
  }

  update(){
    this.pitch.n_contatos ++;
    this.itemRef.update({ n_contatos: this.pitch.n_contatos });
    //console.log('pitch atualizado');
  }
}
