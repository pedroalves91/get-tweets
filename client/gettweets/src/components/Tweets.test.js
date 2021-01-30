import React from 'react';
import { render } from '@testing-library/react';

import Tweets from "./Tweets";

describe("Render component", () => {
    it("renders Tweets component", () => {
        render(<Tweets/>);
    });
});
