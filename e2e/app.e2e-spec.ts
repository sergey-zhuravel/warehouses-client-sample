import { WarehousesClientPage } from './app.po';

describe('warehouses-client App', () => {
  let page: WarehousesClientPage;

  beforeEach(() => {
    page = new WarehousesClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
