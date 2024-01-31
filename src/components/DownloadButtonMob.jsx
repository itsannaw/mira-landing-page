/* eslint-disable react/no-unknown-property */
const DownloadButtonMob = () => {
  return (
    <button
      id="mobile-download"
      className="flex lg:hidden px-5 py-[5px] border-violet border-2 rounded-[16px] items-center active:bg-violet active:stroke-white"
    >
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="download">
          <path
            id="Vector"
            d="M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15"
            stroke="#6E78D1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M8 10L13 15L18 10"
            stroke="#6E78D1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M13 15V3"
            stroke="#6E78D1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </button>
  );
};

export default DownloadButtonMob;
