function Mobile() {
  return (
    <div className="fixed w-full h-full ">
      <div className="bg-white relative z-1 flex flex-col px-3 pb-6 text-center border-t border-black">
        <a href="" className="p-6 border-(b black)">
          探索
        </a>
        <a href="" className="p-6">
          市值
        </a>
        <a href="" className="px-6 py-3 border border-black text-white bg-orange1">
          連結錢包
        </a>
      </div>
      <div className="absolute top-0 left-0 bg-black w-full h-full opacity-50"></div>
    </div>
  )
}

export default Mobile
