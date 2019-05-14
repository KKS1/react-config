import React, { Component } from "react";
import styled from "styled-components";
import ZillowService from "../services/zillowService";

const formatter = new Intl.NumberFormat('en-US', {
  style:    'currency',
  currency: 'USD',
});

const ZillowLogoLink = styled.a`
  height: 3.125rem;
  width: 3.125rem;
`;

const ZillowImage = styled.img`
  height: 3.125rem;
  width: 12.5rem;
`;

class Zillow extends Component {
  constructor(props) {
    super(props)
    this.zillowService = new ZillowService()
  }

  fillZillowData = async () => {
    const {onChange, formData} = this.props
    const zillowData = await this.zillowService.search();

    if( !zillowData ) return;

    const { zestimate = '' , homeDetailsUrl, zillowId, address }  = zillowData;
    const formattedZestimate = formatter.format(zestimate).replace('.00', '');

    onChange(
      {
        ...formData, ...{zestimate: formattedZestimate, homeDetailsUrl, zillowId, address}
      }
    )
  }

  componentDidMount() {
    this.fillZillowData()
  }

  render() {
    const {formData, formData: {zillowId, zestimate, homeDetailsUrl, address} = {}} = this.props;

    return (
      <div>
        { (zillowId && zestimate) ?
          <div>
            <div className='row'>
              <div className='col-sm-6'>
                <div>
                  Zestimate - {zestimate}
                </div>
                <div className="zillow-external-link">
                  <a href={homeDetailsUrl} target="_blank">
                    See more details for {address} on Zillow
                    <i className="fa c-external-link" />
                  </a>
                </div>
              </div>
              <div className='col-sm-6'>
                <ZillowLogoLink href="https://www.zillow.com/">
                  <ZillowImage src="http://www.zillow.com/widgets/GetVersionedResource.htm?path=/static/logos/Zillowlogo_200x50.gif" alt="Zillow Real Estate Search"/>
                </ZillowLogoLink>
              </div>
            </div>
          </div>
          : null
        }
      </div>
    )
  }
}

export default Zillow
