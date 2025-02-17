import { lazy, ComponentType } from 'react';
import TestErrorPage from './components/ErrorBoundary/TestErrorPage';

const HomePage = lazy(() => import('./pages/Home'));
const ReduxExamplePage = lazy(() => import('./pages/ReduxExample'));

export type IRoutesModel<T = any> = {
  to: string;
  text: string;
  activeNames: string[];
  Component: ComponentType<T>;
  children?: IRoutesModel<T>[]; // optional for nested routes
};

export const routes: IRoutesModel[] = [
  {
    to: '/',
    text: 'Home',
    activeNames: ['/home', '/'],
    Component: HomePage,
    children: [
      // Example nested route
      {
        to: '/home/subpage',
        text: 'Subpage',
        activeNames: ['/home/subpage'],
        Component: HomePage,
      },
      {
        to: '/home/subpage2',
        text: 'Subpage2',
        activeNames: ['/home/subpage2'],
        Component: HomePage,
      },
      {
        to: '/home/subpage3',
        text: 'Subpage3',
        activeNames: ['/home/subpage2'],
        Component: HomePage,
      },
    ],
  },
  {
    to: '/redux',
    text: 'Redux Example',
    activeNames: ['/redux'],
    Component: ReduxExamplePage,
  },
  // just for testing the error boundary
  {
    to: '/test-error',
    text: 'Error',
    activeNames: ['/error'],
    Component: TestErrorPage,
  },
];
