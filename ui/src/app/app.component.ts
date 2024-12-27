import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './shared/navigation/header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent implements OnInit {
  title = 'wen_page';

  ngOnInit(): void {
    initFlowbite();
  }
}
