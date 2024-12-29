import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesT } from '../../model/Hero';
import { OurServicesService } from '../../services/our-services.service';
import { ToastrService } from 'ngx-toastr';

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
  recordId!: number;

  #_os = inject(OurServicesService);
  #_ts = inject(ToastrService);

  // service form
  serviceModal: ServicesT = {
    name: '',
    description: '',
  };

  onClose() {
    this.modalClose.emit();
  }

  // service form
  onSave() {
    console.log(this.serviceModal);
    if (this.action === 'Add') {
      this.postServices();
      // add servicedoc
    } else {
      this.updateService();
    }
  }
  private postServices() {
    // post service
    this.#_os.create(this.serviceModal).subscribe(
      (res) => {
        this.#_ts.success('Service added successfully');
        this.serviceModal = {
          name: '',
          description: '',
        };
      },
      (err) => {
        this.#_ts.error('Error adding service');
      }
    );
  }

  private updateService() {
    // update service
  }
}
