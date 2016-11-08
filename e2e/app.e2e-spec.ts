import { SodecConfigNg2Page } from './app.po';

describe('sodec-config-ng2 App', function() {
  let page: SodecConfigNg2Page;

  beforeEach(() => {
    page = new SodecConfigNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
