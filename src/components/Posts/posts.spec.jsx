/* eslint-disable no-undef */
import { Posts } from "."
import { render, screen } from "@testing-library/react";
import React from "react";
const props = {
    posts: [
       {
            title: 'title 1',
            body: 'body 1',
            id: 1,
            cover: 'img/img.png'
        },
        {
            title: 'title 2',
            body: 'body 2',
            id: 2,
            cover: 'img/img.png'
        }
    ]

}
describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts {...props}/>);
        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(2);
    })
    it('should match snapshot', () => {
        const { container } = render(<Posts {...props}/>);
        expect(container.firstChild).toMatchSnapshot();
       });
})
