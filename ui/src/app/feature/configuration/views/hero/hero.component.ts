import { AfterViewInit, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ServicesComponent } from '../services/services.component';
import { OurWorkComponent } from '../our-work/our-work.component';
import { HeroService } from '../../services/hero.service';
import { ToastrService } from 'ngx-toastr';
import { HeroT } from '../../model/Hero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ServicesComponent, OurWorkComponent, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent implements AfterViewInit {
  action: string = 'Add';
  isServiceModalOpen: boolean = false;
  isWorkModalOpen: boolean = false;
  recordId!: number;

  #fb = inject(FormBuilder);
  #_hs = inject(HeroService);
  #_ts = inject(ToastrService);
  #_activatedRoute = inject(ActivatedRoute);
  #router = inject(Router);

  ngAfterViewInit(): void {
    this.recordId = this.#_activatedRoute.snapshot.params['id'];

    if (this.recordId) {
      this.action = 'Edit';
      this.#_hs.find(this.recordId).subscribe((res) => {
        this.heroSectionForm.patchValue(res);
      });
    }
    console.log(this.recordId);
  }
  heroSectionForm = this.#fb.group({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  onSubmit() {
    console.log(this.heroSectionForm.value);
    if (!this.heroSectionForm.valid) {
      this.#_ts.error('Please fill all the required fields');
      return;
    }

    if (this.action === 'Add') this.#createHeroSection();
    else this.#updateHeroSection();
  }

  openServiceModal() {
    this.isServiceModalOpen = true;
  }

  closeServiceModal() {
    this.isServiceModalOpen = false;
  }

  openWorkModal() {
    this.isWorkModalOpen = true;
  }

  closeWorkModal() {
    this.isWorkModalOpen = false;
  }

  #createHeroSection() {
    this.#_hs.create(this.heroSectionForm.value as HeroT).subscribe(
      (res) => {
        this.#_ts.success('Hero Section created successfully');
        this.#router.navigate(['/dashboard']);
      },
      () => {
        this.#_ts.error('Failed to create Hero Section');
      }
    );
  }

  #updateHeroSection() {
    this.#_hs
      .update(this.recordId, this.heroSectionForm.value as HeroT)
      .subscribe({
        next: () => {
          this.#_ts.success('Hero Section updated successfully');
          this.#router.navigate(['/dashboard']);
        },
        error: () => {
          this.#_ts.error('Failed to update Hero Section');
        },
      });
  }
}
