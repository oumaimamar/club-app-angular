import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-terrain',
  standalone: false,

  templateUrl: './new-terrain.component.html',
  styleUrl: './new-terrain.component.css'
})
export class NewTerrainComponent implements OnInit {
  terrains: any;
  code!: number;


  constructor(private http: HttpClient,private router: Router,
              private route: ActivatedRoute,) {
    this.code=route.snapshot.params['code'];
  }

  ngOnInit() {
    this.http.get(`http://localhost:8091/clubs/${this.code}/terrains`).subscribe({
      next: data => {
        this.terrains = data;

      },
      error: err => {
        console.log(err);
      }
    })
  }

}