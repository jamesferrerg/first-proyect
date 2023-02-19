import { Menubar } from "primereact/menubar";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const navlist = [
    { label: "Home", icon: "pi pi-fw pi-home", command: () => { navigate('/home') } },
    { label: "Movies", icon: "pi pi-fw pi-video", command: () => { navigate('/movies') } },
    { label: "Contact", icon: "pi pi-fw pi-phone" },
  ];

  return <Menubar model={navlist}  className={styles.enlaces}/>;
}
