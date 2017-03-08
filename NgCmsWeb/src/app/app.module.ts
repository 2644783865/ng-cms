import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { LoginModule } from './routes/login/login.module';
import { RegisterModule } from './routes/register/register.module';
import { MemberModule } from './routes/member/member.module';
import { AdminModule } from './routes/admin/admin.module';
import { InterceptorService } from './services/interceptor-service/interceptor.service';
import { AuthService } from './services/auth-service/auth.service';
import { CanActivateAdmin } from './guards/admin.guard';
import { CanActivateMember } from './guards/member.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    routing,
    // Custom modules here
    LoginModule,
    RegisterModule,
    MemberModule,
    AdminModule
  ],
  providers: [
    InterceptorService,
    AuthService,
    CanActivateAdmin,
    CanActivateMember
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
