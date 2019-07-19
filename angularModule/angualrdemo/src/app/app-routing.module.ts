import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PcontentComponent} from './components/pcontent/pcontent.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},

  {path: 'pcontent/:id', component: PcontentComponent},

  {path: '**', redirectTo: 'home'},
  // ng g component components/pcontent
  // {path: 'pcontent', component: PcontentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
