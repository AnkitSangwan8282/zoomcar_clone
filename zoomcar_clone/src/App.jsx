import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Search/SearchBar";
import HomeSearch from "./Components/Homesearch/Homesearch";
import ZMS from "./Components/ZMS/zms";
import Loyalty from "./Components/Loyalty/Loyalty";
import FleetvechilePolicy from "./Components/FleetvechilePolicy/FleetvechilePolicy";
import HostvechilePolicy from "./Components/HostvechilePolicy/HostvechilePolicy";
import Homediv2 from "./Components/homediv2/Homediv2";
import AllCars from "./Components/allcars/AllCars";
import Offerone from "./Components/offer/0fferone";
import Offertwo from "./Components/offer/Offertwo";
import Host from "./Components/Host/Host"
function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Switch>
        <Route exact path="/">
          <div style={{ backgroundColor: "rgb(249, 249, 249)" }}>
            <Navbar />
            <HomeSearch />
            <Homediv2 />
            <Footer />
          </div>
        </Route>
       
        <Route path="/search">
          <SearchBar />
        </Route>
        <Route path="/zoomcar-mobility-services">
          <ZMS />
        </Route>
        <Route path="/host" >
          <Host />
        </Route>
        <Route path="/loyalty">
          <Loyalty />
        </Route>
        <Route path="/policy"
        >
          <FleetvechilePolicy />
        </Route>
        <Route path="/host-policy">
          <HostvechilePolicy />
        </Route>
        <Route path="/allcars">
          <Navbar />
    <AllCars />
        </Route>

        <Route path="/offer1">
          <Navbar />
          <Offerone />
        </Route>
        <Route path="/offer2">
          <Navbar />
          <Offertwo />
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
