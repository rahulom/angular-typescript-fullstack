import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { AuthServices } from '../../services/auth-services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { CommonMessageService } from '../../../components/common-message/common-message.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    errorMessage: string = '';
    constructor(
        private router: Router,
        // private as: AuthServices,
        // private commonMessage: CommonMessageService
    ) { }



    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', Validators.required)
        });
        if (localStorage.getItem('adminLoggedIn')) {
            return false;
        }
    }



    showMessage(message: string) {
        // this.commonMessage.showError(message);
    }

    login() {
        // 
        if (this.loginForm.valid) {

            // this.as.getLogin(this.loginForm.value).subscribe((response) => {
            //      if(response.status==1){
            //             localStorage.setItem('token',response.data.token);
            //             localStorage.setItem('userData',JSON.stringify(response.data));
            //             this.router.navigate(['/dash-board']);
            //      }
            //      else{
            //         this.showMessage(response.error);
            //      }


            // });
        }
        else {
            this.showMessage('Username and password required');
        }

    }

}
