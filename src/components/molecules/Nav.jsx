import { NavLink } from 'react-router-dom';

const NavButton = ({ to, icon, label }) => {
  return (
    <NavLink to={to} className="relative group">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white group-hover:bg-[#489CFF] transition-all">
        <img src={icon} alt={label} className="w-6 h-6" />
        <span className="hidden group-hover:inline-block transition-opacity">{label}</span>
      </div>
    </NavLink>
  );
};

const Nav = () => {
  return (
    <nav className="flex gap-2 rounded-full">
      <NavButton to="kelas" icon="/list.svg" label="Kelas" />
      <NavButton to="notifikasi" icon="/notif.svg" label="Notifikasi" />
      <NavButton to="profil" icon="/profile.svg" label="Profil" />
    </nav>
  );
};

export default Nav;
