import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Accordion } from '../Accordion/Accordion';
const onOpen = jest.fn();
const accordion = (
  <Accordion>
    <Accordion.Item key="test" onOpen={onOpen} eventKey="test" id={1}>
      <Accordion.Item.Title>Test</Accordion.Item.Title>
      <Accordion.Item.Body>Test content</Accordion.Item.Body>
    </Accordion.Item>
    <Accordion.Item key="test-2" onOpen={onOpen} eventKey="test-2" id={2}>
      <Accordion.Item.Title>Test 2</Accordion.Item.Title>
      <Accordion.Item.Body>Test content 2</Accordion.Item.Body>
    </Accordion.Item>
  </Accordion>
);
describe('Accordion component', () => {
  test('matches snapshot', () => {
    const { container } = render(accordion);
    expect(container).toMatchSnapshot();
  });
  test('onOpen is triggered', () => {
    const { getByText } = render(accordion);
    const title = getByText('Test');
    fireEvent.click(title);
    expect(onOpen).toBeCalled();
    expect(onOpen).toBeCalledWith('test');
  });
});
