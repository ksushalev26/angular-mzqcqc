import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';

const appRoutes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'read', component: ReadComponent
  },
  {
    path: 'update', component: UpdateComponent
  },
  {
    path: 'create', component: CreateComponent
  },
  {
    path: 'delete', component: DeleteComponent
  },
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }