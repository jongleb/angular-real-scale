import { BPage } from './app.po';

describe('b App', () => {
  let page: BPage;

  beforeEach(() => {
    page = new BPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
