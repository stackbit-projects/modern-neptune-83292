import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Icon from './Icon';

export default class Action extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        let action_style = _.get(action, 'style', null) || 'link';
        let action_icon = _.get(action, 'icon', null) || 'arrow-left';
        let action_icon_pos = _.get(action, 'icon_position', null) || 'left';
        return (
            <script id="setmore_script" type="text/javascript" src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"></script><a id="Setmore_button_iframe" style="float:none" href="https://my.setmore.com/bookingpage/2433fc45-ddd4-4e7d-bce3-6346cbad6db8"><img border="none" src="https://storage.googleapis.com/setmore-assets/2.0/Images/Integration/book-now-blue.svg" alt="Book an appointment with CreativePixel using Setmore" /></a>
        );
    }
}
