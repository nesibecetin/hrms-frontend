import React from "react";
import { Link } from 'react-router-dom'
import { Button,Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="small" fixed="top">
      <Container>
        <Menu.Item name="iş ilanları" as={Link} to='/employers'  />
        <Menu.Item name="adaylar" as={Link} to='/candidates' />
        <Menu.Menu position="right">      
          <Menu.Item>
            <Button primary>Giriş Yap</Button>
            <Button primary>Kayıt Ol</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>     
    </div>
  );
}
