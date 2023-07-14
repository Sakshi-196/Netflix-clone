import React,{useState,useEffect} from 'react'
import classes from './Nav.module.css'

const Nav = () => {

    const [show,setShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll",null);
        };
    },[])

  return (
    <div className={`${classes.nav} ${show&&classes.nav__black}`}>
        <img
            className={classes.nav__logo}
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            alt="Netflix Logo"
        />
        <img
            className={classes.nav__avatar}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Logo"
        />
    </div>
  )
}

export default Nav
