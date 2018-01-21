import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  pitch = {
    "titulo": "",
    "autor": "",
    "categoria": "",
    "descricao": "",
    "info_contato": "",
    "url": ""      
  };

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
      "titulo": "",
      "autor": "",
      "categoria": "",
      "descricao": "",
      "info_contato": "",
      "url": ""      
    };
    alert("Cadastrado com sucesso!")
  }

  ngOnInit() {
  }

}
