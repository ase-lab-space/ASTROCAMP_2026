import React from 'react';
import { Link } from 'react-router-dom';
import ASELabIcon from '../assets/aselab_logo_dark.png'
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import HistoryIcon from '@mui/icons-material/History';
import { NewspaperIcon } from 'lucide-react';
import SendIcon from '@mui/icons-material/Send';

const Header = () => {
  return (
    <header className="header">
      <div><Link to="/"><img src={ASELabIcon} alt="ASE-Lab" /></Link></div>
      {/* <div className="logo">ASTRO CAMP</div> */}
      <nav className="nav">
        <ul>
          <li><Link to="/"><HomeIcon fontSize="large" /> Home</Link></li>
          <li><a href="/#activities"> <EventIcon fontSize='large' /> Contents</a></li>
          <li><a href="/#news"><NewspaperIcon size={24} /> News</a></li>
          <li><a href="/#apply" style={{ color: 'var(--color-accent)' }}><SendIcon fontSize='large' />Apply</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;