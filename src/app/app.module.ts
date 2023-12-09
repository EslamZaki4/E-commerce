import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { CreditPipe } from './Pipes/credit.pipe';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
//
import { HttpClientModule } from '@angular/common/http';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { UserAuthenticationService } from './user-authantication.service';
import { UserTemplateDrivenFormComponent } from './components/User/user-template-driven-form/user-template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// componetsanddirectivetoseeinginprojects
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ProductsListComponent,
    ImgStyleDirective,
    CreditPipe,
    ProductsParentComponent,
    HomeComponent,
    NotFoundComponent,
    AboutusComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    UserTemplateDrivenFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
  HttpClientModule,
ReactiveFormsModule,


  ],
  providers: [UserAuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
