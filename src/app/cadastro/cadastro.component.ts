import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  pitch = {
    "nome_autor": "",
    "titulo_pitch": "",
    "descricao": "",
    "info_contato": ""
  }

  itemsRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('pitches');
  }

  addItem(data: {}) {
    this.itemsRef.push(data);
  }

  cadastrar(){
    this.addItem(this.pitch);
    this.pitch = {
      "nome_autor": "",
      "titulo_pitch": "",
      "descricao": "",
      "info_contato": ""
    };
    alert("Success")
  }

  ngOnInit() {
  }

}
