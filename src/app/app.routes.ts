import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { UserComponent } from './Pages/user/user.component';
import { SettingComponent } from './Pages/setting/setting.component';
import { User1Component } from './Pages/user/SubContent/user1/user1.component';
import { User2Component } from './Pages/user/SubContent/user2/user2.component';
import { Setting1Component } from './Pages/setting/setting1/setting1.component';
import { Setting2Component } from './Pages/setting/setting2/setting2.component';
import { Home1Component } from './Pages/dashboard/Subcomponent/home1/home1.component';
import { Home2Component } from './Pages/dashboard/Subcomponent/home2/home2.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component: DashboardComponent,
                children:[
                    {
                        path: '',
                        redirectTo: 'home1',
                        pathMatch: 'full'
                      },
                    {
                        path:'home1',
                        component: Home1Component
                    },
                    {
                        path:'home2',
                        component: Home2Component
                    }
                ]
            },
            {
                path:'user',
                component: UserComponent,
                children: [
                    {
                        path:'user1',
                        component: User1Component
                    },
                    {
                        path: 'user2',
                        component: User2Component
                    }
                ]
            },
            {
                path:'setting',
                component: SettingComponent,
                children:[
                    {
                        path:'setting1',
                        component: Setting1Component
                    },
                    {
                        path:'setting2',
                        component:Setting2Component
                    }
                ]
            }
        ]
    }
];
