import moment from "moment";

const formatDate = (date) => {
  moment(date).format("MMM DD, YYYY [at] hh:mm a");
};

export default formatDate;
