import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input ,OnChanges } from '@angular/core';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit ,OnChanges {
  public message!: any;
  public progress!: number;
  public files!: FileList;
  @Input() photoUrl!:any;
  hasFile: boolean = false;
  fileName!: string
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private uploadService: HttpClient) { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.hasFile = true;
    this.fileName = this.photoUrl
  }


  public uploadFile = (files: FileList) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];

    if ((fileToUpload.type === 'image/jpeg' ||
      fileToUpload.type === 'image/png' ||
      fileToUpload.type === 'image/jpg')) {
      
        if(fileToUpload.size < 5566360){

          this.fileName = fileToUpload.name;
          const formData = new FormData();
          formData.append('file', fileToUpload, "/Content/images/Games/"+fileToUpload.name);
          this.hasFile = true;

          this.uploadService.post('https://localhost:44369/api/game/UploadGameFiles', formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
              if (event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total!);
              else if (event.type === HttpEventType.Response) {
                this.message = 'Upload success.';
                this.onUploadFinished.emit(fileToUpload.name);
              }
            });

        }
    
    }
    return;
  }
}
