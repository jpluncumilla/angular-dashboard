import { Injectable } from '@angular/core';
import { UserType } from 'src/types/types';

interface MenuItem {
  label: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuItems(userType: UserType): MenuItem[] {
    switch (userType) {
      case UserType.HelpDesk:
        return [
          { label: 'Dashboard', icon: 'space_dashboard' },
          { label: 'Pending Action Items', icon: 'person_add' },
          { label: 'Digital Assets', icon: 'code_blocks' },
          { label: 'Companies, PO, Users', icon: 'account_circle' },
          { label: 'Help Desk', icon: 'event_list' },
        ];
      case UserType.Administrator:
        return [
          { label: 'Dashboard', icon: 'space_dashboard' },
          { label: 'User Management', icon: 'person_add' },
          { label: 'Application Management', icon: 'code_blocks' },
          { label: 'Framework Management', icon: 'terminal' },
          { label: 'Document Library', icon: 'local_library' },
          { label: 'Internal Help Desk', icon: 'event_list' },
        ];
      case UserType.FullControl:
        return [
          { label: 'Dashboard', icon: 'space_dashboard' },
          { label: 'User Management', icon: 'person_add' },
          { label: 'Application Management', icon: 'code_blocks' },
          { label: 'Framework Management', icon: 'terminal' },
          { label: 'Document Library', icon: 'local_library' },
          { label: 'Internal Help Desk', icon: 'event_list' },
        ];
      case UserType.Download:
        return [
          { label: 'Dashboard', icon: 'space_dashboard' },
          { label: 'Applications', icon: 'code_blocks' },
          { label: 'Frameworks', icon: 'terminal' },
          { label: 'My Documents', icon: 'description' },
          { label: 'Library', icon: 'local_library' },
          { label: 'User Roster', icon: 'switch_accounts' },
        ];
      case UserType.Read:
        return [
          { label: 'Dashboard', icon: 'space_dashboard' },
          { label: 'Applications', icon: 'code_blocks' },
          { label: 'Frameworks', icon: 'terminal' },
          { label: 'Library', icon: 'local_library' },
          { label: 'User Roster', icon: 'switch_accounts' },
        ];
      default:
        return [];
    }
  }
}
