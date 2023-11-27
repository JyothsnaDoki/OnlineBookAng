import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

import { AddbookComponent } from './addbook/addbook.component';
import { UpdateComponent } from './update/update.component';
import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"viewbooks",component:ViewbookComponent},
  
 {path:"addbook",component:AddbookComponent},
  {path:"update/:bookid",component:UpdateComponent},
  {path:"profile/:userid",component:ProfileComponent},
  {path:"",component:IndexComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
