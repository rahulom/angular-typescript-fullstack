import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { SpinnerService } from '../components/spinner-component/spinner.service';

var objectToFormData = function(obj, form?, namespace?) {
    
    var fd = form || new FormData();
    var formKey;
    
    for(var property in obj) {
      if(obj.hasOwnProperty(property)) {
        
        if(namespace) {
          formKey = namespace + '[' + property + ']';
        } else {
          formKey = property;
        }
       
        // if the property is an object, but not a File,
        // use recursivity.
        if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
          
          objectToFormData(obj[property], fd, property);
          
        } else {
          
          // if it's a string or a File object
          fd.append(formKey, obj[property]);
        }
        
      }
    }
    
    return fd;
      
  };

@Injectable()
export class WebService {


    constructor(
        private http: HttpClient,
        // private loader: SpinnerService
    ) {

    }

    get(api: string, params?: any): Observable<any> {
        // this.loader.show();
        return this.http.get(environment.apiBase + api, { params: params });
    }
    delete(api: string): Observable<any> {
        // this.loader.show();
        return this.http.delete(environment.apiBase + api);
    }
    converToFormData(data: any) {
        // var formData = new FormData();
        // if (typeof data === "object") {
        //     for (let d in data) {
        //         formData.append(d, data[d]);
        //     }
        // }
        return objectToFormData(data);
    }

    putFormData(api: string, data: any) {
        return this.put(api, this.converToFormData(data));
    }

    postFormData(api: string, data: any) {
        return this.post(api, this.converToFormData(data));
    }

    post(api: string, data: any): Observable<any> {
        // this.loader.show();
        return this.http.post(environment.apiBase + api, data)
    }
    put(api: string, data: any): Observable<any> {
        // this.loader.show();
        return this.http.put(environment.apiBase + api, data);
    }

}
