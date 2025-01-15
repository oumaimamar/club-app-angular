import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clubs',
  standalone: false,

  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent implements OnInit {
  clubs: any;


  constructor(private http: HttpClient,private router: Router) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8888/INVENTORY-SERVICE/clubs").subscribe({
      next: data => {
        this.clubs = data;

      },
      error: err => {
        console.log(err);
      }
    })
  }

  getTerrains(c:any) {
    this.router.navigateByUrl("/club-details/"+ c.code);

  }
}
