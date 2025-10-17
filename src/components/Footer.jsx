import Button from "./Button";

function Footer() {
  return (
    <footer className="w-screen bg-dark-green flex items-center justify-between mt-30 p-3 px-7 sticky bottom-0 left-0">
      <Button>← PREV</Button>
      <Button>NEXT →</Button>
    </footer>
  );
}

export default Footer;
