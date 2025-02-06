import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit, OnDestroy, AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<any>;
  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private brandService: BrandService) {
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit(): void {
    this.getServerData();
  }

  private getServerData() {
    this.brandService.getBrands().subscribe((result: any) => {
      this.dataSource.data = result;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteBrand(id: string) {
    const deleteSubscription = this.brandService
      .deleteBrand(id)
      .subscribe(() => {
        alert('Brand deleted');
      });
    this.subscriptions.push(deleteSubscription);
    this.getServerData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
