import { AngularbookmarksPage } from './app.po';

describe('angularbookmarks App', function() {
  let page: AngularbookmarksPage;

  beforeEach(() => {
    page = new AngularbookmarksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
