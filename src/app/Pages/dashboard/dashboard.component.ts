import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule,RouterModule,MatToolbar],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  selectedTabIndex = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const childRoute = this.route.snapshot.firstChild;
    const initialSegment = childRoute?.url?.[0]?.path;
    this.selectedTabIndex = initialSegment === 'home2' ? 1 : 0;
  
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const child = this.route.firstChild;
        const segment = child?.snapshot?.url?.[0]?.path;
        this.selectedTabIndex = segment === 'home2' ? 1 : 0;
      });
  }

  onTabChange(index: number): void {
    const tabRoute = index === 1 ? 'home2' : 'home1';
    this.router.navigate([tabRoute], { relativeTo: this.route });
  }
}
