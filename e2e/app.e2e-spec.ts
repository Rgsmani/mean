import { CrmPage } from './app.po';

describe('crm App', () => {
  let page: CrmPage;

  beforeEach(() => {
    page = new CrmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
