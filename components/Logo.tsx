import { Image } from "@rneui/themed";
import LogoSource from "../assets/images/favicon.png";
type LogoProps = {
  width?: number;
  height?: number;
};
const Logo = ({ width = 20, height = 20 }: LogoProps) => {
  return <Image source={LogoSource} style={{ width: width, height: height }} />;
};

export default Logo;
