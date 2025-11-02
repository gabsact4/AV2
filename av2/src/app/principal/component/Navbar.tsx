'use client';

import Link from 'next/link';
import Style from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={Style.navbar}>
      <div className={Style.navContainer}>
        <h2 className={Style.logo}>Aerocode</h2>
        <ul className={Style.navMenu}>
          <li><Link href="/principal">Início</Link></li>
          <li><Link href="../principal/funcionarios">Funcionários</Link></li>
          <li><Link href="../principal/Aeronave">Aeronaves</Link></li>
          <li><Link href="/">Sair</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
