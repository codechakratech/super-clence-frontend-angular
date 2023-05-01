import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManufactureCreateComponent } from './manufacture/manufacture-create/manufacture-create.component';
import { ManagementCreateComponent } from './management/management-create/management-create.component';
import { SalesCreateComponent } from './sales/sales-create/sales-create.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './Users/user/user.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { DailyManifComponent } from './dailyManif/daily-manif/daily-manif.component';
import { CategoryComponent } from './category/category/category.component';
import { OrderComponent } from './orderr/order/order.component';
import { SubCategoryComponent } from './sub-category/sub-category/sub-category.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { DepartmentComponent } from './Department/department/department.component';
import { WeightComponent } from './Weight/weight/weight.component';

const routes: Routes = [{path:'',component:HomeComponent,pathMatch:'full'},
{path:'manufacture',component:ManufactureCreateComponent},
{path:'management',component:ManagementCreateComponent},
{path:'sales',component:SalesCreateComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{ path:'user', component: UserComponent },
{ path:'employee', component: EmployeeComponent },
{ path: 'dailyManif', component: DailyManifComponent },
{ path: 'category', component: CategoryComponent },
{ path: 'order', component: OrderComponent },
{ path: 'subcategory', component: SubCategoryComponent},
{path:'product',component:ProductCreateComponent},
{path:'department',component:DepartmentComponent},
{path:'weight',component:WeightComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
