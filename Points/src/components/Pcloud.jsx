import { useLoader } from "@react-three/fiber";
import { PCDLoader } from "three-stdlib";
const Pcloud = (props) => {
  const points = useLoader(PCDLoader, "example.pcd");
  return <primitive object={points} {...props} />;
};

export default Pcloud;
