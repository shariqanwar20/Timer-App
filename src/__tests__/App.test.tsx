import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import App from '../App';

describe('App', () => {
  let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    container = shallow(<App />)
  })

  it('check for div tag', () => {
    expect(container.find('div').length).toEqual(1);
  })
  it('should render a Timer Component', () => {
    expect(container.find('Timer').length).toEqual(1);
  })
})
