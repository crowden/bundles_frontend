import React from 'react';
import ReactDOM from 'react-dom';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';

const md_helper_linebreaks = (
  <Popover id="popover-trigger-click-root-close" title="Line Breaks">
    This is a line break:
  </Popover>
);

ReactDOM.render((
<OverlayTrigger trigger="click" rootClose placement="right" overlay={md_helper_linebreaks}>
  <Button>Click w/rootClose</Button>
</OverlayTrigger>
), document.queryGetElementById('md-syntax-helper-linebreaks'));

export {md_helper_linebreaks}