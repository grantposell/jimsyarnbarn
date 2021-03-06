import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout style={{ background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover', height: '100vh' }}>
          <Header transparent title="Jim's Yarn Barn" style={{ color: 'white' }}>
            <Navigation>
              <a href="/">Home</a>
              <a href="/store">Store</a>
              <a href="/cart">Cart</a>
            </Navigation>
          </Header>
          <Drawer title="Jim's Yarn Barn">
            <Navigation>
              <a href="/">Home</a>
              <a href="/store">Store</a>
              <a href="/cart">Cart</a>
            </Navigation>
          </Drawer>
          <Content />
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
                <a href="/forums">Blog</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
