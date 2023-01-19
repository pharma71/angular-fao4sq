import { Component, Input, Output, EventEmitter, ContentChildren, AfterContentInit, QueryList, ContentChild, ElementRef } from '@angular/core';
import { Product } from '../products';
import { ProductListComponent } from '../product-list/product-list.component'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements AfterContentInit{
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
 // @ContentChildren('li') children!:QueryList<'li'>;
  @ContentChild('p') child!:ElementRef

  @ContentChildren(ProductListComponent) myelem2!:QueryList<ProductListComponent>

  constructor(private elem:ElementRef){
    
  }

  ngAfterContentInit(){
  //  console.log(this.children.toString());
    console.log('content Child', this.child.nativeElement as ElementRef);
    console.log('Children',this.myelem2);
  }
}
