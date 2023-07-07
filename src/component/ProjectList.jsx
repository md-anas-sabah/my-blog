import React from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import muroexe from "../assets/muroexe.png";
// import vsapp from "../assets/vsapp.png";
import challan from "../assets/challan.jpg";
import foodista from "../assets/foodista.png";
import quiz from "../assets/quiz.png";
import todo from "../assets/todo.png";
import isyour from "../assets/isyour.png";
import cash from "../assets/cash.png";

const ProjectList = () => {
  return (
    <div className="px-10 py-5">
      <div>
        <hr className="border-[#F7AB0A] mb-10" />
      </div>

      <div>
        <h1 className="text-center text-3xl uppercase">My Projects</h1>
      </div>
      <div className="flex flex-col mt-3 items-center md:flex-col md:items-center">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
          <Projects
            title="Muroexe"
            image={muroexe}
            createdAt="13 March 2023"
            category_1="https://github.com/md-anas-sabah/muroexe"
            category_2="https://muroexe.vercel.app/ "
          />

          <Projects
            title="Quiz Application"
            image={quiz}
            createdAt="01 March 2023"
            category_1="https://github.com/md-anas-sabah/otaku-quizzer"
            category_2="https://otaku-quizzer.vercel.app/"
          />

          <Projects
            title="to-do plus pomodoro app"
            image={todo}
            createdAt="10 Nov 2023"
            category_1="https://github.com/md-anas-sabah/adv-todo"
            category_2="https://adv-todo-iota.vercel.app/"
          />

          <Projects
            title="Foodista"
            image={foodista}
            createdAt="10 January 2023"
            category_1="https://github.com/md-anas-sabah/foodista"
            category_2="https://foodista.vercel.app/"
          />
          <Projects
            title="Is your birthday lucky?"
            image={isyour}
            createdAt="10 January 2023"
            category_1="https://github.com/md-anas-sabah/is-your-birthday-lucky"
            category_2="https://luckybirthday-v1.netlify.app/"
          />
          <Projects
            title="Cash Register"
            image={cash}
            createdAt="10 January 2023"
            category_1="https://github.com/md-anas-sabah/Cash-Register"
            category_2="https://cash-register-v1.netlify.app//"
          />
        </div>
        {/* <div className="px-5 py-3 text-[10px] md:text-base bg-gray-900 flex items-center justify-center  rounded-full text-[#F7AB0A] h-12 w-40">
          <Link to="/" className="text-lg">
            See More
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectList;
