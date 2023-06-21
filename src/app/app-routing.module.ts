import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NoteComponent } from './note/note.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{ path:'navbar',component:NavbarComponent},
{ path:'note',component:NoteComponent},
{path:'update/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
