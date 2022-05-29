import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  categories:any = [
    {id:1, name: 'Development'},
    {id:2, name: 'Art'},
    {id:3, name: 'Languages'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
