import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit,OnChanges {
  public message!: any;
  public progress!: number;
  public files!: FileList;
  @Input() trailerUrl!:string;
  hasFile: boolean = false;
  fileName!: string
  uploadedTrailer!:any
  @Output() public onTrailerUploadFinished = new EventEmitter();
  token:string|null = localStorage.getItem('userToken');

  constructor(private uploadService: HttpClient) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
   if(this.trailerUrl){
      this.hasFile = true;
    this.fileName = this.trailerUrl;
    this.uploadedTrailer = this.trailerUrl;
   }
   
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
          formData.append('file', fileToUpload, "~/Content/video/"+fileToUpload.name);
          this.hasFile = true;
          this.uploadService.post('https://localhost:44369/api/game/UploadGameFiles', formData, {headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` }), reportProgress: true, observe: 'events' })
            .subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total!);
              else if (event.type === HttpEventType.Response) {
                this.message = 'Upload success.';
                this.uploadedTrailer ='';
                this.onTrailerUploadFinished.emit(fileToUpload.name);
                let Trailer:string|any = event.body;
                let element = document.getElementById("Video");
                element?.setAttribute("src" ,Trailer);
              }
            });
        }
     
    }
    return;
  }
}
