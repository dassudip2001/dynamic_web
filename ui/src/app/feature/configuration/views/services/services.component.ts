import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesT } from '../../model/Hero';

@Component({
  selector: 'app-services',
  imports: [FormsModule],
  templateUrl: './services.component.html',
  styles: ``,
})
export class ServicesComponent {
  @Input() isOpened: boolean = false;
  @Input() title: string = '';
  @Output() modalClose = new EventEmitter<void>();

  action: string = 'Add'; // Add or Edit

  // service form
  serviceModal: ServicesT = {
    name: '',
    description: '',
    image_url: '',
  };

  onClose() {
    this.modalClose.emit();
  }

  // service form
  onSave() {
    console.log(this.serviceModal);
    if (this.action === 'Add') {
      this.postServices();
      // add service
    } else {
      this.updateService();
    }
  }
  private postServices() {
    // post service
  }

  private updateService() {
    // update service
  }
}
