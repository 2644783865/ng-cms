import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { InterceptorService } from './services/interceptor-service/interceptor.service';
import { AuthService } from './services/auth-service/auth.service';
import { CanActivateAdmin } from './guards/admin.guard';
import { CanActivateEditor } from './guards/editor.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    routing
  ],
  providers: [
    InterceptorService,
    AuthService,
    CanActivateAdmin,
    CanActivateEditor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
