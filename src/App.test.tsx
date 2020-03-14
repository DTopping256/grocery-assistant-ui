import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders the app container.', () => {
	const renderOutput = render(<App />);
	expect(renderOutput.container).toBeInTheDocument();
});
