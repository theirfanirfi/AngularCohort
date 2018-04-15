import { DataServiceService } from './data-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule, Router} from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
const appRoutes: Routes = [


{
  path: 'add',
  component: AddNewComponent
},
{
  path: 'update/:id',
  component: UpdateComponent
}
,
{
  path: 'delete/:did',
  component: DeleteComponent
}
,
{
  path: 'home',
  component: HomeComponent
}
,
{
  path: '',
  component: HomeComponent
},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNewComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
