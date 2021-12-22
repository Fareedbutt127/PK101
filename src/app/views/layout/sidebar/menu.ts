import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
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
    label: 'Received Samples',
    icon: 'airplay',
    link: '/dashboard-lab'
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
      }
    
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


