import { RouterModule } from '@angular/router';
import { AppErrorHandler } from './constants/app-error-handler';
import { DirectivesComponent } from './directives/directives.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { JsonPlaceholderService } from './service/json-placeholder.service';
import { RoutingAndNavigationComponent } from './routing-and-navigation/routing-and-navigation.component';
import { HomeComponent } from './navigation/home/home.component';
import { GithubProfileComponent } from './navigation/github-profile/github-profile.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { GithubFollowersComponent } from './navigation/github-followers/github-followers.component';
import { PostComponent } from './navigation/post/post.component';
import { AnimationComponent } from './animation/animation.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
//Angular Material importers

import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';



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
    ConsumeHttpServiceComponent,
    RoutingAndNavigationComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    PostComponent,
    AnimationComponent,
    AngularMaterialComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'profile/:username', component:GithubProfileComponent},
      {path:'followers', component:GithubFollowersComponent},
      {path:'post', component:PostComponent},
      {path:'**', component:NotFoundComponent}
    ])
  ],
  providers: [
    CoursesService,
    JsonPlaceholderService,
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
