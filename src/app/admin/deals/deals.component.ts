import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deal } from 'src/app/model/Deal';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  deals: Array<Deal>;
  selectedDeal: Deal;
  action: string;
  dealsRecieved: Array<Deal>;

  
  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.refreshData();
   }

refreshData()
{
  this.httpClientService.getDeals().subscribe(
    response => this.handleSuccessfulResponse(response)
  );
  this.activedRoute.queryParams.subscribe(
    (params) => {
      // get the url parameter named action. this can either be add or view.
      this.action = params['action'];
// get the parameter id. this will be the id of the deal whose details 
// are to be displayed when action is view.
const id = params['id'];
// if id exists, convert it to integer and then retrive the deal from
// the deals array
      if (id) {
        this.selectedDeal = this.deals.find(deal => {
          return deal.id === +id;
        });
      }
    }
  );
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
      //populate retrieved image field so that deal  image can be displayed
      dealwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + deal.picByte;
      dealwithRetrievedImageField.description = deal.description;
      dealwithRetrievedImageField.price = deal.price;
      dealwithRetrievedImageField.picByte=deal.picByte;
      this.deals.push(dealwithRetrievedImageField);
    }
  }

   addDeal() {
    this.selectedDeal = new Deal();
    this.router.navigate(['admin', 'deals'], { queryParams: { action: 'add' } });
  }


  viewDeal(id: number) {
    this.router.navigate(['admin', 'deals'], { queryParams: { id, action: 'view' } });
  }
}
