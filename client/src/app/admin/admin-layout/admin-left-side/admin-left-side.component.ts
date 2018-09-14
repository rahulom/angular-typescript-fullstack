import { Component, OnInit } from '@angular/core';
import { adminLeftMenu } from './admin-menu';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {
  adminMenu=adminLeftMenu;
  constructor() { }

  ngOnInit() {
  }
  logout(){
    localStorage.clear();
    location.reload();
  }
}
