import * as React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CandyButton from '../button';

configure({ adapter: new Adapter() });

it('renders <CandyButton /> components', () => {
  const fn = jest.fn();
  const buttonWidth = 100;
  const buttonHeight = 100
  const wrapper = mount(
    <CandyButton
      title='candy_button'
      value={0}
      onAdd={fn}
    />);
  /** 获取到按钮 */
  const addButton = wrapper.find('.add_btn');
  expect(addButton.text()).toBe('按钮被点击了0次');
  /** 判断是否有这个元素*/
  expect(addButton.length).toBe(1);
  /** 样式检查 */
  const buttonClass = `.add_btn`;
  expect(wrapper.find(buttonClass).prop('style')).toEqual({
    width: 100,
    height: 100
  });
  //  /** 模拟点击事件 */
  addButton.simulate('click');
  expect(wrapper.find(buttonClass).prop('style')).toEqual({
    width: 110,
    height: 110
  });
});
