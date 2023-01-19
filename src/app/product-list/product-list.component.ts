import { Component,Input, Output, ViewChild, AfterViewInit, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { products, Product } from '../products';
import { CartService } from '../cart.service';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit, AfterContentInit{
  products = [...products];
  public text: string = 'Jubel';
  public gruss: string = 'Hallo';
 
  @ViewChild(ProductAlertsComponent) child!: ProductAlertsComponent;
  @ViewChild("mybutton") mybutton!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  constructor(private cart: CartService, private elem: ElementRef){}

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(item: Product){
    
    alert('New Cart Item: ' + item.name);
    this.cart.addToCart(item);
  }


  setValue() {
    this.text = 'Nancy';
  }

  ngAfterViewInit() {
    // child is set
    // View Children füt <app-product-alerts *ngFor="let alert of alerts">
    console.log(this.child)
    console.log(this.mybutton)
    let ref = this.elem.nativeElement.querySelector('p');
    console.log(ref);
  }

  ngAfterContentInit(){
    console.log(this.content)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/