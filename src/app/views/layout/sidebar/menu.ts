import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Admin',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Laboratories List',
    icon: 'airplay',
    link: '/advanced-ui/owl-carousel'
  },
  {
    label: 'Collectors List',
    icon: 'user-plus',
    link: '/collector-list'
  },
 
  {
    label: 'Data List',
    isTitle: true
  },

      {
        icon: 'copy',
        label: 'Samples List',
        link: '/tables/basic-table',
      },
      {
        icon: 'user',
        label: 'Individuals List',
        link: '/tables/data-table',
      },
      {
        icon: 'user-plus',
        label: 'Collectors List',
        link: '/tables/ngx-datatable'
      },
    
      {
        label: 'Laboratory Portal',
        isTitle: true
      },
      {
        label: 'Dashboard',
        icon: 'home',
        link: '/dashboard-lab'
      },
      {
        label: 'Recieved Samples',
        icon: 'file',
        link: '/form-elements/basic-elements'
      },
    ];

    
  // {
  //   label: 'Icons',
  //   icon: 'smile',
  //   subItems: [
  //     {
  //       label: 'Feather icons',
  //       link: '/icons/feather-icons',
  //     },
  //     {
  //       label: 'Flag icons',
  //       link: '/icons/flag-icons',
  //     },
  //     {
  //       label: 'Mdi icons',
  //       link: '/icons/mdi-icons',
  //     }
  //   ]
  //},


