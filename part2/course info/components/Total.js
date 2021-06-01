const Total = ({ course }) => {
  const sum = course.parts.reduce((sum, it) => sum + it.exercises, 0);
  return <b>total of {sum} exercises </b>;
};

export default Total;
