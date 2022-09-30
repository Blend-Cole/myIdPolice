// Demo store placeholders
const placeholders = {
  HeroBanner: {
    slideshowImages: [
      {
        url: "/src/assets/image_1.jpeg",
        width: 100,
        height: 100,
      },
      {
        url: "/src/assets/image_2.jpeg",
        width: 100,
        height: 100,
      },
    ],
    videoUrl: "T-8OYxJu-i0",
    heading: "GET YOURS FOR AS LOW AS",
    price: "$9.99",
    subPrice: "PER UNIT IN VALUE PACK",
    bannerMessage: "FREE SHIPPING",
    subBannerMessage: "See below for details",
  },
  FullWidthBanner: {
    title: "LIMITED-TIME OFFER!",
  },
  Product: {
    handle: "id-police",
  },
  Trust: {
    title: "SHOP WITH CONFIDENCE!",
    css: "italic text-xl",
    blocks: [
      {
        url: "/src/assets/trust_1.png",
        width: 240,
        height: 240,
        text: "Lorem Ipsum",
      },
      {
        url: "/src/assets/trust_2.png",
        width: 240,
        height: 240,
        text: "Lorem Ipsum",
      },
      {
        url: "/src/assets/trust_3.png",
        width: 240,
        height: 240,
        text: "Lorem Ipsum",
      },
    ],
  },
  Promotion: {
    title: "BLOCK IT OUT BEFORE YOU THROW IT OUT",
    css: "bg-black text-white",
    blocks: [
      {
        url: "/src/assets/promo_1.jpeg",
        width: 240,
        height: 240,
        text: "Lorem Ipsum",
      },
      {
        url: "/src/assets/promo_2.jpeg",
        width: 240,
        height: 240,
        text: "Lorem Ipsum",
      },
      {
        url: "/src/assets/promo_3.jpeg",
        width: 240,
        height: 240,
        text: "Lorem Ipsum",
      },
      {
        url: "/src/assets/promo_4.jpeg",
        width: 240,
        height: 240,
        text: "Lorem Ipsum",
      },      
    ],
  },
  descriptionBanner: {
    title: "Description",
    css: "bg-fixed text-white",
    blocks: [
      {
        title: "IT’S THE EASIEST WAY TO ENCRYPT YOUR SENSITIVE INFO!",
        text: "You rip and tear your old statements and bills and simply toss those old bottles of pills. But thieves use this information to steal your identity. Don’t be a victim! Get the ID Police, the new ink roller that encrypts all your old documents. Before you throw it out, just roll it on and your information is gone! An identity thief can use simple information to get access to your credit card then you’re responsible for the bills. ID Police permanently prints a unique encryption graphic that makes it impossible to read through — both through the front and through the back! It even works if the paper is held up to the light. ID Police works on all forms of paper, matte or glossy.",
      },
      {
        title: "PUTS YOU IN CONTROL OF YOUR INFO!",
        text: "Paper shredders are slow and always jam. Roll with ID Police and you’re in control! Just one easy roll and all your personal information is blocked. After you use ID Police, all your old statements and bills are safe to toss in the trash! Even your medical information is safe with the ID Police. And those applications and or pre-approved checks make you vulnerable, too, so block it out before you throw it out and thwart any thief with the ID Police!"
      },
    ],
  },
  CheckoutInput: [
    {
      name: 'firstName',
      type: 'text',
      value: '',
      placeholder: 'First Name',
    },
    {
      name: 'lastName',
      type: 'text',
      value: '',
      placeholder: 'Last name',
    },
    {
      name: 'address1',
      type: 'text',
      value: '',
      placeholder: 'Address',
    },
    {
      name: 'zip',
      type: 'text',
      value: '',
      placeholder: 'Zip',
    },
    {
      name: 'city',
      type: 'text',
      value: '',
      placeholder: 'City',
    },    
    {
      name: 'province',
      type: 'text',
      value: '',
      placeholder: 'Province',
    },
    {
      name: 'country',
      type: 'text',
      value: '',
      placeholder: 'Country',
    },
    {
      name: 'phone',
      type: 'tel',
      value: '',
      placeholder: 'Phone',
    },          
  ]
};

export function getPageContent() {
  return placeholders;
}