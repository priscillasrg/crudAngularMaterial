import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersModule } from '../pages/users/users.module';
import { HomeModule } from '../pages/home/home.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'users', loadChildren: () => UsersModule },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
