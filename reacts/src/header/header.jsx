import React from 'react'
import './header.css'
import logo from '../images/Vector (11).svg'
import logo1 from '../images/Group (1).svg'
import logo2 from '../images/Group 161.svg'
import logo3 from '../images/107823765_764851841011463_3291585847262786341_n 1.svg'
import logo4 from '../images/Group 15.svg'


const Header = () => {
  return (
    <header>
      <div className='w-full h-[60px] bg-[rgba(169,140,100,1)] flex items-center justify-center'>
        <img src={logo} alt='logo' className='logo' />
        <h1 className='text-white font-bold text-lg ml-4'>Скидка 10% при заказе от 2х недель</h1>
        <a href="">
          <p className='font-bold text-[24px] text-white ml-24'>Заказать</p>
        </a>
        <img src={logo1} alt="logo1" className="w-[14px] h-[14px] ml-4" />
      </div>
      <div className='flex items-center justify-center pt-[32px]'>
        <img src={logo2} alt="logo1" className="w-[140px] h-[44px]" />
        <p className='text-[rgba(73, 62, 62, 1)] font-medium text-[18px] pl-[130px]'>Подбор рациона</p>
        <p className='text-[rgba(73, 62, 62, 1)] font-medium text-[18px] pl-[30px]'>Программы питания</p>
        <p className='text-[rgba(73, 62, 62, 1)] font-medium text-[18px] pl-[30px]'>О нас</p>
        <p className='text-[rgba(73, 62, 62, 1)] font-medium text-[18px] pl-[30px]'>Доставка</p>
        <p className='text-[rgba(73, 62, 62, 1)] font-medium text-[18px] pl-[30px]'>Aкции</p>
        <p className='text-[rgba(73, 62, 62, 1)] font-medium text-[18px] pl-[30px]'>FAQ</p>
        <p className='text-[rgba(73, 62, 62, 1)] font-medium text-[18px] pl-[30px]'>Отзывы</p>
        <div className='flex flex-col ml-[100px]'>
          <p className='text-[rgba(77, 143, 118, 1)] pl-[146px] font-medium text-[15px]'>Перезвоните мне</p>
          <h4 className='text-[rgba(73, 62, 62, 1)] font-bold text-[30px] '>+7 (999) 123-45-67</h4>
          <p className='text-[rgba(73, 62, 62, 0.5)] pl-[176px] font-medium text-[14px]'>c 9:00 до 21:00</p>
        </div>
      </div>
      <div className='flex items-center justify-center gap-[100px] pt-[50px]'>
        <div>
          <h1 className='w-[710px] text-[60px] font-bold'>Прогрессивное питание на каждый день</h1>
          <p className='text-[rgba(73, 62, 62, 1)] font-medium text-[16px] pt-[18px] pb-[50px]'>Сбалансированный рацион в  современном формате — Супер-боул</p>
          <button className='w-[203px] h-[48px]  bg-[#4D8F76] rounded-[40px] text-white font-bold'>Подобрать питание</button>
          <button className='w-[237px] h-[48px]  bg-white rounded-[40px] text-[#4D8F76] font-bold border-2 ml-[20px] border-[#4D8F76]'>Подобрать питание</button>
        </div>
        <img src={logo3} alt="" />
      </div>
      <div className='flex justify-center mb-[57px]'>
        <img src={logo4} alt="" />
      </div>
    </header>
  )
}

export default Header