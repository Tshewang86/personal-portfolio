// projectData.js
import projImg from "../assets/img/mobile.png"; // Ensure correct path
import projImg2 from "../assets/img/persona1.png";
import persona from "../assets/img/persona2.png"// User Persona image
import projImg3 from "../assets/img/user journey.png"; // User Journey Map
import digital from "../assets/img/digital.png";
import low from "../assets/img/low.png";
import use from "../assets/img/usability.png"
import highFidelityImg from "../assets/img/highfidility.png"; // High Fidelity Design
import wireframe from "../assets/img/paper.jpg"


//Responsive web
import responsive from "../assets/img/web design.png"
import journey from "../assets/img/responsive userjourney.png"
import digit from "../assets/img/res_digital.png"
import wire from "../assets/img/res_low.png"
import high from "../assets/img/res_final.png"
import usability from "../assets/img/res_use.png"
import u1 from "../assets/img/u1.png"
import u2 from "../assets/img/u2.png"
import paper2 from "../assets/img/paper for responsive.jpg"



//app and web

import par from "../assets/img/last persona.png"
import po from "../assets/img/last user.png"
import cover from "../assets/img/home3.png"
import high3 from "../assets/img/high1.png"
import paper3 from "../assets/img/app and web paper.png"
import digital1 from "../assets/img/wire3.png"
import low3 from "../assets/img/wire4.png"
import usa1 from "../assets/img/usapro.png"
import journey1 from "../assets/img/us.png"




export const projectData = [
  {
    id: "1",
    title: "Art Gallery Mobile Application",
    description: "Design for Art Euthistic",
    imgUrl: projImg,
    caseStudy: {
      images: [projImg],
      ProjectBackground: "As art enthusiasts increasingly look to browse and purchase artwork online, many face challenges in exploring and understanding the artwork without a physical experience. This project aims to create an intuitive mobile application for an art gallery, offering users seamless access to artworks, artist profiles, virtual exhibitions, and purchasing options. The app will focus on ease of navigation, clear art descriptions, and interactive elements to engage both casual viewers and serious collectors.",
      ProblemStatement: "While online art platforms exist, many users report issues with complex interfaces, lengthy submission processes, and confusing purchase flows. Artists find it challenging to submit artwork through lengthy, disjointed forms, and art buyers often struggle with finding and purchasing pieces quickly. Furthermore, exhibition attendees have limited options to RSVP or stay informed about events digitally.",
      ProjectGoals: "My project aims to create a seamless app experience that prioritizes accessibility, discovery, and user engagement. The app will feature a straightforward login and signup process, including social login and guest access options, ensuring quick entry. Users can explore artwork effortlessly through an intuitive homepage, organized by categories. Artists will enjoy a streamlined submission process with guidance for uploading images and descriptions, while an exhibition feature will help users discover and set reminders for events of interest. Profile management will enable users to view their submissions and purchase history. Finally, a secure, user-friendly in-app purchase flow will be integrated with multiple payment options, enhancing the overall purchase experience.",
      MyRole: "As the UX designer, I managed the user experience design process for Art Gallery from start to finish. This included conducting user research, creating wireframes and prototypes, performing user testing, and finalizing the design to ensure a smooth and simple online experience for art gallery",
      TargetAudience: "Art creators, collectors, enthusiasts, and exhibition-goers looking for an interactive, easy-to-use digital platform for experiencing and engaging with art.",

    },
    researchConducted: {
      summary: "In my research for the art gallery mobile application, I conducted survey and created empathy maps to gain insights into our target audience and their needs. The primary user groups identified were art enthusiasts, collectors, and emerging artists seeking a platform to explore and share artwork. The research highlighted that users often experience challenges in discovering new artwork, navigating complex submission processes, and attending relevant art events. Additionally, users emphasized the importance of a reliable purchase experience, along with the ability to easily access exhibition information and manage personal profiles. This research guided us toward designing a solution that emphasizes intuitive exploration, seamless submission, and trustworthy purchasing.",
      survey: "I conduct survey to understand the online art gallery platform. Through these survey, I have explored the users habits, frustrations and expectations. By gathering insights to inform the development of a user-centric solution.",
      surveyLink: "https://forms.gle/jhkCJw5XEWpgwrz39",
      userpainpoint: [
        "•	Lack of Navigation and Guidance: Users struggle to find exhibits and events without clear maps, exhibit locators, or calendars.",
        "•	Insufficient Art Details: Limited information on artwork and artists leaves users wanting more context and connection.",
        "•	Poor Purchasing Experience: Complicated navigation and unclear purchasing steps make exploring and buying art difficult.",
        "•	Limited Visual and Detail Access: Low-resolution images and lack of zoom or visualization tools prevent users from fully appreciating the art.",
        "•	Challenges with Virtual Gallery Interaction: Poor-quality virtual tours, limited social features, and hard-to-find virtual events make digital engagement frustrating."
      ],
      findings: [
        "• Users want a simple, intuitive interface.",
        "• Integration with social media for sharing artworks is crucial.",
      ],
    },
    userPersona: {
      imgUrl: projImg2,
      img: persona,
    },
    userJourneyMap: {
      description: "User Journey for Art Exploration",
      imgUrl: projImg3,
    },
    wireframe: {
      topic: "Paper Wireframe",
      photo: wireframe,
      title: "Digital Wireframe",
      image: digital,
      T: "Low Fidility Prototype",
      img: low,
    },
    usabilityTesting: {
      summary: "Conducted user testing with a prototype to gather feedback.",
      img: use,
      findings: [
        "• Navigation Complexity: Users struggled to locate specific artworks or exhibitions; clearer categories and filtering options (e.g., by medium or artist) would improve discoverability.",
        "• Artwork Viewing Limitations: Small images restricted users’ ability to appreciate details; a high-resolution zoom or fullscreen option is recommended.",
        "• Limited Exhibit Information: Users found it challenging to access background details on artworks or artists; adding expandable descriptions or tooltips could enhance this.",
        "• Search Inefficiency: Search results were often irrelevant or slow to update; implementing advanced, dynamic search by title, artist, or keyword would improve usability."

      ],
    },
    finalDesign: {
      description: "High fidelity designs that capture the app's visual elements.",
      imgUrl: highFidelityImg,
    },
    conclusion: {
      summary: "Designing the art gallery mobile application has been an enriching experience that emphasized the power of well-constructed user interfaces and user-centered design principles to enhance digital art exploration. This project involved a blend of creativity and functionality, aiming to make art accessible, engaging, and seamless for users. Through various design stages, from empathy mapping and persona creation to wireframing and usability testing, the app evolved to prioritize an intuitive and visually appealing experience for art lovers.",
      Impact: "The design of this application holds potential to broaden the accessibility of art galleries, making art more available to a wider audience beyond physical gallery walls. By creating a platform that is both engaging and informative, users can explore and appreciate artwork from different artists, styles, and periods, regardless of their location. Additionally, the app provides an opportunity for galleries to reach a more diverse audience and potentially increase their visitor numbers and revenue through online engagement and digital ticketing options. The social sharing and interactive features also encourage community participation and help create a network of art enthusiasts, fostering a more connected and inclusive art world.",

      Knowledge: "Throughout this design process, I learned valuable lessons in user experience (UX) and user interface (UI) design. Understanding the users' needs and how they engage with art digitally provided insights into creating functional yet aesthetic designs. I gained proficiency in creating empathy maps and personas, which helped me step into the users’ shoes and make informed design decisions. Additionally, this project sharpened my wireframing and prototyping skills, and the usability testing stage underscored the importance of feedback in refining the design. I also learned how to balance visual elements with functionality, ensuring that each feature enhances the overall user experience rather than complicating it.",
    },
  },


  {
    id: "2",
    title: "Responsive Web design for Art Gallery",
    description: "Design for Art Euthistic",
    imgUrl: projImg,
    caseStudy: {
      images: [responsive],
      ProjectBackground: "As art enthusiasts increasingly look to browse and purchase artwork online, many face challenges in exploring and understanding the artwork without a physical experience. This project aims to create an intuitive mobile application for an art gallery, offering users seamless access to artworks, artist profiles, virtual exhibitions, and purchasing options. The app will focus on ease of navigation, clear art descriptions, and interactive elements to engage both casual viewers and serious collectors.",
      ProblemStatement: "While online art platforms exist, many users report issues with complex interfaces, lengthy submission processes, and confusing purchase flows. Artists find it challenging to submit artwork through lengthy, disjointed forms, and art buyers often struggle with finding and purchasing pieces quickly. Furthermore, exhibition attendees have limited options to RSVP or stay informed about events digitally.",
      ProjectGoals: "My project aims to create a seamless app experience that prioritizes accessibility, discovery, and user engagement. The app will feature a straightforward login and signup process, including social login and guest access options, ensuring quick entry. Users can explore artwork effortlessly through an intuitive homepage, organized by categories. Artists will enjoy a streamlined submission process with guidance for uploading images and descriptions, while an exhibition feature will help users discover and set reminders for events of interest. Profile management will enable users to view their submissions and purchase history. Finally, a secure, user-friendly in-app purchase flow will be integrated with multiple payment options, enhancing the overall purchase experience.",
      MyRole: "As the UX designer, I managed the user experience design process for Art Gallery from start to finish. This included conducting user research, creating wireframes and prototypes, performing user testing, and finalizing the design to ensure a smooth and simple online experience for art gallery",
      TargetAudience: "Art creators, collectors, enthusiasts, and exhibition-goers looking for an interactive, easy-to-use digital platform for experiencing and engaging with art.",

    },
    researchConducted: {
      summary: "In my research for the art gallery mobile application, I conducted survey and created empathy maps to gain insights into our target audience and their needs. The primary user groups identified were art enthusiasts, collectors, and emerging artists seeking a platform to explore and share artwork. The research highlighted that users often experience challenges in discovering new artwork, navigating complex submission processes, and attending relevant art events. Additionally, users emphasized the importance of a reliable purchase experience, along with the ability to easily access exhibition information and manage personal profiles. This research guided us toward designing a solution that emphasizes intuitive exploration, seamless submission, and trustworthy purchasing.",
      survey: "I conduct survey to understand the online art gallery platform. Through these survey, I have explored the users habits, frustrations and expectations. By gathering insights to inform the development of a user-centric solution.",
      surveyLink: "https://forms.gle/jhkCJw5XEWpgwrz39",
      userpainpoint: [
        "•	Lack of Navigation and Guidance: Users struggle to find exhibits and events without clear maps, exhibit locators, or calendars.",
        "•	Insufficient Art Details: Limited information on artwork and artists leaves users wanting more context and connection.",
        "•	Poor Purchasing Experience: Complicated navigation and unclear purchasing steps make exploring and buying art difficult.",
        "•	Limited Visual and Detail Access: Low-resolution images and lack of zoom or visualization tools prevent users from fully appreciating the art.",
        "•	Challenges with Virtual Gallery Interaction: Poor-quality virtual tours, limited social features, and hard-to-find virtual events make digital engagement frustrating."
      ],
      findings: [
        "• Users want a simple, intuitive interface.",
        "• Integration with social media for sharing artworks is crucial.",
      ],
    },
    userPersona: {
      imgUrl: u1,
      img: u2,
    },
    userJourneyMap: {
      description: "User Journey for Art Exploration",
      imgUrl: journey,
    },
    wireframe: {
      topic: "Paper Wireframe",
      photo: paper2,
      title: "Digital Wireframe",
      image: digit,
      T: "Low Fidility Prototype",
      img: wire,
    },
    usabilityTesting: {
      summary: "Conducted user testing with a prototype to gather feedback.",
      img: usability,
      findings: [
        "• Navigation Complexity: Users struggled to locate specific artworks or exhibitions; clearer categories and filtering options (e.g., by medium or artist) would improve discoverability.",
        "• Artwork Viewing Limitations: Small images restricted users’ ability to appreciate details; a high-resolution zoom or fullscreen option is recommended.",
        "• Limited Exhibit Information: Users found it challenging to access background details on artworks or artists; adding expandable descriptions or tooltips could enhance this.",
        "• Search Inefficiency: Search results were often irrelevant or slow to update; implementing advanced, dynamic search by title, artist, or keyword would improve usability."

      ],
    },
    finalDesign: {
      description: "High fidelity designs that capture the app's visual elements.",
      imgUrl: high,
    },
    conclusion: {
      summary: "Designing the art gallery mobile application has been an enriching experience that emphasized the power of well-constructed user interfaces and user-centered design principles to enhance digital art exploration. This project involved a blend of creativity and functionality, aiming to make art accessible, engaging, and seamless for users. Through various design stages, from empathy mapping and persona creation to wireframing and usability testing, the app evolved to prioritize an intuitive and visually appealing experience for art lovers.",
      Impact: "The design of this application holds potential to broaden the accessibility of art galleries, making art more available to a wider audience beyond physical gallery walls. By creating a platform that is both engaging and informative, users can explore and appreciate artwork from different artists, styles, and periods, regardless of their location. Additionally, the app provides an opportunity for galleries to reach a more diverse audience and potentially increase their visitor numbers and revenue through online engagement and digital ticketing options. The social sharing and interactive features also encourage community participation and help create a network of art enthusiasts, fostering a more connected and inclusive art world.",

      Knowledge: "Throughout this design process, I learned valuable lessons in user experience (UX) and user interface (UI) design. Understanding the users' needs and how they engage with art digitally provided insights into creating functional yet aesthetic designs. I gained proficiency in creating empathy maps and personas, which helped me step into the users’ shoes and make informed design decisions. Additionally, this project sharpened my wireframing and prototyping skills, and the usability testing stage underscored the importance of feedback in refining the design. I also learned how to balance visual elements with functionality, ensuring that each feature enhances the overall user experience rather than complicating it.",
    },
  },


  {
    id: "3",
    title: "Both App and web design for Gadget shopping",
    description: "Design for Art Euthistic",
    imgUrl: cover,
    caseStudy: {
      images: [cover],
      ProjectBackground: "GadgetGrove is an App and Web platform for convenient and efficient online shopping of electronic gadgets like iPhones, laptops, and cameras. Users can browse, compare, and purchase gadgets from home, avoiding physical stores while accessing the best deals and latest information.",
      ProblemStatement: "Buying electronic gadgets often means navigating multiple sites, inconsistent info, and complex checkouts. Users need a reliable, streamlined platform to easily find, compare, and purchase gadgets.",
      ProjectGoals: "The project aims to enhance the online shopping experience for electronic gadgets by addressing specific user needs and frustrations identified through research. It ensures a seamless shopping process, overcoming challenges faced in finding and purchasing gadgets online. The platform allows users to easily browse, compare, and purchase electronic gadgets such as iPhones, laptops, cameras, etc. The design is user-friendly, accessible, and easy to navigate.",
      MyRole: "As the UX designer, I managed the user experience design process for GadgetGrove from start to finish. This included conducting user research, creating wireframes and prototypes, performing user testing, and finalizing the design to ensure a smooth and simple online shopping experience for electronic gadgets.",
      TargetAudience: ["• Tech enthusiasts who frequently buy electronic gadgets.",
        "• Students and young professionals looking for an easy and reliable way to purchase the latest gadgets.",
        "• Busy individuals seeking a quick and seamless shopping experience.",]

    },
    researchConducted: {
      summary: "I conducted interviews and created empathy maps to understand the users I was designing for and their needs. A primary user group identified through research was students and young professionals who want a quick and reliable way to buy electronic gadgets. The research revealed that users often face difficulties in comparing products and ensuring the reliability of online purchases.",
      interview: "I interviewed 3 individuals to understand their experiences with online shopping for electronic gadgets. Through these interviews, I explored their habits, frustrations, and expectations, gathering insights to inform the development of a user-centric solution.",
      interviewquestion: ["1.How often do you buy electronic gadgets online?",
        "2.Have you ever experienced difficulty comparing different gadgets?",
        "3.What frustrations or challenges do you encounter when shopping for gadgets online?",
        "4.What do you think about the idea of having a centralized platform for all your gadget needs?",
        "5.Have you used any gadget shopping platforms before? If so, what did you like or dislike about them?",
        "6.Do you think the platform “GadgetGrove” will solve the problem?",
        "7.What features would you expect from a platform like GadgetGrove?",
        "8.How likely are you to use a platform like GadgetGrove to purchase your gadgets?"],
      userpainpoint: [
        "•	 Product Availability: Users often struggle to find out if a product is in stock without visiting multiple websites. ",
        "•	Product Comparison: People find it difficult to compare specifications and prices of different gadgets.",
        "•	Time Wasting: Busy individuals don't want to spend too much time searching for the right product and completing the purchase process",
      ],

      findings: [
        "• Frequent Gadget Shoppers: Many participants frequently buy gadgets online but find it challenging to compare products across different platforms, leading to frustration and extended decision-making time.",
        "• Need for Centralization: Most users appreciate the idea of a centralized platform, expressing that it would simplify their shopping experience by consolidating product comparisons, reviews, and availability checks in one place.",
        "• Pain Points with Existing Platforms: Users cited difficulties with navigation, inconsistent product information, and mistrust in reviews as major challenges on current platforms, which often hinder their shopping experience.",
        "• Positive Response to GadgetGrove's Potential: Overall, participants were optimistic that GadgetGrove could address their main frustrations, hoping for features like product comparisons, trustworthy reviews, and clear availability status to improve their buying process.",
      ],
    },
    userPersona: {
      imgUrl: par,
      img: po,
    },
    userJourneyMap: {
      description: "User Journey for Art Exploration",
      imgUrl: journey1,
    },
    wireframe: {
      topic: "Paper Wireframe",
      photo: paper3,
      title: "Digital Wireframe",
      image: digital1,
      T: "Low Fidility Prototype",
      img: low3,
    },
    usabilityTesting: {
      summary: "Conducted user testing with a prototype to gather feedback.",
      img: usa1,
      findings: [
        "• Users found the real-time product availability feature highly useful.",
        "• Some users suggested adding a color-coding system to quickly distinguish between available, low stock, and out-of-stock items.",
        "• The interactive product comparison tool was intuitive and easy to use.",
        "• Some users wanted more detailed specifications and side-by-side visuals.",
      ],
    },
    finalDesign: {
      description: "High fidelity designs that capture the app's visual elements.",
      imgUrl: high3,
    },
    conclusion: {
      summary: "The GadgetGrove platform greatly improved the shopping experience for students and young professionals looking to purchase electronic gadgets. By focusing on user-centered design, the app streamlined product discovery, comparison, and availability checks, addressing common user pain points. Usability research played a key role in uncovering these issues, allowing the team to prioritize features like product comparison, intuitive category navigation, and reliable review integration. This project highlighted the value of early user involvement in the design process, ultimately leading to a more enjoyable and efficient experience for the target audience.",
      Impact: "The GadgetGrove platform significantly enhanced the user experience, making it easier and more enjoyable for students and young professionals to purchase electronic gadgets. One study participant remarked, This platform makes finding and buying gadgets so much simpler—I love being able to compare products and check availability all in one place!",

      Knowledge: "Throughout this project, I learned the importance of user-centered design. Understanding the specific needs and pain points of our target audience was crucial in creating features that genuinely enhance the user experience. Conducting thorough usability research provided invaluable insights that guided our design decisions. These studies highlighted the practical challenges users face, such as comparing gadgets, navigating product categories, and trusting online reviews. This experience reinforced the idea that involving users early in the design process leads to more effective and satisfying product outcomes.",
    },
  },
];
