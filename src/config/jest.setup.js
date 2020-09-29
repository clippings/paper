import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import { cleanup } from '@testing-library/react';

// clean up after every `describe`
afterAll(() => {
  cleanup();
  jest.resetAllMocks();
});
