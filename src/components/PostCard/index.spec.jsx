import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { mockPostCard } from "./mock";


describe('<PostCard />', () => {
    it('should render postcard correctly', () => {
      render(<PostCard post={mockPostCard}/>);
    expect(screen.getByRole('img', { name: /title/i})).toHaveAttribute('src', mockPostCard.cover);
    expect(screen.getByText('body 1')).toBeInTheDocument();
});
it('should match snapshot', () => {
 const { container } = render(<PostCard post={mockPostCard}/>);
 expect(container.firstChild).toMatchSnapshot();
});
});