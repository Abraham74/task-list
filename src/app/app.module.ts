import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms'
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes:Routes = [
  {path: '', component: TasksComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({ declarations: [
        AppComponent,
        HeaderComponent,
        ButtonComponent,
        TasksComponent,
        TasksItemComponent,
        AddTaskComponent,
        AboutComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FontAwesomeModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
