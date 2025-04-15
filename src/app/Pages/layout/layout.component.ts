import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { RouterOutlet } from '@angular/router';
import { SidenavComponent} from '../layout/components/sidenav/sidenav.component'

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ CommonModule,
            MatToolbarModule, 
            MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            RouterOutlet,
            SidenavComponent,
            MatBadgeModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  
  
})

export class LayoutComponent {
   collapsed = signal(true)
   sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px')
}

