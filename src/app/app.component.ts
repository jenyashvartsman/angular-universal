import { Component, OnInit } from '@angular/core';
import { BeersService } from './service/beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  beers: any[] = [];
  search: string;

  constructor(private beersService: BeersService) {
  }

  ngOnInit(): void {
    this.getAllBeers();
  }

  getAllBeers() {
    this.beersService.getAllBeers().subscribe(res => this.beers = res);
  }
}
