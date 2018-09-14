import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  skin = 'skin-blue';
  bodyClasses = 'sidebar-mini';

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private _location: Location) {


  }

  goBack() {
    this._location.back();
  }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add(this.skin);
    this.body.classList.add(this.bodyClasses);
  }

  ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove(this.skin);
    this.body.classList.remove(this.bodyClasses);
  }

}
