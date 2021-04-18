import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Deal } from 'src/app/model/Deal';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-viewdeal',
  templateUrl: './viewdeal.component.html',
  styleUrls: ['./viewdeal.component.css']
})
export class ViewdealComponent implements OnInit {

  @Input()
  deal: Deal;

  @Output()
  dealDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router
    ) { }

  ngOnInit() {
  }

  deleteDeal() {
    this.httpClientService.deleteDeal(this.deal.id).subscribe(
      (deal) => {
        this.dealDeletedEvent.emit();
        this.router.navigate(['admin', 'deal']);
      }
    );
  }

  editDeal() {
    this.router.navigate(['admin', 'deals'], { queryParams: { action: 'edit', id: this.deal.id } });
  }


}
