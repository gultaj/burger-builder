import React from 'react';
import { configure, shallow } from 'enzyme';
import { BurgerBuilder } from './BurgerBuilder';
import Adapter from 'enzyme-adapter-react-16';
import BuildControls from 'components/BuildControls/BuildControls';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('<BurgerBuilder />', () => {
  let wrapper, store;
  const mockStore = configureStore();
  beforeEach(() => {
    store = mockStore({});
    wrapper = shallow(<BurgerBuilder store={store} />);
  });

  it('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({ ingredients: { salad: 1 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
