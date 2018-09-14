import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    loginForm: any = {'username': '', 'password': ''};
    errorMessage: string = '';
    constructor(
        private router: Router,

    ) {}



    ngOnInit() {
      
        if (localStorage.getItem('adminLoggedIn')) {
            return false;
        }
    }

  

    showMessage(message: string) {
        this.errorMessage = message;
        setTimeout(() => {
            this.errorMessage = '';
        }, 4000)
    }

    login() {


//        this.dataService.getLogin(this.loginForm).subscribe((response) => {
//            if (response.meta && response.meta.code === 200) {
//                var rootScope = {
//                    accesstoken: response.data.token
//                }
//                localStorage.setItem('adminLoggedIn', 'true');
//                this.paymentsService.setData(rootScope);
//                this.router.navigate(['/admin']);
//            }
//            else {
//                this.showMessage(response.meta.error);
//
//            }
//        });

    }

}
