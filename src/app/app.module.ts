import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterComponent } from './core/pages/master/master.component';
import { IndexComponent } from './core/pages/index/index.component';
import { IndexSingleComponent } from './core/pages/index-single/index-single.component';
import { ContactOneComponent } from './core/pages/contact-one/contact-one.component';
import { DocumentationComponent } from './core/pages/documentation/documentation.component';
import { ClientsLogoComponent } from './core/components/clients-logo/clients-logo.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    IndexComponent,
    IndexSingleComponent,
    ContactOneComponent,
    DocumentationComponent,
    ClientsLogoComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
