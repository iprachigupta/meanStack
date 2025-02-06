import { coerceStringArray } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, AfterViewInit , OnDestroy{
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<any>;
  private subscriptions: Subscription[] = [];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private categoryService: CategoryService) {
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit(): void {
    this.getServerData();
  }

  private getServerData() {
    this.categoryService.getCategories().subscribe((result: any) => {
      this.dataSource.data = result.categories;
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

  deleteCategory(id: string) {
    const deleteSubscription = this.categoryService.deleteCategory(id).subscribe((result) => {
      alert('Category deleted');
    });
    this.subscriptions.push(deleteSubscription);
    this.getServerData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}



//you need to unsubscribe all the subscriptions on ngOnDestroy to prevent memory leaks or memory overflow after the component is destroyed.
//there are two methods to do so: 
//1. by creating a subscription array
//2. by using takeUntil and Subject (best practice)