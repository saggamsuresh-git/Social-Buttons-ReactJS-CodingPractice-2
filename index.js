const Button = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button name="Like" className="like-button" />
      <Button name="Comment" className="comment-btn" />
      <Button name="Share" className="share-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
