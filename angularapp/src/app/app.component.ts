import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './services/data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';
  // displayedColumns: string[] = ['currency', 'change', 'shortname', 'purchaseprice', 'saleprice'];
  // dataSource!: MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dataService: DataService){
  

  }
  ngOnInit(): void {
    this.getList
  }
  getList(){
    this._dataService.getList().subscribe({
      next: (res) =>{
        console.log(res);
        // this.dataSource = new MatTableDataSource(res);
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
        
      },
      error: (err)=>
      {
        console.log(err);
        
      }
    })
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
