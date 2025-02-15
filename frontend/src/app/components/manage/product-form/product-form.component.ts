import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
import { Brand } from 'src/app/types/brand';
import { Category } from 'src/app/types/category';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  isEdit: boolean = false;
  id!: string;
  private destroy$ = new Subject<void>();
  productForm!: FormGroup;
  brands: Brand[] = [];
  categories: Category[] = [];

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  get images(): FormArray {
    return this.productForm.get('images') as FormArray;
  }

  addImage(url: string = '') {
    this.images.push(this.fb.control(url));
  }

  removeImage(index: number) {
    if (this.images.length > 1) {
      this.images.removeAt(index);
    }
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      shortDesc: ['', [Validators.required, Validators.minLength(20)]],
      description: ['', Validators.required],
      price: [null, [Validators.required]],
      discount: [null],
      rating: [null],
      images: this.fb.array([this.fb.control('')]),
      categoryId: [null, [Validators.required]],
      brandId: [null, [Validators.required]],
    });
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories.categories;
    });
    this.brandService.getBrands().subscribe((brands) => {
      this.brands = brands;
    });

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.productService.getProductById(this.id).subscribe((result) => {
        for (let i = 0; i < result.images.length; i++) {
          this.addImage();
        }
        this.productForm.patchValue(result);
      });

    } else {
      this.addImage();
    }
  }

  add() {
    const value = this.productForm.value;
    this.productService
      .addProduct(value as any)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        console.log(result);
        alert('Product added');
        this.router.navigateByUrl('/admin/product');
      });
  }

  update() {
    const value= this.productForm.value;
    this.id = this.route.snapshot.params['id'];
    this.productService
      .updateProduct(this.id, value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        console.log(result);
        alert('Product updated');
        this.router.navigateByUrl('/admin/product');
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
