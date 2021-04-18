import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deal } from 'src/app/model/Deal';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-adddeal',
  templateUrl: './adddeal.component.html',
  styleUrls: ['./adddeal.component.css']
})
export class AdddealComponent implements OnInit {

  @Input()
  deal: Deal;

  @Output()
  dealAddedEvent = new EventEmitter();

  private selectedFile;
  imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  saveDeal() {
    if (this.deal.id == null) {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient.post('http://localhost:8081/deals/upload', uploadData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.httpClientService.addDeal(this.deal).subscribe(
            (deal) => {
              this.dealAddedEvent.emit();
              this.router.navigate(['admin', 'deals']);
            }
          );
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      }
      );
    } else {
      this.httpClientService.updateDeal(this.deal).subscribe(
        (deal) => {
          this.dealAddedEvent.emit();
          this.router.navigate(['admin', 'deal']);
        }
      );
    }
  }
}
