import { AppPage } from './app.po';

describe('example-control-lib App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display random text in paragraph', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Some random text...');
  });
});
