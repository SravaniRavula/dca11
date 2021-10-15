import react from "react";
import Home from "../modules/Menu1/index";
import Organization from "../modules/Menu2/index";
import Rti from "../modules/Menu3/index";
import BannedDrugs from "../modules/Menu4/SubMenu1/index";
import ContactUs from "../modules/Menu5/index";
import Map from "../modules/Menu5/map";
import Webpolicies from "../Components/Footer/webpolicies";
import Help from "../Components/Footer/help";
import Notifications from "../Components/Notifications/notification";
import Error from "../Components/Error/error";
import Images from "../Components/Gallery/Images";
import SiteMap from "../modules/SiteMap/sitemap";
import About from "../Components/About/About";
import BloodBanks from "../Components/submenus/bloodbanks";
import StatuteImplemented from "../Components/submenus/statute";
import ObjectivesofDCA from "../Components/submenus/objectives";
import ClientsCharter from "../Components/submenus/clientscharter";





const routesConfig = [
  {
    path: "/nicapsc-dca/dcaHome",
    component: Home,
  },
  {
    path: "/nicapsc-dca/dca organization/",
    component: Organization,
  },
  {
    path: "/nicapsc-dca/dca rti",
    component: Rti,
  },
  {
    path: "/nicapsc-dca/dca publicservices/DCA banneddrugs",
    component: BannedDrugs,
  },
  {
    path: "/nicapsc-dca/dca notifications",
    component: Notifications,
  },
  {
    path: "/nicapsc-dca/dca websitepolicies",
    component: Webpolicies,
  },
  {
    path: "/nicapsc-dca/dca help",
    component: Help,
  },
  {
    path: "/nicapsc-dca/dca contact",
    component: ContactUs,
  },
  {
    path: "/nicapsc-dca/dca map",
    component: Map,
  },
  {
    path: "/nicapsc-dca/dca error",
    component: Error,
  },
  {
    path: "/nicapsc-dca/dca images",
    component: Images,
  },
  {
    path: "/nicapsc-dca/dca sitemap",
    component: SiteMap,
  },
  {
    path: "/nicapsc-dca/dca about",
    component: About,
  },
  {
    path: "/nicapsc-dca/dca publicservices/dca bloodbanks",
    component: BloodBanks,
  },
  {
    path: "/nicapsc-dca/dca mainmenu/dca statuteimplemented",
    component: StatuteImplemented,
  },
  {
    path: "/nicapsc-dca/dca mainmenu/dca objectives",
    component: ObjectivesofDCA,
  },
  {
    path: "/nicapsc-dca/dca mainmenu/dca clientscharter",
    component: ClientsCharter,
  },
];

export default routesConfig;
