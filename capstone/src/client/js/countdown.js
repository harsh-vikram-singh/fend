import moment from 'moment';

const getRemainingDays = (formData) => {
  const today = moment().dayOfYear();
  const journeyDate = moment(formData.travelDate).dayOfYear();
  return journeyDate - today;
}

export default getRemainingDays;