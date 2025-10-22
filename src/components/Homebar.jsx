import Button from "./Button";

function Homebar() {
  return (
    <footer className="w-screen bg-dark-green flex items-center justify-center mt-30 p-3 pr-7 fixed bottom-0 left-0">
      <Button onClick={() => (window.location.href = "/")}>HOME</Button>
    </footer>
  );
}

export default Homebar;
