import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { OurWorkService } from '../../services/our-work.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
export interface UploadResponse {
  uploadResult: UploadResult;
  optimizeUrl: string;
  autoCropUrl: string;
}

export interface UploadResult {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  asset_folder: string;
  display_name: string;
  original_filename: string;
  api_key: string;
}

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
  previewUrl!: UploadResponse;

  #_fileUploadService = inject(FileUploadService);
  #ourWorkService = inject(OurWorkService);
  #_fb = inject(FormBuilder);

  ourWorkForm = this.#_fb.group({
    title: new FormControl('', Validators.required),
    subtitle: new FormControl(''),
    description: new FormControl(''),
    image_url: new FormControl(''),
  });

  action: string = 'Add'; // Add or Edit
  onClose() {
    this.modalClose.emit();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    console.log(file);
    if (file) {
      this.#uploadFile(file);
    }
  }

  #uploadFile(file: File) {
    this.#_fileUploadService.uploadFile(file).subscribe((res) => {
      console.log(res);
      this.previewUrl = res as UploadResponse;
    });
  }

  #createWork() {}
}
