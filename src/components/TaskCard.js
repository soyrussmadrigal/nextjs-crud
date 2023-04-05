export const TaskCard = ({ task }) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <button>Delete</button>
      <p>{task.description}</p>
    </div>
  );
};
