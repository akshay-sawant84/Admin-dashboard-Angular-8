import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OthersComponent } from './others/others.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ErrorComponent } from './error/error.component';
import { BlankComponent } from './blank/blank.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { TablesComponent } from './tables/tables.component';
import { PageContentComponent } from './page-content/page-content.component';


const routes: Routes = [
   {path: '', component : DashboardComponent, children: [
    {path: '',component:PageContentComponent},
    {path: 'button', component : ButtonsComponent},
    {path : 'cards', component : CardsComponent},
    {path : 'colors', component : ColorsComponent},
    {path : 'borders', component : BordersComponent},
    {path : 'animation', component : AnimationsComponent},
    {path : 'other', component : OthersComponent},
    {path : 'error', component : ErrorComponent},
    {path : 'blank', component : BlankComponent},
    {path:'chart',component:ChartComponent},
    {path:'table',component:TablesComponent}
   ] },
   {path: 'auth', component : AuthComponent,
   children: [{path : 'login', component : LoginComponent},
   {path : 'register', component : RegisterComponent},
   {path : 'forget', component :ForgetPasswordComponent},
   ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
