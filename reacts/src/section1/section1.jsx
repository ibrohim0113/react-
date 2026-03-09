import React from "react";
import Butn from '../header/butn';

const Section1 = () => {
    return (
        <div>
            <div className="flex justify-center mb-[70px]">
                <div className="w-[1380px] h-[209px] bg-[#E2DDC0] rounded-[30px]" >
                    <h1 className="p-[30px] font-medium text-[40px]">Подберите рацион для своих целей</h1>
                    <h6 className="font-medium text-[12px] text-[#756D6D] pl-[30px]">Пол</h6>
                    <div className="flex gap-[35px]">
                        <div className="w-[86px] h-[48px] bg-[#FAF6F2] rounded-[60px] flex items-center   text-[12px] font-medium text-[#756D6D]">
                            <div className="flex justify-center">
                                <div className="w-[38px] h-[38px] bg-[#DFCCB7] rounded-full mr-[10px] flex items-center justify-center">Ж</div>
                                <v className="w-[28px] h-[38px] bg-[] rounded-full mr-[10px] flex items-center justify-center">M</v>
                            </div>
                        </div>
                        <Butn name="Ваш вес" />
                        <Butn name="Ваш рост" />
                        <Butn name="Ваш возраст" />
                        <Butn name="Активность" />
                        <Butn name="Ваш вес" />
                        <Butn name="Ваш вес" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section1;