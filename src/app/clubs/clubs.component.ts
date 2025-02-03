import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ClubsService} from '../services/clubs.service';
import {Club} from '../model/terrains.model';

@Component({
  selector: 'app-clubs',
  standalone: false,

  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent implements OnInit {
  clubs!: Array<Club>;


  constructor(private clubsService: ClubsService,private router: Router) {
  }

  ngOnInit() {
    this.clubsService.getClubs()
      .subscribe({
      next: data => {
        this.clubs = data;

      },
      error: err => {
        console.log(err);
      }
    })
  }

  getTerrains(c:any) {
    this.router.navigateByUrl("/admin/club-details/"+ c.code);

  }
}
