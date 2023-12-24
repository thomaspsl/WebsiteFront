import { WavyLink } from "../library/waves";

export const Footer = ({ data: { start, end, duration }, className }: any) => (
  <>
    <footer className={`footer ${className}`}>

      <div className="left_footer">

        <span> @ <span className="phone">{new Date().getFullYear()} -</span> thomaspsl</span>
        
      </div>

      <div className="right_footer">

        <div className="del">

          <WavyLink to="/networks" beginColor={start} finishColor={end} duration={duration} id="networks">Social Networks</WavyLink>

          <span className="network"> / </span> 
          
        </div>
 
        <WavyLink to="/rights" beginColor={start} finishColor={end} duration={duration} id="rights">

          <span className="rights_right">All </span>Rights<span className="rights_left"> Reserved</span>

        </WavyLink>

      </div>

    </footer>
  </>
);