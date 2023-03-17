import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

process.env.STRIPE_SECRET_KEY =
  "sk_test_51Mh4jiSEx7nkkDnClQgS4gcoiCDTpU5bhTnRPQqkxAHG5arzno02edRfGBkCJjNmwleEI7aUHeYN8Rf4F5S6gR8600GqlfIpDw";
