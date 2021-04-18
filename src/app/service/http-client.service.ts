import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Deal } from '../model/Deal';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient:HttpClient
    ) { }

    getUsers()
    {
      return this.httpClient.get<User[]>('http://localhost:8081/users/get');
    }

    addUser(newUser: User) {
      return this.httpClient.post<User>('http://localhost:8081/users/add', newUser);   
    }


    deleteUser(id) {
      return this.httpClient.delete<User>('http://localhost:8081/users/' + id);
    }

    getDeals() {
      return this.httpClient.get<Deal[]>('http://localhost:8081/deals/get');
    }

    addDeal(newDeal: Deal) {
      return this.httpClient.post<Deal>('http://localhost:8081/deals/add', newDeal);
    }

    deleteDeal(id) {
      return this.httpClient.delete<Deal>('http://localhost:8081/deals/' + id);
    }

    updateDeal(updatedDeal: Deal) {
      return this.httpClient.put<Deal>('http://localhost:8081/deals/update', updatedDeal);
    }
  }

