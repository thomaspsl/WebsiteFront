import { WavyLink } from "../library/waves";

export const Menus = ({data: {start, end, duration}}: any) => (
<>
  <WavyLink to="/" beginColor={start} finishColor={end} duration={duration} id="home">
    HOME
  </WavyLink>
  
  <WavyLink to="/desktop" beginColor={start} finishColor={end} duration={duration} id="desktop">
    DESKTOP
  </WavyLink>
  
  <WavyLink to="/projects" beginColor={start} finishColor={end} duration={duration} id="projects">
    PROJECTS
  </WavyLink>

  <WavyLink to="/specialties" beginColor={start} finishColor={end} duration={duration} id="specialties">
    SPECIALTIES
  </WavyLink>
</>
);
