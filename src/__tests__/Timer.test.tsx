import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Timer } from "../Components/Timer";

describe('Timer', () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        container = shallow(<Timer />);
    })

    it('should have atleast one div tag', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    })
    it('should render start, stop, reset button', () => {
        expect(container.find('TimerButton').length).toEqual(3);
    })
})
