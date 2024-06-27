import './Navbar.css';

const Navbar = () => {
  return (

   
    <div className='nav'>
      
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul> 
      <ul className='navi'>
      <li className="nav-content">Sign In</li>
      <li className="nav-content">Guest Mode</li>
      
      </ul> 
       
      
      <div className="nav-logo">UnderGraduate Project Mangement System<br/>DEIE</div>
    </div>
  )
}

export default Navbar;