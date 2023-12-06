const SearchField = () => (
  <div className="">
    <div className="bg-gray-300 flex flex-row py-2 px-4 special:py-8 special:px-4 2xl:py-4 2xl:px-4 justify-between rounded-2xl">
      <input
        className="focus:outline-none rounded-2xl w-full bg-gray-300 placeholder:text-black placeholder:special:text-4xl special:py-4 placeholder:2xl:text-xl"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  </div>
);

export default SearchField;
