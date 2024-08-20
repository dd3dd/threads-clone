import NavLinks from "../nav-links/Nav-links";

export default function Navbar() {
  return (
    <nav className="flex w-full h-full bg-[#101010]">
      <NavLinks type={"top"} />
    </nav>
  );
}
