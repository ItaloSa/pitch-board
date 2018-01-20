import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inscricao: Subscription;
  showItens: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { } 

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
