import Image from 'next/image';
import LogoIcon from 'public/images/logo_i.png';
import Logo from 'public/images/logo.png';

// Width / Height
const logoImageRatio = 1105 / 292;
const logoIconImageRatio = 1410 / 1108;
const baseHeight = 40;

interface Props {
  scale?: number;
  icon?: boolean;
}

const LogoImage: React.VFC<Props> = ({ scale = 1, icon = false }) => {
  return <Image src={icon ? LogoIcon : Logo} alt="BAUES" width={(icon ? logoIconImageRatio : logoImageRatio) * baseHeight * scale} height={baseHeight * scale} placeholder="blur" />;
}

export default LogoImage;
