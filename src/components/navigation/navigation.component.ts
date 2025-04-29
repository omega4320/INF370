import { Component, effect, signal } from '@angular/core';
import { Router } from '@angular/router';

export type MenuItem = {
  label: string;
  path?: string;
  isActive: boolean;
  icon: string;
  subItems?: MenuItem[];
  expanded?: boolean;
};

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(private router: Router) {}

  // Reactive signal for the menu
  menuItems = signal<MenuItem[]>([
    { 
      label: 'Dashboard', 
      path: '/dashboard', 
      isActive: false, 
      icon: 'dashboard' 
    },
    { 
      label: 'Schedule', 
      path: '/schedule', 
      isActive: false, 
      icon: 'today' 
    },
    { 
      label: 'Job Management', 
      path: '/manage-jobs', 
      isActive: false, 
      icon: 'work' 
    },
    { 
      label: 'Employees', 
      path: '/employees', 
      isActive: false, 
      icon: 'person' 
    },
    { 
      label: 'Clients', 
      path: '/clients', 
      isActive: false, 
      icon: 'peopleoutline' 
    },
    { 
      label: 'Payments', 
      path: '/manage-payments', 
      isActive: false, 
      icon: 'payments' 
    },
    { 
      label: 'Reports', 
      path: '/reports', 
      isActive: false, 
      icon: 'timeline' 
    },
    
    {
      label: 'Administration',
      isActive: false,
      icon: 'settings',
      expanded: false,
      subItems: [

        { label: 'Services', path: '/administration/services', isActive: false, icon: 'build' },
        { label: 'Employee Type', path: '/administration/employee-type', isActive: false, icon: 'manage_accounts' },
        { label: 'Location', path: '/administration/location', isActive: false, icon: 'place' },
        { label: 'Audit Trail', path: '/administration/audit-trail', isActive: false, icon: 'policy' },
        { label: 'View Help', path: '/administration/help', isActive: false, icon: 'info' },
        
      ]
    }
  ]);

  toggleSubmenu(item: MenuItem) {
    const items = this.menuItems().map(i =>
      i === item ? { ...i, expanded: !i.expanded } : i
    );
    this.menuItems.set(items);
  }

  navigate(item: MenuItem) {
    if (item.path) {
      this.router.navigate([item.path]);
    }
  }

  logOut() {
    this.router.navigate(['login']);
  }
}
