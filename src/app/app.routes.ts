import { Routes } from '@angular/router';
import { LandingPageComponent } from './LandingPage/LandingPage.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { CarcomponentComponent } from './Carcomponent/Carcomponent.component';
import { ServicescomponentComponent } from './LandingPage/servicescomponent/servicescomponent.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { DashboardComponentComponent } from './Dashboard-component/Dashboard-component.component';
import { TemplatedrivenformComponentComponent } from './templatedrivenform-component/templatedrivenform-component.component';
import { studentguardGuard } from './guard/studentguard.guard';
import { ReactiveFromComponentComponent } from './reactiveFrom-component/reactiveFrom-component.component';
import { Sign1Component } from './sign1-component/sign1-component.component';
import { BehaviorParentComponentComponent } from './behavior-parent-component/behavior-parent-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { SignupComponent } from './signup4-component/signup4-component.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { EventParentComponentComponent } from './event-parent-component/event-parent-component.component';
import { EventChildComponentComponent } from './event-child-component/event-child-component.component';
import { BackendComponentComponent } from './backend-component/backend-component.component';
import { NewAppComponent } from './new-App/new-App.component';



export const routes: Routes = [
    {path : 'home',component:LandingPageComponent},
    {path:'eventp',component:EventParentComponentComponent},
    {path:'eventc',component:EventChildComponentComponent},
    {path:'backend',component:BackendComponentComponent},
    {path:'New-App',component:NewAppComponent},

    {path : 'sign1', component:Sign1Component},
    {path:'temp',component:TemplatedrivenformComponentComponent},
    {path: 'react', component: ReactiveFromComponentComponent},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path :'services',component:ServicescomponentComponent},
    {path :'behaviorp',component:BehaviorParentComponentComponent},
    {path :'signup4',component:SignupComponent},
    {path :'parent',component:ParentComponentComponent},
    {path :'pipe',component:PipeComponentComponent},


    
    {path: 'signup',component:SignUpComponentComponent},
    {path: 'signin',component:SignInComponentComponent},
    {path:'simple', children:[
        {path:'',  component:LandingPageComponent}, 
        {path:'deposit', component:LandingPageComponent},
        {path:'i', component:LandingPageComponent}
    ]},
    {path: 'dashboard1', children:[
        {path:'', component:DashboardComponentComponent},
        // {path:'setting', component: settingComponent}

    ],canActivate:[studentguardGuard]},
    {path:'display/:index', component:DisplaycontactComponent},
   
    {path:'Car', component:CarcomponentComponent},
    {path:'**', component:ErrorpageComponent}
];
 