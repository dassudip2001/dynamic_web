import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-our-work',
  imports: [],
  templateUrl: './our-work.component.html',
  styles: ``,
})
export class OurWorkComponent {
  @Input() isOpened: boolean = false;
  @Input() title: string = '';
  @Output() modalClose = new EventEmitter<void>();

  action: string = 'Add'; // Add or Edit
  onClose() {
    this.modalClose.emit();
  }
}
