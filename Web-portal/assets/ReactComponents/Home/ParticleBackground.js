import Particles from "react-tsparticles";
import particleCongfig from "./config/paticle-config";

const ParticleBackground = () => {
  return (
    <div>
      <Particles
        params={particleCongfig}
        style={{ marginTop: 65 }}
      ></Particles>
    </div>
  );
};
export default ParticleBackground;
