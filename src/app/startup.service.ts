import { Injectable } from '@angular/core';

@Injectable()
export class StartupService {

  constructor() { }

  getStartups(){
    return this.startups
  }

  getStartup(id: number){
    for (let startup of this.startups['startups']){
      if(startup.id == id){
        return startup;
      }
    }
    return null;
  }

  private startups = {"startups": [
    {
      "id": 1,
      "nome": "augment",
      "image": "http://placehold.it/1234x800/",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id maximus nibh. Maecenas tempor turpis non nunc feugiat porttitor. Sed ut molestie neque, at bibendum ex. Aliquam consequat felis odio, id volutpat ante interdum sed. Vestibulum dapibus fringilla mauris, eget convallis justo auctor et.",
      "linkYoutube": "https://you.be/video",
      "categorias": [
        "escola", "aceleradora", "negocios"
      ]
    },{
      "id": 2,
      "nome": "augment",
      "image": "http://placehold.it/1234x800/",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id maximus nibh. Maecenas tempor turpis non nunc feugiat porttitor. Sed ut molestie neque, at bibendum ex. Aliquam consequat felis odio, id volutpat ante interdum sed. Vestibulum dapibus fringilla mauris, eget convallis justo auctor et.",
      "linkYoutube": "https://you.be/video",
      "categorias": [
        "escola", "aceleradora", "negocios"
      ]
    },{
      "id": 3,
      "nome": "augment",
      "image": "http://placehold.it/1234x800/",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id maximus nibh. Maecenas tempor turpis non nunc feugiat porttitor. Sed ut molestie neque, at bibendum ex. Aliquam consequat felis odio, id volutpat ante interdum sed. Vestibulum dapibus fringilla mauris, eget convallis justo auctor et.",
      "linkYoutube": "https://you.be/video",
      "categorias": [
        "escola", "aceleradora", "negocios"
      ]
    },{
      "id": 4,
      "nome": "augment",
      "image": "http://placehold.it/1234x800/",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id maximus nibh. Maecenas tempor turpis non nunc feugiat porttitor. Sed ut molestie neque, at bibendum ex. Aliquam consequat felis odio, id volutpat ante interdum sed. Vestibulum dapibus fringilla mauris, eget convallis justo auctor et.",
      "linkYoutube": "https://you.be/video",
      "categorias": [
        "escola", "aceleradora", "negocios"
      ]
    },{
      "id": 5,
      "nome": "augment",
      "image": "http://placehold.it/1234x800/",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id maximus nibh. Maecenas tempor turpis non nunc feugiat porttitor. Sed ut molestie neque, at bibendum ex. Aliquam consequat felis odio, id volutpat ante interdum sed. Vestibulum dapibus fringilla mauris, eget convallis justo auctor et.",
      "linkYoutube": "https://you.be/video",
      "categorias": [
        "escola", "aceleradora", "negocios"
      ]
    },{
      "id": 6,
      "nome": "augment",
      "image": "http://placehold.it/1234x800/",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id maximus nibh. Maecenas tempor turpis non nunc feugiat porttitor. Sed ut molestie neque, at bibendum ex. Aliquam consequat felis odio, id volutpat ante interdum sed. Vestibulum dapibus fringilla mauris, eget convallis justo auctor et.",
      "linkYoutube": "https://you.be/video",
      "categorias": [
        "escola", "aceleradora", "negocios"
      ]
    }
  ]};

}
