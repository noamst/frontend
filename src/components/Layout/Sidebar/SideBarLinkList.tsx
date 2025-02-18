import { IRoutesModel, routes as routesRaw } from '@src/routes';
import SideBarLinkItem from './SideBarLinkItem';
import DarkModeToggle from '@src/components/DarkModeToggle';
import HomePage from '@src/pages/Home';

export interface SidebarItemProps {
  route: IRoutesModel;
  children?: IRoutesModel[]; // optional for nested routes
}

export default function SideBarLinkList() {
  //const { pathname } = useLocation();
  const modifiedRoutes: SidebarItemProps[] = routesRaw.map((route) => ({
    route: {
      to: route.to,
      text: route.text,
      activeNames: route.activeNames,
      Component: HomePage,
    },
    children: [
      {
        to: `/attribute1Of${route.text}`,
        text: 'attribute1',
        activeNames: [`/attribute1Of${route.text}`],
        Component: HomePage,
      },
      {
        to: `/attribute2Of${route.text}`,
        text: 'attribute2',
        activeNames: [`/attribute2Of${route.text}`],
        Component: HomePage,
      },
    ],
  }));
  return (
    <div className='flex animate-appear flex-col items-start justify-start text-sm font-thin'>
      {modifiedRoutes.map((route) => (
        <SideBarLinkItem {...route} />
      ))}

      <DarkModeToggle size={20} />
    </div>
  );
}
