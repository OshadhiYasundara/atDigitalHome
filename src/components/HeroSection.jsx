import Button from "./Button"


function HeroSection() {
    return (
        
      <div className="font-sans ">
      
      <div className ="bg-cover sm:h-[448px]  lg:h-[700px] justify-start content-end grid "
      style={{backgroundImage: "url('/herosection.png')"}}>  
      <img src="/herosectionMobile.png" alt="hero" className="   lg:hidden  sm:h-[450px]"/>

      
      <div class="w-[480px] p-6 m-16 xl:m-20 bg-[linear-gradient(257deg,#1CBDDD_27.86%,#4DCA79_100%)]  hidden lg:grid">
       <div className="w-[470px]  text-white text-4xl font-bold ">
        <div>We crush Your</div>
        <div>Competitors, Goals, And</div>
        <div>Sales Records - Without</div>
        <div> The B.S.</div>  
      </div>
      <div>
        <Button  text={"GET FREE CONSULATION"}/>
      </div>
      </div>  

      </div>  

      <div class=" xl:px-20 xl:py-6 sm:p-10 p-6 bg-[linear-gradient(257deg,#1CBDDD_27.86%,#4DCA79_100%)]  lg:hidden">
       <div className=" text-white text-4xl font-bold ">
        <div>We crush your competitors,</div>
        <div>goals, and sales records - </div>
        <div>without the B.S.</div>
      </div>
      <div>
        <Button text={"GET FREE CONSULATION"}/>
      </div>

      </div>  
      
</div>
    )
}

export default HeroSection
