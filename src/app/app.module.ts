import { DirectivesComponent } from './directives/directives.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourceComponent } from './cource/cource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReUsableComponentComponent } from './re-usable-component/re-usable-component.component';
import { InputFormatDirective } from './input-format.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ConsumeHttpServiceComponent } from './consume-http-service/consume-http-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourceComponent,
    SummaryPipe,
    ReUsableComponentComponent,
    DirectivesComponent,
    InputFormatDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ConsumeHttpServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
