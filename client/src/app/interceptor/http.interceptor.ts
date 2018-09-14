import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter, tap } from 'rxjs/operators';



@Injectable()
export class CustomInterceptor implements HttpInterceptor {
    public msg;
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // start our loader here
        //        alert('here');
        // this._loading.show();

        if (localStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    // authorization: localStorage.getItem('token'),
                    'Authorization': 'JWT ' + localStorage.getItem('token')
                }
            });
        }

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            // if the event is for http response
            // alert(1);

            if (event instanceof HttpResponse) {

                // this._loading.hide();
            }

        }, (err: any) => {
            console.log('Error', err);
            // if any error (not for just HttpResponse) we stop our loader bar
            // this._loading.hide();
            keys = Object.keys(err.error);

            if (err.status === 400) {
                let error = 'Error, Please try again later';

                var keys = Object.keys(err.error);
                if (keys) {
                    error = '';
                    keys.forEach((value) => {
                        error += err.error[value][0] + ' ,';
                    });
                }
                //   this.cms.showError(error);

                // location.reload();
            }
            if (err.statusText === 'Unauthorized' && err.status === 401) {
                localStorage.clear();
                location.reload();
            }
            return true;
        }
        )
        );
    }

}
