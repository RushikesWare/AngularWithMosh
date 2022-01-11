import { DirectivesComponent } from './directives/directives.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourceComponent } from './cource/cource.component';
import { FormsModule } from '@angular/forms';
import { ReUsableComponentComponent } from './re-usable-component/re-usable-component.component';
import { InputFormatDirective } from './input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourceComponent,
    SummaryPipe,
    ReUsableComponentComponent,
    DirectivesComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
