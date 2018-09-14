import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app.shared.module';
import { AuthModule } from './auth/auth.module';
import { WebService } from './services/webservices';
import { AuthGuard } from './services/auth-guard.service';
import { CanAuthGuard } from './services/can-auth-guard.service';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppSharedModule,
    AuthModule,
    AdminModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    WebService,
    AuthGuard,
    CanAuthGuard
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
