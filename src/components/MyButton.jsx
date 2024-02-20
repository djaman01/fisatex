const MyButton = ({label, iconURL, fullWidth}) => {
  return (
    //${fullWidth && 'w-full'} veut dire que si le components a un props fullWidth activé, alors on lui donne le style w-full
    <button
      className={`flex items-center justify-center gap-2 h-14 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white ${fullWidth && "w-full"}`}
    >
      {label}
      {/* Condition pour ne montrer une cicone dans le button, que s'il y a une icone dispo */}
      {iconURL && (
        <img
          src={iconURL}
          alt="Right Arrow icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default MyButton;
