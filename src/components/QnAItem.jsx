function QnAItem({ title, content, isOpen, onClick }) {
  return (
    <div className=" sm:w-[606px] lg:w-[846px] bg-neutral-50 px-2 hover:bg-white rounded-lg">
      <div
        className={`flex font-inter sm:text-[22px] text-xl font-medium ${
          isOpen && "text-primary"
        } justify-between items-center w-full  sm:px-4 sm:py-6 text-left font-medium `}
      >
        {title}
        <button onClick={onClick} className="  relative grid place-content-center  w-6 h-6">
          <svg
            className={`absolute transition-opacity transform duration-300 mt-2 xl:mt-1 lg:mt-1 sm:-mt-2 ease-in-out ${
              isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 35621">
              <path
                id="Vector"
                d="M8 1V15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M1 8H15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>

          <svg
            className={`lg:mt-2 sm:-mt-1 xl:mt-2 absolute transition-opacity transform duration-300 mt-3 ease-in-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            width="16"
            height="2"
            viewBox="0 0 16 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 35622">
              <g id="Group 35602">
                <path
                  id="Vector"
                  d="M1 1H15"
                  stroke="#6B3CC9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
     <div
  className={`xl:px-4 w-full  py-2 text-textlight transition-all duration-300 ease-in-out transform ${
    isOpen ? "opacity-100 scale-y-100 max-h-[200px]" : "opacity-0 scale-y-0 max-h-0"
  }`}
  style={{
    overflow: "hidden",
    transformOrigin: "top",
  }}
>
  {content}
</div>


    </div>
  );
}

export default QnAItem;
