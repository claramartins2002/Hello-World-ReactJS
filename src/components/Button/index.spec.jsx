/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { Button } from '.';
import React from "react";
import userEvent from "@testing-library/user-event";
describe('<Button/>', () => {

    it('should render button with text' , () => {
        render(<Button text="Load More"/>);
        expect.assertions(1);

        const button = screen.getByRole('button', {
            name: /load more/i
        });

        expect(button)
        .toBeInTheDocument();
    });


    it('should call function on button click' , () => {
       const fn = jest.fn();
        render(<Button text="Load More"
            onClick={fn}/>);
        expect.assertions(1);

        const button = screen.getByRole('button', {
            name: /load more/i
        });

        userEvent.click(button);

        expect(fn)
        .toHaveBeenCalledTimes(1);
    });


    it('should be disabled when disabled=true' , () => {
         render(<Button text="Load More"
             disabled={true}/>);

         const button = screen.getByRole('button', {
             name: /load more/i
         });


         expect(button)
         .toBeDisabled();
     });
});

