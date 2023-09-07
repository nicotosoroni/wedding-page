import { useNavigate } from 'react-router-dom';
import { NavbarStyles } from './styles';

// const Navbar = () => {
//   return (
//     <>
//       <NavbarStyles>
//         <Link className="fromcenter f1" to="/">
//           Home
//         </Link>
//         <Link className="fromcenter f1" to="/pages/schedule">
//           Cronograma
//         </Link>
//         <Link className="fromcenter f1" to="/pages/map">
//           Mapa
//         </Link>
//         <Link className="fromcenter f1" to="/pages/photos">
//           Fotos
//         </Link>
//         <Link className="fromcenter f1" to="/pages/spotify">
//           Musica
//         </Link>
//         <Link className="fromcenter f1" to="/pages/register">
//           Registro
//         </Link>
//         <Link className="fromcenter f1" to="/pages/turismo">
//           Turismo
//         </Link>
//         <Link className="fromcenter f1" to="/pages/faq">
//           Preguntas
//         </Link>
//       </NavbarStyles>
//     </>
//   );
// };
// export default Navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Cronograma', url: '/pages/schedule' },
  { name: 'Mapa', url: '/pages/map' },
  { name: 'Fotos', url: '/pages/photos' },
  { name: 'Musica', url: '/pages/spotify' },
  { name: 'Registro', url: '/pages/register' },
  { name: 'Turismo', url: '/pages/turismo' },
  { name: 'Preguntas', url: '/pages/faq' },
];

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    navigate(url);
    setAnchorElNav(null);
  };

  return (
    <NavbarStyles>
      <AppBar
        position="static"
        style={{
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Comfortaa',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="red"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.url)}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        fontFamily: 'Comfortaa',
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Comfortaa',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOG
          </Typography> */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.url)}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      fontFamily: 'Comfortaa',
                    }}
                  >
                    {page.name}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </NavbarStyles>
  );
}
export default Navbar;
