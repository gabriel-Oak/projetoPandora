import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class ArrowNavs extends Component {

    render() {
        return (
            <div style={{height:1, "width":"90%"}}>
	            <div className={"arrow-" + this.props.direction}>	
				  <AnchorLink href={this.props.link} offset={() => this.props.offset}>         	
	            	<img src={process.env.PUBLIC_URL + "/img/arrow.png"} id={this.props.direction + "f"} />
	            	<img src={process.env.PUBLIC_URL + "/img/arrow.png"} id={this.props.direction + "s"} />
            	  </AnchorLink>
            	</div>
            </div>
        );
    }
}

export default ArrowNavs;
