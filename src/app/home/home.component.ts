import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { UserType } from 'src/types/types';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[] = [];
  userType: UserType = UserType.FullControl;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.updateMenuItems();
  }

  selectUser(userTypeValue: string): void {
    this.userType = userTypeValue as UserType;
    this.updateMenuItems();
  }

  private updateMenuItems(): void {
    this.menuItems = this.menuService.getMenuItems(this.userType);
  }
}
