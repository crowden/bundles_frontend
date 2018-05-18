import React from 'react';
import ReactDOM from 'react-dom';
import {OverlayTrigger, Popover, Button} from 'react-bootstrap';

export default class MdPopupHelper extends React.Component {
    render(){
        let br = '(<br/>)';
        let hr = '(<hr/>)';

        const md_helper_linebreaks = (
          <Popover id="popover-trigger-click-root-close" title="Line Breaks">
              <p className="md-help-popover-explanation">Before hitting return, end a line with two spaces to add a {br} linebreak.</p>
              <p className="md-help-popover-example">How do I love thee?<span className="highlight">{'\xa0\xa0'}</span><br/>Let me count the ways.</p>
          </Popover>
        );
        const md_helper_bold_italics = (
          <Popover id="popover-trigger-click-root-close" title="Bold and Italics">
              <p className="md-help-popover-explanation">To make something italics or bold, use asterisks ( * ) and underscores ( _ ).</p>
              <p className="md-help-popover-example"><span className="highlight">*</span>This is italicized<span className="highlight">*</span>, and so is <span className="highlight">_</span>this<span className="highlight">_</span>.<br/><span className="highlight">**</span>This is bold<span className="highlight">**</span>, and so is <span className="highlight">__</span>this<span className="highlight">__</span>.<br/>Use <span className="highlight">***</span>italics and bold together<span className="highlight">***</span> if you <span className="highlight">___</span>have to<span className="highlight">___</span>.</p>
          </Popover>
        );
        const md_helper_links = (
          <Popover id="popover-trigger-click-root-close" title="Links">
              <p className="md-help-popover-explanation">A link is composed of text that is linked, the destination of the link, and text that appears when the user hovers over the link.</p>
              <p className="md-help-popover-example">Here is a link to <span className="highlight">[Google](http://www.google.com "go to Google's homepage!")</span> Based on the explanation above, a link is <span className="highlight">[the link text](http://www.destination.com "hover text")</span> If you wanted to link to a page on this site, the link would appear as <span className="highlight">[the link text](/site-page "hover text")</span></p>
          </Popover>
        );
        const md_helper_subheadings = (
          <Popover id="popover-trigger-click-root-close" title="Subheadings">
              <p className="md-help-popover-explanation">Subheadings break up content into different sections for your readers. Usually, you should only be adding subheadings 2-3 levels deep. Heading 1's are reserved for page titles and will be removed if added. To create a heading, simply prepend the correct number of #'s before the text.</p>
              <p className="md-help-popover-example"><span className="highlight">## </span>Heading 2<br /><span className="highlight">### </span>Heading 3<br /><span className="highlight">#### </span>Heading 4</p>
          </Popover>
        );
        const md_helper_horizontal_rules = (
          <Popover id="popover-trigger-click-root-close" title="Horizontal Rules">
              <p className="md-help-popover-explanation">Horizontal rules are simply lines that span across the page and break up content.</p>
              <p className="md-help-popover-example">Insert a horizontal rule {hr} by putting three or more hyphens on a line by themselves.</p>
          </Popover>
        );
        const md_helper_lists = (
          <Popover id="popover-trigger-click-root-close" title="Lists">
              <p className="md-help-popover-explanation">Lists can be ordered (1., 2., 3., etc.) or unordered with bullets.</p>
              <p className="md-help-popover-example">
                A bulleted list:
                <br /><span className="highlight">{'-\xa0'}</span>Use a hyphen for each bulleted list item
                <br /><span className="highlight">{'-\xa0'}</span>Use a hyphen for each bulleted list item
                <br /><span className="highlight">{'-\xa0'}</span>Use a hyphen for each bulleted list item
                <br /><br />
                An ordered list:
                <br /><span className="highlight">1. </span>Numbered lists are easy
                <br /><span className="highlight">2. </span>Markdown keeps track of the numbers for you
                <br /><span className="highlight">7. </span>So this will be item 3.
              </p>
          </Popover>
        );
        const md_helper_nested_lists = (
          <Popover id="popover-trigger-click-root-close" title="Nested Lists">
              <p className="md-help-popover-explanation">Nested list are created by placing lists (ordered or unordered) within other lists. Simply indent nested list items with 4 spaces.</p>
              <p className="md-help-popover-example">
                <span className="highlight">1. </span>Lists in a list item:<br />
                <span className="highlight">{'\xa0\xa0\xa0\xa0'}</span>- Indented four spaces.<br />
                <span className="highlight">{'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}</span>- indented eight spaces.<br />
                <span className="highlight">{'\xa0\xa0\xa0\xa0'}</span>- Indented four spaces again.
              </p>
          </Popover>
        );
        
        return (
            <div className="popovers-container">
                <div className="single-popover">
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={md_helper_linebreaks}>
                      <Button>Linebreaks</Button>
                    </OverlayTrigger>
                </div>
                <div className="single-popover">
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={md_helper_bold_italics}>
                      <Button>Italics & Bold</Button>
                    </OverlayTrigger>
                </div>
                <div className="single-popover">
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={md_helper_links}>
                      <Button>Hyperlinks</Button>
                    </OverlayTrigger>
                </div>
                <div className="single-popover">
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={md_helper_subheadings}>
                      <Button>Subheadings</Button>
                    </OverlayTrigger>
                </div>
                <div className="single-popover">
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={md_helper_horizontal_rules}>
                      <Button>Horizontal Rules</Button>
                    </OverlayTrigger>
                </div>
                <div className="single-popover">
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={md_helper_lists}>
                      <Button>Lists</Button>
                    </OverlayTrigger>
                </div>
                <div className="single-popover">
                    <OverlayTrigger trigger="click" rootClose placement="right" overlay={md_helper_nested_lists}>
                      <Button>Nested Lists</Button>
                    </OverlayTrigger>
                </div>
            </div>
        );
    }
}
