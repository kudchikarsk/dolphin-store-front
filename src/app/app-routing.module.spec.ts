import { AppRoutingModule } from './app-routing.module';

describe('AppRountingModule', () => {
  let appRountingModule: AppRoutingModule;

  beforeEach(() => {
    appRountingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRountingModule).toBeTruthy();
  });
});
