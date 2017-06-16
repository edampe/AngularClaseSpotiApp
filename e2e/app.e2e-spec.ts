import { SpotyAppPage } from './app.po';

describe('spoty-app App', () => {
  let page: SpotyAppPage;

  beforeEach(() => {
    page = new SpotyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
