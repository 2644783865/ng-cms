import { NgcmsPage } from './app.po';

describe('ngcms App', () => {
  let page: NgcmsPage;

  beforeEach(() => {
    page = new NgcmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
