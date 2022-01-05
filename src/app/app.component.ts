import { Component } from '@angular/core';
import jsonFile from './_files/title-list.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myProject';
  searchText:any;
  titleList:{
    certifier:{
      _id:string,
      short_name:string,
    }, 
    is_published:boolean,
    long_name:string,
    short_name:string,
    rncp_level:string,
    rncp_level_europe:string,
    _id:string,
  }[]=jsonFile;
  
}
