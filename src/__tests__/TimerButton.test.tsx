import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import { TimerButton } from '../Components/TimerButton';

describe('Timer Button', () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        container = shallow(<TimerButton buttonAction={jest.fn()} buttonValue={""} disable={false || true}/>)
    })

    it('should render a div tag', () => {
        expect(container.find('div').length).toEqual(1);
    })
})
