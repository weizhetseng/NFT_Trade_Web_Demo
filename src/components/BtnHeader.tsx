import { useState } from 'react'
import Logo from '../assets/images/logo/logo.svg'
import BtnMobile from './BtnMobile'
import BtnSearch from './BtnSearch'
import BtnHam from './BtnHam'

function Header() {
  const [isMenu, setIsMenu] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  return (
    <header className=":uno: relative border-(b black)">
      <div className=":uno: flex px-3 py-4 lg:(px-0 py-0) xl:container">
        <div className=":uno: flex-(1 shrink-0) flex items-center justify-start lg:(border-(r black) px-8 py-4) xl:(px-12 py-10)">
          <a href="">
            <img className="w-21 sm:w-30 md:w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className=":uno: hidden lg:flex">
          <div className=":uno: lg:(px-8 py-4) flex items-center justify-center border-(r black) xl:(px-12 py-10)">
            <input
              type="text"
              id="search"
              className=":uno: p-2 w-full outline-none min-w-60"
              placeholder="搜尋作品名稱、藝術家名稱"
            />
            <label htmlFor="search" className=":uno: ">
              <span className=":uno: i-mingcute:search-line w-7 h-7"></span>
            </label>
          </div>
          <div className=":uno: lg:(px-8 py-4) flex items-center justify-center border-(r black) xl:(px-12 py-10)">
            <a href="">探索</a>
          </div>
          <div className=":uno: lg:(px-8 py-4) flex items-center justify-center border-(r black) xl:(px-12 py-10)">
            <a href="">市值</a>
          </div>
          <div className=":uno: lg:(px-8 py-4) flex items-center justify-center xl:(px-12 py-10)">
            <a href="">
              <span className=":uno: i-ph:wallet-fill w-7 h-7"></span>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-6 lg:hidden">
          <span
            className=":uno: i-mingcute:search-line w-6 h-6 cursor-pointer"
            onClick={() => setIsSearch(!isSearch)}
          ></span>
          <BtnHam isMenu={isMenu} setIsMenu={setIsMenu} />
        </div>
        {isSearch && <BtnSearch isSearch={isSearch} setIsSearch={setIsSearch} />}
      </div>
      {isMenu && <BtnMobile />}
    </header>
  )
}

export default Header
