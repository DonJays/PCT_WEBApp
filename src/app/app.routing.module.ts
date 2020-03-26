import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { NavsidebarComponent } from './navsidebar/navsidebar.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './entities/dashboard/dashboard.component';
// import { AdminComponent } from './admin/admin.component';
// import { LandingComponent } from './landing/landing.component';
import { PortalquestionsComponent } from './entities/portalquestions/portalquestions.component';
// import { GoliveComponent } from './golive/golive.component';
// import { SleepingroomtypesComponent } from './sleepingroomtypes/sleepingroomtypes.component';
// import { FunctiontypesComponent } from './functiontypes/functiontypes.component';

const routes: Routes = [
    { path: '', component: LoginComponent },

    { path: 'dashboard', component: DashboardComponent },
    { path: 'portalquestions', component: PortalquestionsComponent },
    // { path: '', component: AdminComponent },
    // { path: 'golive', component: GoliveComponent },
    // { path: 'portalquestions', component: PortalquestionsComponent },
    // { path: 'landing', component: LandingComponent },
    // { path: 'navsidebar', component: NavsidebarComponent },
    // { path: 'sleepingroomtypes', component: SleepingroomtypesComponent },
    // { path: 'functiontypes', component: FunctiontypesComponent }
    // {path:'dashboard', component: DashboardComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule, RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
