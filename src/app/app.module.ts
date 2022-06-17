import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatheusTasksComponent } from './matheus-tasks/matheus-tasks.component';
import { MatheusHomeComponent } from './matheus-home/matheus-home.component';
import { MatheusTasksService } from './matheus-tasks.service';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {path: '', component: MatheusHomeComponent},
    {path: 'tasks', component: MatheusTasksComponent}
  ])],
  declarations: [
    AppComponent,
    HelloComponent,
    MatheusTasksComponent,
    MatheusHomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MatheusTasksService],
})
export class AppModule {}
