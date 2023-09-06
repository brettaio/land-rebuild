import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/pages/master/master.component';
import { IndexComponent } from './core/pages/index/index.component';
import { IndexSingleComponent } from './core/pages/index-single/index-single.component';
import { DocumentationComponent } from './core/pages/documentation/documentation.component';
import { ContactOneComponent } from './core/pages/contact-one/contact-one.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'single', component: IndexSingleComponent },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'contact-one', component: ContactOneComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
