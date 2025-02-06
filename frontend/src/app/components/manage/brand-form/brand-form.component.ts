import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss'],
})
export class BrandFormComponent {
  name!: string;
  isEdit: boolean = false;
  id!: string;
  private destroy$ = new Subject<void>();

  constructor(
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.brandService.getBrandById(this.id).subscribe((result) => {
        this.name = result.name;
      });
    }
  }

  add() {
    this.brandService
      .addBrand(this.name)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: any) => {
        alert('Category added');
        this.router.navigateByUrl('/admin/brand');
      });
  }

  update() {
    this.brandService
      .updateBrand(this.id, this.name)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: any) => {
        alert('Category updated');
        this.router.navigateByUrl('/admin/brand');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
