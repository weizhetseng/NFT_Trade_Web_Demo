type BtnSearchProps = {
  isSearch: boolean
  setIsSearch: (value: boolean) => void
}

function Search({ isSearch, setIsSearch }: BtnSearchProps) {
  return (
    <div className="absolute w-full h-full top-0 left-0 px-3 py-5 flex justify-between gap-4 bg-white">
      <button
        type="button"
        className="bg-transparent flex items-center justify-center"
        onClick={() => setIsSearch(!isSearch)}
      >
        <div className="i-mingcute:left-line w-7 h-7"></div>
      </button>
      <div className="flex-1 flex items-center gap-4">
        <input
          type="text"
          className="flex-1 w-full outline-none p-2"
          placeholder="搜尋作品名稱、藝術家名稱"
        />
        <label htmlFor="mobileSearch">
          <span
            id="mobileSearch"
            className=":uno: i-mingcute:search-line w-6 h-6 cursor-pointer"
          ></span>
        </label>
      </div>
    </div>
  )
}

export default Search
