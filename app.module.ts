import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { Cards4Component } from './cards4/cards4.component';
import { ChartComponent } from './chart/chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ProjectsComponent } from './projects/projects.component';
import { ColorSystemComponent } from './color-system/color-system.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { ApproachComponent } from './approach/approach.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { PageContentComponent } from './page-content/page-content.component';
import { TitleCardsComponent } from './cards/title-cards/title-cards.component';
import { ColorsComponent } from './colors/colors.component';
import { CustomComponent } from './colors/custom/custom.component';
import { GradientComponent } from './colors/gradient/gradient.component';
import { GrayscaleComponent } from './colors/grayscale/grayscale.component';
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
import { TablesComponent } from './tables/tables.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DashChartsComponent } from './dash-charts/dash-charts.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardsComponent,
    HomeComponent,
    TopbarComponent,
    Cards4Component,
    ChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    ProjectsComponent,
    ColorSystemComponent,
    IllustrationsComponent,
    ApproachComponent,
    FooterComponent,
    ButtonsComponent,
    PageContentComponent,
    TitleCardsComponent,
    ColorsComponent,
    CustomComponent,
    GradientComponent,
    GrayscaleComponent,
    BordersComponent,
    AnimationsComponent,
    OthersComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ErrorComponent,
    BlankComponent,
    AuthComponent,
    DashboardComponent,
    TablesComponent,
    BarChartComponent,
    DashChartsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
