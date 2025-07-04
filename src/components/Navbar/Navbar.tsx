import Logo from "../Logo";

function Navbar() {
  return (
    <nav>
      <Logo />
      <h1>paystack</h1>
      <ul>
        <li>Developers</li>
        <li>Support</li>
        <li>Login</li>
      </ul>
      <ul>
        <li>Why Paystack</li>
        <li>Customers</li>
        <li>Pricing</li>
        <li>Learn</li>
      </ul>
    </nav>
  );
}

export default Navbar;
