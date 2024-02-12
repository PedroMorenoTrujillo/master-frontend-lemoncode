import { APPROUTES } from '@enums/app-routes';
import { HeaderRoutes } from '../models';
import { ROUTESLABEL } from '@enums/index';

export const routes: HeaderRoutes[] = [
  {
    label: ROUTESLABEL.HOME,
    route: APPROUTES.HOME,
    isActive: true,
  },
  {
    label: ROUTESLABEL.LOGIN,
    route: APPROUTES.LOGIN,
    isActive: true,
  },
  {
    label: ROUTESLABEL.ABOUT,
    route: APPROUTES.ABOUT,
    isActive: true,
  },
  {
    label: ROUTESLABEL.DASHBOARD,
    route: APPROUTES.DASHBOARD,
    isActive: false,
    canLoadWithLogin: true
  },
  {
    label: ROUTESLABEL.GALLERY,
    route: APPROUTES.GALLERY,
    isActive: false,
    canLoadWithLogin: true
  },
  {
    label: ROUTESLABEL.CRUD,
    route: APPROUTES.CRUD,
    isActive: false,
    canLoadWithLogin: true
  },
  {
    label: ROUTESLABEL.PROFILE,
    route: APPROUTES.PROFILE,
    isActive: false,
    canLoadWithLogin: true
  },
];
