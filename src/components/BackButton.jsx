import backIcon from '../assets/back_arrow.png';

const BackButton = () => {
  return (
    <div className="back-button no-highlight">
      <img src={backIcon} alt="<" />
      Back
    </div>
  );
};

export default BackButton;
