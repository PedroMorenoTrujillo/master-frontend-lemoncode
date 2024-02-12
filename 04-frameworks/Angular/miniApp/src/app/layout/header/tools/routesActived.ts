import { ROUTESLABEL } from '@enums/routes-label';
import { HeaderRoutes } from '../models';

export const routesActived: (
  isLogged: boolean,
  headerRoutes: HeaderRoutes[]
) => HeaderRoutes[] = (
  isLogged: boolean,
  headerRoutes: HeaderRoutes[]
): HeaderRoutes[] => {
  isLogged
    ? headerRoutes.forEach((route) => {
        route.isActive = route.label === ROUTESLABEL.LOGIN ? false : true;
      })
    : headerRoutes.forEach((route) => {
        route.isActive = route.canLoadWithLogin ? false : true;
      });

  return headerRoutes;
};
