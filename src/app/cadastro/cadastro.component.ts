import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  categorias = [
    {nome:"Negócios"},
    {nome:"Educação"},
    {nome:"Produtos"},
    {nome:"Tecnologia"},
    {nome:"Beleza"},
    {nome:"Entretenimento"},
    {nome:"Meio Ambiente"},
    {nome:"Fin Tech"},
    {nome:"Serviços"}
  ];

  pitch = {
    "titulo": "",
    "autor": "",
    "categoria": "",
    "descricao": "",
    "info_contato": "",
    "n_contatos":"",
    "url": ""      
  };

  itemsRef: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('pitches');
  }

  addItem(data: {}) {
    this.itemsRef.push(data);
  }

  cadastrar(url){
    this.pitch.url = url;
    
    this.addItem(this.pitch);
    this.pitch = {
      "titulo": "",
      "autor": "",
      "categoria": "",
      "descricao": "",
      "info_contato": "",
      "n_contatos":"0",      
      "url": ""      
    };
    
    alert("Cadastrado com sucesso!")
  }

  ngOnInit() {
  }

}
