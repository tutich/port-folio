export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently Learning React Native",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Would you like to collaborate on a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      
      id: 1,
      title: "AI Image SaaS - Canva Application",
      des: "A Real Software-as-a-Service application featuring AI capabilities, integrated payment and credits systems, built with the latest technology stack.",
      img: "/p3.png",
      iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
      link: "https://imagnify-rosy.vercel.app/",
     
    },
    {
      id: 2,
      title: "MERN Dashboard",
      des: "The MERN Dashboard showcases a variety of functionalities designed to manage and visualize data effectively. It integrates MongoDB for robust data storage, Express.js for server-side logic, React.js for responsive UI components, and Node.js for backend operations",
      img: "/p2.png",
      iconLists: ["/re.svg", "/tail.svg", "/node.png", "/ex.png", "/mon.png", "/mat.svg" ],
      link: "https://mern-client-hrdr.onrender.com/",
    },
    {
      id: 3,
      title: "RentUp Real-Estate App",
      des: "A user-friendly platform for renting properties, offering a seamless real estate experience with rentUp..",
      img: "/p1.png",
      iconLists: ["/re.svg", "/tail.svg", "/css.png" ],
      link: "https://real-estate-three-orpin.vercel.app/",
    },
    {
      id: 4,
      title: "Easybank Landing Page",
      des: "An elegant and responsive landing page for Easybank, showcasing modern banking features and services...",
      img: "/p4.png",
      iconLists: [ "/re.svg", "/tail.svg", "/css.png"],
      link: "https://landingpage-8v6e.vercel.app/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with Peter was a fantastic experience. His professionalism, promptness, and commitment to delivering outstanding results were apparent throughout our project. Peter's passion for every aspect of development is remarkable. If you want to elevate your website and boost your brand, Peter is the perfect partner ",
        name: "Shadrack C.",
          title: "Frontend Engineer - Techops Apex",
    },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Web App Dev - Techops",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    // {
    //   id: 2,
    //   title: "Web App Dev - Techops",
    //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp2.svg",
    // },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Took part in the dev of a web app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    // {
    //   id: 4,
    //   title: " Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/tutich"
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://x.com/peterrmufc"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/peter-koinange-455494271/"
    },
  ];