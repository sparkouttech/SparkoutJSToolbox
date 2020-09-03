import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

interface ListModel {
  "userId": number;
  "id": number;
  "title": string;
  "body": string;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  public list:Array<ListModel>;

  constructor(
    private appService:AppService
  ) { }

  ngOnInit(): void {
    this.list = [];
    this.getAllList();
  }

  getAllList():void{
    this.appService.getAllList().subscribe((response:Array<ListModel>)=>{
      this.list = response.splice(0,10);
    })
  }

  postNewData(title:string):void{
    const newData = {
      title
    }
    this.appService.postList(newData).subscribe((response)=>{
      this.list.push(response);
    })
  }

}
