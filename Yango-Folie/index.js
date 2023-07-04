import { registerRootComponent } from 'expo';
import StackNavigation from './navigations/StackNavigation';

function App() {
    return <StackNavigation />;
}
  
registerRootComponent(App);