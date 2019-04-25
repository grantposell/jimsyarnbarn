import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Jim's Yarn Barn</Link>} scroll>
          <Navigation>
            <a href="/">Home</a>
            <a href="/store">Store</a>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Jim's Yarn Barn</Link>}>
          <Navigation>
            <a href="/invest">Invest</a>
            <a href="/network">Network</a>
            <a href="/pricing">Pricing</a>
            <a href="/aboutus">About Us</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main></Main>
        </Content>
        <Footer size="mini">
          <FooterSection type="left" logo="Jim's Yarn Barn © 2019" >
            <FooterLinkList>
              <a href="/privacy">Privacy & Legal</a>
              <a href="/contact">Contact</a>
              <a href="/careers">Careers</a>
              <a href="#">Get Newsletter</a>
              <a href="/forums">Forums</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
    );
  }
}

export default App;
