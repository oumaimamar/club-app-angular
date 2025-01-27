import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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


  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8888/INVENTORY-SERVICE/terrains").subscribe({
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

}
