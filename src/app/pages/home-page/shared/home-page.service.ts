import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(
    public http: HttpClient
  ) { }

  async createPost() {
    try {
      await this.http.post('/api/create-posts', { email: 'andrew.1995@outlook.com'})

    } catch (error) {
      console.log('Error ao criar post -->', error);
    }
  }
}
