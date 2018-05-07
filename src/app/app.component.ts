import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator,MatTableDataSource, MatSort, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns = ['slno','name','groupName','brandName','tax','openingStock','minStock','currentStock','action'];
  dataSource = new MatTableDataSource<Item>(ELEMENT_DATA);
  newItem:Item;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public snackBar: MatSnackBar) {}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.newItem = new Item();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  addItem(){
    if(this.newItem.slno == null){
      this.newItem.slno = (this.dataSource.data.length!=0)?this.dataSource.data.length+1:1;
      this.dataSource.data.push(this.newItem);
    }
    this.newItem = new Item();
    this.dataSource._updateChangeSubscription();
    this.snackBar.open("Items Updated Successfully","close", {
      duration: 2000,
    });
  }
  editItem(element){
    this.newItem = new Item();
    this.newItem = element;
  }
  deleteItem(element){
    this.dataSource.data.map((val,i)=>{
      if(element.slno == val.slno){
        this.dataSource.data.splice(i,1);
      }
    })
    this.dataSource._updateChangeSubscription();
    this.snackBar.open("Items Deleted Successfully","close", {
      duration: 2000,
    });
  }
}
export class Item {
  slno: number;
  name: string;
  groupName: string;
  brandName: string;
  tax:number;
  openingStock:number;
  minStock:number;
  currentStock:number;
}

const ELEMENT_DATA: Item[] = [
  {slno: 1, name: 'Baby Food', groupName: "Baby Food/Items", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 2, name: 'Diapers', groupName: "Baby Food/Items", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 3, name: 'Formula', groupName: "Baby Food/Items", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 4, name: 'Bagels', groupName: "Bakery", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 5, name: 'Bread', groupName: "Bakery", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 6, name: 'Cookies', groupName: "Bakery", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 7, name: 'Croissants', groupName: "Bakery", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 8, name: 'Donuts', groupName: "Bakery", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 9, name: 'Hot Dog Buns', groupName: "Bakery", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 10, name: 'Rolls', groupName: "Bakery", brandName: 'Food bazaar', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 11, name: 'Aluminum Foil', groupName: "Kitchen", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 12, name: 'Non-stick Spray', groupName: "Kitchen", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 13, name: 'Paper Towels', groupName: "Kitchen", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 14, name: 'Plastic Wrap', groupName: "Kitchen", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 15, name: 'Sandwich Bags', groupName: "Kitchen", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 16, name: 'Elbows', groupName: "Pasta/Sauce", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 17, name: 'Grated Parmesan', groupName: "Pasta/Sauce", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 18, name: 'Red Pasta Sauce', groupName: "Pasta/Sauce", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 19, name: 'Spaghetti Noodles', groupName: "Pasta/Sauce", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
  {slno: 20, name: 'White Pasta Sauce', groupName: "Pasta/Sauce", brandName: 'Galaxy', tax:5, openingStock:1000, minStock:10,currentStock:100},
];