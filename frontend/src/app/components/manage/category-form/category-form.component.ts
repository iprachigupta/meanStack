import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit , OnDestroy{
  name!: string;
  isEdit: boolean = false;
  id!: string;
  private destroy$ = new Subject<void>(); 

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.categoryService.getCategoryById(this.id).subscribe((result) => {
        this.name = result.category.name;
        // alert("Category updated");
        // this.router.navigateByUrl('/admin/categories');
      });
    }
  }

  add() {
    this.categoryService.addCategory(this.name).pipe(takeUntil(this.destroy$)).subscribe((result: any) => {
      alert('Category added');
      this.router.navigateByUrl('/admin/categories');
    });
  }

  update() {
    this.categoryService
      .updateCategory(this.id, this.name)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: any) => {
        alert('Category updated');
        this.router.navigateByUrl('/admin/categories');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
