import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneDayComponent } from './one-day/one-day.component';
import { WeekComponent } from './week/week.component';

const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full' },
    {path: 'main', component: WeekComponent},
    {path: 'day/:id', component: OneDayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
