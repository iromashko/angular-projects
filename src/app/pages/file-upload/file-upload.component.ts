import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  upload(event: any): void {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);

    this.http.post('http://localhost:3001/file', formData).subscribe(
      (d) => {
        console.log(d);
      },
      (error) => console.error(error)
    );
  }
  uploadMultiple(event: any): void {
    const files: FileList = event.target.files;

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      const el = files[i];
      formData.append('files', el);
    }

    this.http.post('http://localhost:3001/multifiles', formData).subscribe(
      (d) => {
        console.log(d);
      },
      (error) => console.error(error)
    );
  }
}
