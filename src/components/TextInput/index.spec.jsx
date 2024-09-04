/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { TextInput } from ".";
import userEvent from "@testing-library/user-event";
import React from "react";
describe('<TextInput />', () => {
    it('should call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue=""/>);

        const input = screen.getByPlaceholderText(/Type your search/i);
        const value = 'value';

        userEvent.type(input, value);

        expect(fn).toHaveBeenCalledTimes(5);


    })
    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={'test'}/>);
        const input = screen.getByPlaceholderText(/Type your search/i);

        expect(input.value).toBe('test');
    })

})
