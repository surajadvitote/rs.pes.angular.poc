import { HelloWorld2Page } from './app.po';

describe('hello-world2 App', () => {
  let page: HelloWorld2Page;

  beforeEach(() => {
    page = new HelloWorld2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
