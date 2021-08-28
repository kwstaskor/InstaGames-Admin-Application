import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  public message!: any;
  public progress!: number;
  public files!: FileList;
  hasFile: boolean = false;
  fileName!: string
  uploadedTrailer!:any
  @Output() public onTrailerUploadFinished = new EventEmitter();

  constructor(private uploadService: HttpClient) { }

  ngOnInit(): void {
  }

  public uploadFile = (files: FileList) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];

    if (fileToUpload.type === 'video/mp4' ||
      fileToUpload.type === 'video/mkv')
       {
         
        if(fileToUpload.size < 50663609){
          this.fileName = fileToUpload.name;
          const formData = new FormData();
          formData.append('file', fileToUpload, fileToUpload.name);
          this.hasFile = true;
          this.uploadService.post('https://localhost:44369/api/game/UploadTrailer', formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total!);
              else if (event.type === HttpEventType.Response) {
                this.message = 'Upload success.';
                this.uploadedTrailer = event.body
                this.onTrailerUploadFinished.emit(fileToUpload.name);
              }
            });
        }
     
    }
    return;
  }
}
