import { useState } from "react";
import QnAItem from "./QnAItem";

   
function FAQSection() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
          title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
          content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
          content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
        },
        {
          title: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
          content: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
        },
      ];
    return (
        <div className="md:my-12 mt-14 ">
            <div className="font-bold mb-8 text-primary text-center font-poppins text-[27px]">Frequently asked questions</div>
            <div className="lg:mx-24  mx-5">
            <div className=" flex items-center justify-center">


            <div className="  space-y-6">
      {accordionData.map((item, index) => (
        <QnAItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
    </div>
                
                
                

            </div>
            
        </div>
    )
}

export default FAQSection
