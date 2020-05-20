export const modifyUi = (apiResponse) => {
  const fragment = document.createDocumentFragment();
  const liPolarity = document.createElement('li');
  const liSubjectivity = document.createElement('li')
  liPolarity.innerText = `The text is classified as ${apiResponse.polarity} with a confidence of ${apiResponse.polarity_confidence}`
  liSubjectivity.innerText = `It is also deemed to be ${apiResponse.subjectivity} with  a confidence of ${apiResponse.subjectivity_confidence}`
  fragment.appendChild(liPolarity);
  fragment.appendChild(liSubjectivity);
  return fragment;
}