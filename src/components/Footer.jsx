import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { saveConfig } from "../config";

function Footer(props) {
  const navigate = useNavigate();
  return (
    <footer
      className={`w-screen bg-dark-green flex items-center ${props.prev ? "justify-between" : "justify-end"} mt-30 p-3 px-7 fixed bottom-0 left-0`}
    >
      {props.prev && (
        <Button
          onClick={() => {
            navigate(props.prev);
            props.onPrev();
            saveConfig();
          }}
        >
          ← PREV
        </Button>
      )}
      {props.next && (
        <Button
          onClick={() => {
            navigate(props.next);
            props.onNext();
            saveConfig();
          }}
        >
          NEXT →
        </Button>
      )}
    </footer>
  );
}

export default Footer;
