import React from 'react'
import Highlight from './HighLight';
import { useState } from 'react';

const P = () => {
  const highlights = [
    {
      number: 1,
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
      number: 2,
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
      number: 3,
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
    {
      number: 4,
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jane Doe',
      state: 'California',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150' // Replace with your image URL
    },
    {
      name: 'John Smith',
      state: 'New York',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150' // Replace with your image URL
    },
    {
      name: 'Alice Johnson',
      state: 'Texas',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150' // Replace with your image URL
    },
  ];

  const handleTestimonialClick = (index) => {
    setActiveIndex(index);
  };


  function Advantages() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  }

    const advantages = [
      {
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-16h-5v16zm-3 8H13V12h4v4H13a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm-9 12h15.5" /></svg>,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12v14M5 12v-14" /></svg>,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    ];

  
    function App() {
      const [selectedPlan, setSelectedPlan] = useState(1);
    
      const handlePlanChange = (planId) => {
        setSelectedPlan(planId);
      };
    }









  
  return (
    <main className='bg-purple-950 text-white'>
       
        <div className='container mx-auto'>
            <h1 className="text-4xl font-bold mb-4">Piano Course</h1>
            <p className="text-lg mb-8">Find the perfect course to enhance your musical skills and knowledge.</p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md">I am interested</button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">Book free demo</button>
        </div>

        <div className="container mx-auto mt-16 text-white text-center">
            <div className='bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900'>
            <h2 className="text-2xl font-bold mb-4">Book a Free Trial Now</h2>
                <p className="text-lg mb-8">Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Eleifend quam adipiscing vitae proin sagittis nisl. Ut tristique et egestas quis ipsum suspendisse. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.</p>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md flex items-center gap-2">
                        I am interested 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6.63 6.63a1 1 0 010 1.414l-6.63 6.63a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
            </div>

        </div>


        <div className=" bg-purple-950   text-white p-10">
          <h1 className="text-3xl font-bold mb-4">Program Overview</h1>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
              ipsum
            </p>
            <div className="flex flex-col md:flex-row  gap-6">
              <div className="flex flex-col gap-4">
                <div className=" p-4 rounded-md shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="https://i.pravatar.cc/30"
                      alt="Profile Picture"
                      className="rounded-full"
                    />
                    <h3 className="text-xl font-medium">Lorem ipsum</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className=" p-4 rounded-md shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="https://i.pravatar.cc/30"
                      alt="Profile Picture"
                      className="rounded-full"
                    />
                    <h3 className="text-xl font-medium">Lorem ipsum</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1523460838556-06f5a19674db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Keyboard on sheet music"
                  className="max-w-full rounded-md"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className=" p-4 rounded-md shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="https://i.pravatar.cc/30"
                      alt="Profile Picture"
                      className="rounded-full"
                    />
                    <h3 className="text-xl font-medium">Lorem ipsum</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="p-4 rounded-md shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="https://i.pravatar.cc/30"
                      alt="Profile Picture"
                      className="rounded-full"
                    />
                    <h3 className="text-xl font-medium">Lorem ipsum</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
          </div>
        </div>
      </div>


      <div>
         <h1 className="text-4xl font-bold mb-10">Course Highlights</h1>
      <div className="flex gap-10">
        {highlights.map((highlight) => (
          <Highlight key={highlight.number} {...highlight} />
        ))}
      </div>
    </div>

    <div className="">
      <div className="container mx-auto">
          <div className='bg-gradient-to-r from-purple-800 to-black text-white py-10 px-5'>

          <h1 className="text-4xl font-bold mb-8 text-center">Curriculum</h1>
          </div>
        

        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Beginner</button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Advanced</button>
        </div>

        <ul className="text-lg leading-relaxed">
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Vestibulum auctor dapibus neque.</li>
          <li>Cras ornare tristique elit.</li>
          <li>Vivamus vestibulum nulla nec ante.</li>
          <li>Donec quis dui at dolor tempor interdum.</li>
        </ul>

       
      </div>
    </div>

    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 cursor-pointer ${
              index === activeIndex ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleTestimonialClick(index)}
          >
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.state}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-2 bg-gray-400 ${
              index === activeIndex ? 'bg-blue-500' : ''
            }`}
          />
        ))}
      </div>
    </div>


    <div className='text-center'>
      <h1 className='text-4xl font-bold'>Certification </h1>
    </div>
      
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Advantages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-6 flex flex-col items-center hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer ${
              activeIndex === index ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleItemClick(index)}
          >
            <div className="bg-purple-500 rounded-full p-4 mb-4">
              {advantage.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
          </div>
        ))}
      </div>
    </div>
    

    <div className="flex flex-col items-center justify-center py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center">
          <span className="text-white font-bold text-sm">1</span>
        </div>
        <div className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center">
          <span className="text-white font-bold text-sm">2</span>
        </div>
        <div className="rounded-full bg-purple-500 w-6 h-6 flex items-center justify-center">
          <span className="text-white font-bold text-sm">3</span>
        </div>
        <div className="rounded-full bg-gray-400 w-6 h-6 flex items-center justify-center">
          <span className="text-white font-bold text-sm">4</span>
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold mb-8">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-purple-800 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Plus</h3>
          <p className="text-lg font-medium mb-4">₹ ...</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mx-auto mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.889 3.453 6 6 0 01-10.889 3.453z"
              clipRule="evenodd"
            />
          </svg>
          <ul className="list-disc text-sm space-y-2">
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Lorem Ipsum Amet</li>
            <li>Lorem Ipsum Dolor</li>
            <li>Lorem Ipsum Amet</li>
          </ul>
        </div>
        <div className="bg-purple-800 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Plus Combo</h3>
          <p className="text-lg font-medium mb-4">₹ ...</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mx-auto mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7.5 5.466a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0zM3.314 12.466a.5.5 0 01.47-.332.5.5 0 01-.47.332z"
              clipRule="evenodd"
            />
          </svg>
          <ul className="list-disc text-sm space-y-2">
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Lorem Ipsum Amet</li>
            <li>Lorem Ipsum Dolor</li>
            <li>Lorem Ipsum Amet</li>
          </ul>
        </div>
        <div className="bg-purple-800 rounded-lg shadow-lg p-6 text-white relative">
          <h3 className="text-xl font-bold mb-4">Premium</h3>
          <p className="text-lg font-medium mb-4">₹ ...</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mx-auto mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7.5 5.466a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0zM3.314 12.466a.5.5 0 01.47-.332.5.5 0 01-.47.332z"
              clipRule="evenodd"
            />
          </svg>
          <ul className="list-disc text-sm space-y-2">
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Lorem Ipsum Amet</li>
            <li>Lorem Ipsum Dolor</li>
            <li>Lorem Ipsum Amet</li>
          </ul>
          <div className="absolute top-0 right-0 bg-purple-600 px-4 py-2 rounded-bl-lg text-sm font-medium text-white">
            Recommended
          </div>
        </div>
        <div className="bg-purple-800 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Premium Combo</h3>
          <p className="text-lg font-medium mb-4">₹ ...</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 mx-auto mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7.5 5.466a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0zM3.314 12.466a.5.5 0 01.47-.332.5.5 0 01-.47.332z"
              clipRule="evenodd"
            />
          </svg>
          <ul className="list-disc text-sm space-y-2">
            <li>Lorem Ipsum Dolor Sit</li>
            <li>Lorem Ipsum Amet</li>
            <li>Lorem Ipsum Dolor</li>
            <li>Lorem Ipsum Amet</li>
          </ul>
        </div>
      </div>
    </div>


    </main>
  )
}


export default P
