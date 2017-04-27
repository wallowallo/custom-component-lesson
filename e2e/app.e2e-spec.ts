import { CustomComponentsLessonPage } from './app.po';

describe('custom-components-lesson App', () => {
  let page: CustomComponentsLessonPage;

  beforeEach(() => {
    page = new CustomComponentsLessonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
