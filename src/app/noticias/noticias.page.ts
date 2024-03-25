import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})


export class NoticiasPage {

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
  ngOnInit() {
  }  
}






