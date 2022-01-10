const formatDate = (date) => {
  // 12 oct 2019
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export default formatDate;
