import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/Home";
import ninja from "./components/ninja";


const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <ItensMenu name="Home" component={Home}></ItensMenu>
        <ItensMenu name="macaco ninja" component={ninja}></ItensMenu>
      </Menu>
    </NavigationContainer>
  );
}
