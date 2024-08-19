type BtnHamProps = {
  isMenu: boolean
  setIsMenu: (value: boolean) => void
}

function BtnHam({ isMenu, setIsMenu }: BtnHamProps) {
  return (
    <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setIsMenu(!isMenu)}>
      <span
        className={`w-5 h-0.5 rounded-full bg-black duration-200 ${
          isMenu && 'translate-y-1.5 rotate-45'
        }`}
      ></span>
      <span
        className={`w-5 h-0.5 rounded-full bg-black duration-200 ${
          isMenu && 'translate-x-2 opacity-0'
        }`}
      ></span>
      <span
        className={`w-5 h-0.5 rounded-full bg-black duration-200 ${
          isMenu && '-translate-y-1.5 -rotate-45'
        }`}
      ></span>
    </div>
  )
}

export default BtnHam
