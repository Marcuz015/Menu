import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./components/Home";
import ninja from "./components/ninja";
import bucaneiro from "./components/bucaneiro";
import atirador from "./components/Atirador";
import druida from "./components/druida";

const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <ItensMenu name="Home" component={Home}></ItensMenu>
        <ItensMenu name="macaco ninja" component={ninja}></ItensMenu>
        <ItensMenu name="Macaco bucaneiro" component={bucaneiro}></ItensMenu>
        <ItensMenu name="Macaco atirador" component={atirador}></ItensMenu>
        <ItensMenu name="macaco druida" component={druida}></ItensMenu>
      </Menu>
    </NavigationContainer>
  );
}
