import PropTypes from "prop-types";

const Card = ({ title, showSub, background, imgUrl, children }) => {
  return (
    <div class="flex justify-center">
      <div
        class={`flex flex-col md:flex-row md:max-w-xl rounded-lg bg-${background} shadow-lg`}
      >
        <img
          class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={imgUrl}
        />
        <div class="p-6 flex flex-col justify-center">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          {showSub && (
            <p class="text-gray-500 text-sm mt-2">This is the card subtitle</p>
          )}
          <p class="text-gray-700 text-base mt-4 mb-4">{children}</p>

          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md"
          >
            Some action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  showSub: PropTypes.bool,
  imgUrl: PropTypes.string,
  background: PropTypes.string,
};
