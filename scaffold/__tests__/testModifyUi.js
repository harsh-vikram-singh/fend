import { modifyUi } from '../src/client/js/modifyUi.js';


test('ui update', () => {
  const apiResponse = {
    polarity: 'positive',
    polarity_confidence: 0.95,
    subjectivity: 'subjective',
    subjectivity_confidence: 0.9
  }
  const returnFragment = modifyUi(apiResponse)
  expect(returnFragment).toBeTruthy();
})