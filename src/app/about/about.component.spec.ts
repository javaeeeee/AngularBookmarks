
import { inject} from '@angular/core/testing';

import {AboutComponent} from './about.component';

describe('AboutComponent', () => {
    /* beforeEach(() => addProviders([AboutComponent]));

    it('should create the About component', inject([AboutComponent], (app: AboutComponent) => {
        expect(app).toBeTruthy();
    }));
    */

    it('true is true', () => expect(true).toEqual(true));

    it('null is not the same thing as undefined', () => expect(null).not.toEqual(undefined));
});

