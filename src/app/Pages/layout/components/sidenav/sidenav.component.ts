import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from "./subComponent/menu-item/menu-item.component";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule, MenuItemComponent],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  
})
export class SidenavComponent {
  collapsed = signal(false);

  MenuItem = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Home',
      route: 'dashboard',
    },
    { icon: 'person',
      label: 'Users',
      route: 'user',
      subItem:[
        {
          icon: 'person_add',
          label: 'User1',
          route: 'user1'
        },
        {
          icon: 'manage_accounts',
          label: 'User2',
          route: 'user2'
        }
      ] 
    },

      { 
       icon: 'settings',
       label: 'Settings', 
       route: 'setting',
       subItem:[
        {
          icon: 'settings_suggest',
          label: 'Setting1', 
          route: 'setting1'
        },
        {
          icon: 'settings_applications',
          label: 'Setting2', 
          route: 'setting2'
        }
      ] 
        
      }
  ])
}
export type MenuItem = {
    icon : string;
    label : string;
    route? : string;
    subItem? : MenuItem[];
}