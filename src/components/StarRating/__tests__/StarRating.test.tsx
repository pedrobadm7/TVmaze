import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  describe('rating was passed', () => {
    it('show the average', () => {
      const {getByText} = render(<StarRating rating={{average: 7}} />);

      expect(getByText('7')).toBeTruthy();
    });
    it('show the star icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);

      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });

  describe('rating was not passed', () => {
    it('return nothing', () => {
      const {container} = render(<StarRating />);

      expect(container.children).toEqual([]);
    });
  });
});
