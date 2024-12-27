import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../configuration/services/hero.service';
import { HeroT } from '../configuration/model/Hero';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent implements OnInit {
  action: string = 'Add';
  hero: HeroT[] = [];

  private _hs = inject(HeroService);

  ngOnInit(): void {
    this._hs.get().subscribe((heroes: HeroT[]) => {
      this.hero = heroes;
    });
  }

  private get() {
    this._hs.get().subscribe((heroes: HeroT[]) => {
      this.hero = heroes;
    });
  }
}
