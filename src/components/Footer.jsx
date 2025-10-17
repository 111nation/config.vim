import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Footer(props) {
  const navigate = useNavigate();
  return (
    <footer className="w-screen bg-dark-green flex items-center justify-between mt-30 p-3 px-7 sticky bottom-0 left-0">
      <Button onClick={() => navigate(props.prev)}>← PREV</Button>
      <Button onClick={() => navigate(props.next)}>NEXT →</Button>
    </footer>
  );
}

export default Footer;
