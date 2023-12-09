import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsParentComponent } from './components/products-parent/products-parent.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { userGuard } from './Guards/user.guard';
import { UserTemplateDrivenFormComponent } from './components/User/user-template-driven-form/user-template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
//it contain of groupsofobjs
const routes: Routes = [
//defaultpath
{path: '',redirectTo:'/products', pathMatch:'full'},
{path:'home', component:HomeComponent,title: 'HomePage',canActivate:[userGuard]},
{path:'products',component: ProductsListComponent ,title: 'Products List Page'},
{path:'productsParent',component:ProductsParentComponent,title: 'Products Parent Page'},
{path:'aboutus' ,component:AboutusComponent,title: 'Aboutus'},
{path:'productDetails/:id' ,component:ProductDetailsComponent,title: 'product details'},
{path:'userlogin',component:UserAuthComponent,title: 'User Login page'},
{path:'userlogout',component:UserAuthComponent,title: 'User Logout page'},
{path:'useTemplate/new',component:UserTemplateDrivenFormComponent,title:'user Template Form Page' },
{path:'useTemplate/:id',component:UserTemplateDrivenFormComponent,title:'user Template Form Page' },
{path:'reactiveform',component:ReactiveFormComponent ,title: 'Reactive Form'},
{
  path: 'orders',         // promise ....  i had module......name of module
  loadChildren: () => import('./components/orders/orders.module').then(m => m.OrdersModule)
},

{
  path: 'User',         // promise ....  i had module......name of module
  loadChildren: () => import('./components/user-module/user-module.module').then(m => m.UserModuleModule)
},

{path:'**',component:NotFoundComponent,title:"Not Found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
