import Hero from "@/components/hero";

const Posts = ({ files }) => {
  return (
    <div>
      <Hero text={"I Wrote Things"}></Hero>
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
