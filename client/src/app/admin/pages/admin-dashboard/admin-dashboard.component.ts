import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 

  constructor() { }
  ngOnInit() {
     // Update the AdminLTE layouts
    AdminLTE.init();
    // Make the dashboard widgets sortable Using jquery UI
    
    /* The todo list plugin */
    /*
    jQuery('.todo-list').todolist({
      onCheck: function (ele) {
        window.console.log('The element has been checked');
        return ele;
      },
      onUncheck: function (ele) {
        window.console.log('The element has been unchecked');
        return ele;
      }
    });*/

  }

}
