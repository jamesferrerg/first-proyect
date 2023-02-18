import { Menubar } from "primereact/menubar";
import styles from "./Navbar.module.css";

export function Navbar() {
  const navlist = [
    { label: "Home", icon: "pi pi-fw pi-home", command: () => { window.location.href='/home' } },
    { label: "Movies", icon: "pi pi-fw pi-video", command: () => { window.location.href='/movies' }},
    { label: "Contact", icon: "pi pi-fw pi-phone" },
  ];

  return <Menubar model={navlist}  className={styles.enlaces}/>;
}
