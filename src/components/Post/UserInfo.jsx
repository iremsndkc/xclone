import moment from "moment";

const UserInfo = ({ tweet }) => {
    // kullanıcı isminden yola çıkarak bir nickname oluşturduk.
    const username = 
    tweet.user.name.toLowerCase().replace(/ /g, "_") + 
    Math.round (Math.random() * 99);
    console.log(tweet)
    //tarih
    let date = tweet?.createdAt?.toDate();
    date = moment(date).fromNow();
    

  return (
    <div>
      <p>{tweet.user.name}</p>
      <p>@{username}</p>
      <p>{date}</p>
      <p></p>
    </div>
  )
}

export default UserInfo;
