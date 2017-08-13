import { CatNamesPage } from './app.po';

describe('cat-names App', () => {
  let page: CatNamesPage;

  beforeEach(() => {
    page = new CatNamesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
