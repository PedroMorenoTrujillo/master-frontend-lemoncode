import { APPROUTES, ROUTESLABEL } from '@enums/index';

export interface HeaderRoutes {
  label: ROUTESLABEL;
  route: APPROUTES;
  isActive: boolean;
  canLoadWithLogin?: boolean;
}
