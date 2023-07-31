import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'web-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public response$: Observable<unknown>;

  constructor(private readonly http: HttpClient) {
    this.response$ = this.http.get('https://localhost:7029/weatherforecast')
  }
}
