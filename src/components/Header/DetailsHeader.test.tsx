import React from 'react';
import { render, screen } from '@testing-library/react-native';
import DetailsHeader from './DetailsHeader';
import { Provider } from 'react-redux';
import { store } from '../../store';

test('render correctly', () => {
    let props: any;

    const createTestProps = () => ({
        nav: {
            goBack: jest.fn(),
        },
        name: 'Testing',
    });

    props = createTestProps();

    const component = (
        <Provider store={store}>
            <DetailsHeader {...props} />
        </Provider>
    );

    render(component);

    //const wrapper = screen.getByTestId('details-header-wrapper');
    const headerName = screen.getByTestId('header-name');

    expect(component).toBeDefined();

    //expect(wrapper.props.style.height).toBe(200);
    //expect(wrapper.props.style.width).toBe(200);
    expect(headerName).toHaveTextContent('Testing');
});
