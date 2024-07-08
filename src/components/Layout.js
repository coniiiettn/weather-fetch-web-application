import { Container, Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
import { useRecentlyViewed } from '../context/recentlyView';
import SearchForm from './SearchForm';

function Layout({ children}) {
  const { recentlyViewed } = useRecentlyViewed();

 // console.log('Recently Viewed in Layout:', recentlyViewed); 

  const renderRecentlyViewed = () => {
    return recentlyViewed.map((cityId, index) => (
      <NavDropdown.Item key={index} href={`/${cityId}`}>
        City ID: {cityId}
      </NavDropdown.Item>
    ));
  };



  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />

      <Navbar bg="light" variant="light">
        <Container fluid>
          <div className="d-flex align-items-center">
            <Navbar.Brand href="/" style={{ fontWeight: 'bold' }}>
              <img
                alt=""
                src="https://cdn2.iconfinder.com/data/icons/covid-19-2/64/20-World-512.png"
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />
              Home
            </Navbar.Brand>
            <Nav.Link href="/cities" className="d-flex align-items-center">
              <img
                alt=""
                src="https://cdn2.iconfinder.com/data/icons/corporate-social-responsibility-3/2000/11-01-01-01-512.png"
                width="30"
                height="30"
                className="d-inline-block align-top me-2"
              />
              All Cities
            </Nav.Link>
          </div>
          <Nav className="ms-auto align-items-center">
            <NavDropdown title="Recently Viewed" id="collapsible-nav-dropdown">
              {renderRecentlyViewed()}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <SearchForm/> 
      <Container className="mt-3">
        {/* {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} */}
        {children}
      </Container>
    </>
  );
}

export default Layout;
