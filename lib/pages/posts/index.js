const Posts = ({ files }) => {
  return (
    <div>
      <h1>Posts Lists:</h1>
      <ul>
        {files.map((item, index) => {
          console.log(item);
          return <li key={index}>{item.data.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Posts;
