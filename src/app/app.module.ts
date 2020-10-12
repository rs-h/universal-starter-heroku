import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {CourseComponent} from './course/course.component';
import {CoursesService} from './services/courses.service';
import {CourseResolver} from './services/course.resolver';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SpacexService } from './services/spacex.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    CourseResolver,
    SpacexService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
