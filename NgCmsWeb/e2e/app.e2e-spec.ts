import { NgCmsPage } from './app.po';

describe('ng-cms App', () => {
  let page: NgCmsPage;

  beforeEach(() => {
    page = new NgCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
