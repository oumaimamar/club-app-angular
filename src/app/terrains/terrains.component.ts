import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ClubsService} from '../services/clubs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-terrains',
  standalone: false,

  templateUrl: './terrains.component.html',
  styleUrl: './terrains.component.css'
})
export class TerrainsComponent implements OnInit {
  terrains:any;
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator! : MatPaginator;


  constructor(private clubsService : ClubsService,
              private  router : Router) {
  }
  ngOnInit() {
    this.clubsService.getAllTerrains()
      .subscribe({
      next: data => {
        this.terrains = data;

        this.dataSource = new MatTableDataSource(this.terrains);
        this.dataSource.paginator = this.paginator; // Connect paginator to data source

      },
      error: err => {
        console.log(err);
      }
    })
  }

  onUpdate(element:any) {
  }

  onDelete(id:any) {

  }
}
