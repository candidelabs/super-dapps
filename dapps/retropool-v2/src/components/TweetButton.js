import React from "react";

const tweetButtonStyle = {
  backgroundColor: "#2daae1", // Twitter blue color
  color: "#fff", // White text color
  borderRadius: "25px",
  borderColor: "white",
  padding: "5px 10px",
  fontSize: "16px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};

const birdIconStyle = {
  width: "40px",
  height: "30px",
  background: `url('https://www.laoistoday.ie/wp-content/uploads/2017/03/twitter-bird-white-on-blue-xl.png') no-repeat`, // Replace with your Twitter bird icon image
  backgroundSize: "cover",
  marginRight: "10px", // Spacing between the icon and text
};

const TweetButton = ({ url, text }) => {
  const tweet = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "Twitter",
      "width=550,height=420"
    );
  };

  return (
    <button style={tweetButtonStyle} onClick={tweet}>
      <span style={birdIconStyle}></span>
      Tweet
    </button>
  );
};

export default TweetButton;
