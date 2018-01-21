import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  categorias = [
    {nome:"Automóveis e veículos"},
    {nome:"Moda e beleza"},
    {nome:"Comédia"},
    {nome:"Educação"},
    {nome:"Entretenimento"},
    {nome:"Entretenimento para a família"},
    {nome:"Filmes e animação"},
    {nome:"Culinária"},
    {nome:"Video games"},
    {nome:"Instruções e estilo"},
    {nome:"Música"},
    {nome:"Notícias e política"},
    {nome:"Sem fins lucrativos e ativismo"},
    {nome:"Pessoas e blogs"},
    {nome:"Animais"},
    {nome:"Ciência e tecnologia"},
    {nome:"Esportes"},
    {nome:"Viagens e eventos"}
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

  cadastrar(){
    this.addItem(this.pitch);
    this.pitch = {
      "titulo": "",
      "autor": "",
      "categoria": "",
      "descricao": "",
      "info_contato": "",
      "n_contatos":"",      
      "url": ""      
    };
    alert("Cadastrado com sucesso!")
  }

  ngOnInit() {
  }

}
