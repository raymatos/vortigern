import * as React from 'react';
import { Button } from 'reactstrap';
const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <div className={style.Home}>
          <p>Hello!</p>
        </div>
        <div>
          <Button color="primary">primary</Button>{' '}
          <Button color="secondary">secondary</Button>{' '}
          <Button color="success">success</Button>{' '}
          <Button color="info">info</Button>{' '}
          <Button color="warning">warning</Button>{' '}
          <Button color="danger">danger</Button>{' '}
          <Button color="link">link</Button>
        </div>
      </div>
    );
  }
}

export { Home }
