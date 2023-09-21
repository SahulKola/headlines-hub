import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
const routes: Routes = [
  {
    path: '',
    component: CardContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'category/:type',
    component: CardContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: CardContainerComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
