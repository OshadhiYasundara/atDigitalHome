import Button from "./Button"

function ServiceComponent({align,title,description,image}) {
    return (
        <div className=" sm:max-lg:h-[414px]  grid justify-center sm:grid-cols-10  max:sm:my-4  ">
            {align=="left"&& <div className="  lg:col-span-5 sm:col-span-4  grid justify-center  ">
                <img src={image} className="md:w-[275px] lg:w-[414px] "/>
            </div>}
            {align=="right"&&<div className="sm:hidden   h-full  sm:mt-0 mt-5 justify-center">
                <img src={image} className=" md:w-[275px] lg:w-[414px] "/>
            </div>}
            <div className=" lg:col-span-5 sm:col-span-5 grid content-center md:-mt-20 lg:mt-0 ">
                <div className=" font-bold sm:text-left text-center  text-primary  font-poppins text-[27px]">{title}</div>
                <div className=" font-normal sm:text-left text-center text-base mt-4  font-inter text-black">{description}</div>
                <div className="max-sm:mx-auto ">
                <Button text={"LEARN MORE"}/>
                </div>
            </div>

            {align=="right"&& <div className="hidden lg:col-span-5  sm:col-span-5 h-full sm:grid  justify-center">
                <img src={image} className=" md:w-[275px] lg:w-[414px] "/>
            </div>}

            
        </div>
    )
}

export default ServiceComponent
