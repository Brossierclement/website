import "../feed/feed.scss";
import me from "../../assets/img/me.jpg";
import { useContext } from "react";
import { DataContext } from "../../App";
function Feed() {
  const data = useContext(DataContext);
  const dataBranches = data.find((element) => element.type === "branchContent");
  const dataContent = dataBranches?.items;
  console.log(dataContent);

  return (
    <section className="feed">
      {dataContent?.map((item, id) => (
        <article className="feedCard" key={id}>
          <img className="cardProfil" src={me} alt="" />
          <div className="cardContent">
            <span className="cardUser">
              <p>{item.user}</p>
              <p>·</p>
              <p>{item.date}</p>
            </span>
            <span className="cardStatus">
              <p>{item.statusLogo}</p>
              <p>{item.statusText}</p>
            </span>
            <h1>{item.title}</h1>
            <p>{item.primaryText}</p>
            <p>{item.secondaryText}</p>
            {item.media && <img className="cardMedia" src={item.media} />}
          </div>
        </article>
      ))}
    </section>
  );
}
export default Feed;
