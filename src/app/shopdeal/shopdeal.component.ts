import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deal } from '../model/Deal';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopdeal',
  templateUrl: './shopdeal.component.html',
  styleUrls: ['./shopdeal.component.css']
})
export class ShopdealComponent implements OnInit {

  deals: Array<Deal>;
  dealsRecieved: Array<Deal>;

  cartDeals: any;


  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getDeals().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
     //from localstorage retrieve the cart item
     let data = localStorage.getItem('cart');
     //if this is not null convert it to JSON else initialize it as empty
     if (data !== null) {
       this.cartDeals = JSON.parse(data);
     } else {
       this.cartDeals = [];
     }
  }


   // we will be taking the deals response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.deals = new Array<Deal>();
    //get deals returned by the api call
    this.dealsRecieved = response;

    for (const deal of this.dealsRecieved) {

      const dealwithRetrievedImageField = new Deal();
      dealwithRetrievedImageField.id = deal.id;
      dealwithRetrievedImageField.name = deal.name;
      //populate retrieved image field so that deal image can be displayed
      dealwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + deal.picByte;
      dealwithRetrievedImageField.description = deal.description;
      dealwithRetrievedImageField.price = deal.price;
      dealwithRetrievedImageField.picByte = deal.picByte;
      this.deals.push(dealwithRetrievedImageField);
    }
  }



  addToCart(DealId) {
    //retrieve deal from deals array using the deal id
    let deal = this.deals.find(deal => {
      return deal.id === +DealId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected deal to cart data
    cartData.push(deal);
    //updated the cartdeals
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the deal added to cart as true
    deal.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartDeals = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartDeals = [];
    localStorage.clear();
  }







}
