import { Component, computed, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../sidenav.component';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  
  imports: [MatListModule, RouterModule, MatIconModule, CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  
})
export class MenuItemComponent {
  item = input.required<MenuItem>();
  collapsed = input(false);

  readonly itemValue = computed(() => this.item());

  nestedMenuOpen = signal(false);

  toggleNested(){
    if(!this.item().subItem){
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen())
  }
}
