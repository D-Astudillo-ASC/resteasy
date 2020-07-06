import React from 'react';
import {Divider, Layout} from "antd";

class Footer extends React.Component {
    render() {
        return (
            <Layout.Footer id="mFooter">
                <Divider className="mDiv" />
                <div id="con1">

                </div>
                <Divider className="mDiv" />
                <div id="con2">
                    <span>
                      RestEasy©2020
                    </span>
                            <a href="#policy"><u>
                      Privacy Policy
                    </u></a>
                            <a href="#terms"><u>
                      Terms of Service
                    </u></a>
                            <span>
                      All rights reserved
                    </span>

                </div>
            </Layout.Footer>
        );
    }
}

export default Footer;
