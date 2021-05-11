const Posts = ({ files }) => {
  console.log(files);
  return (
    <div>
      <h1>Posts Lists:</h1>
      <ul>
        {files.map((item, index) => (
          <li key={index}>{item.replace(".md", "")}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
