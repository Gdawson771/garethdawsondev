
import {Link} from "react-router-dom"
export default function Nav(props) {
  console.log(props)
    return (
        <nav className="nav" style={{"background-color":props.opacity}}>
            <div class="container">
                <div class="logo">
                    <a href="#">GD</a>
                </div>
               
      
                <div id="mainListDiv" class="main_list">
                    <ul class="navlinks">
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about">About me</Link></li>
                    </ul>
                </div>
              
                <span class="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    )
}