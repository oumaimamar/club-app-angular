import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-terrains',
  standalone: false,

  templateUrl: './terrains.component.html',
  styleUrl: './terrains.component.css'
})
export class TerrainsComponent implements OnInit {
  terrains:any

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8888/INVENTORY-SERVICE/terrains").subscribe({
      next: data => {
        this.terrains = data;

      },
      error: err => {
        console.log(err);
      }
    })
  }

}
