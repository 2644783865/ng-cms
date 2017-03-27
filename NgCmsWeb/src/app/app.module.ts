import { MainRootModule } from './routes/main/main-root.module';
import { RouteResolve } from './resolvers/route.resolve';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { InterceptorService } from './services/interceptor-service/interceptor.service';
import { AuthService } from './services/auth-service/auth.service';
import { GrowlService } from './services/growl-service/growl.service';
import { EmitterService } from './services/emitter-service/emitter.service';
import { CanActivateAdmin } from './guards/admin.guard';
import { ContentService } from './services/content-service/content.service';
import { RouteService } from './services/route-service/route.service';
import { NotFoundModule } from './routes/not-found/not-found.module';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MainRootModule,
    NotFoundModule,
    routing
  ],
  providers: [
    InterceptorService,
    AuthService,
    GrowlService,
    EmitterService,
    CanActivateAdmin,
    RouteResolve,
    ContentService,
    RouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
