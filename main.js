import './style.css'
import illustrationMockups from './images/illustration-mockups.svg'
import logo from './images/logo.svg'

document.querySelector('#app').innerHTML = `
  <div class="">
    <header class="p-7 max-b1:p-8 max-lg:p-6">
      <img src="${logo}" alt="huddle" class="w-60 h-auto max-b1:w-48 max-lg:w-36">
    </header>
    <main class="flex justify-between p-7 max-b1:p-8 max-lg:p-6 max-b2:flex-wrap max-b2:gap-4 max-b2:justify-center max-b2:w-fit">
      <img src="${illustrationMockups}" alt="mockups" class="w-xl self-center max-b1:w-b1xl max-lg:w-lgxl">
      <section class="w-fit max-b2:flex max-b2:flex-col max-b2:items-center">
        <h1 class="text-4.5xl leading-normal font-bold mt-10 max-b1:text-4xl max-b1:mt-8 max-b1:leading-relaxed max-lg:text-3xl max-lg:mt-6 max-b2:text-center max-xss:text-2xl">
          Build The Community <br> Your Fans Will Love
        </h1>
        <p class="text-lg mt-5 max-w-t max-b1:text-sm max-b1:mt-4 max-b1:max-w-b1t max-lg:text-xs max-lg:mt-3 max-lg:max-w-80 max-b2:text-center">
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
          Create connections with your users as you engage in genuine discussion. 
        </p>
        <div class="bg-white w-52 h-14 rounded-full mt-5 flex justify-center items-center text-my-violet text-lg transition-all cursor-pointer hover:bg-my-soft-magenta hover:text-white max-b1:w-40 max-b1:h-11 max-b1:mt-4 max-b1:text-sm max-lg:w-32 max-lg:h-9 max-lg:mt-3 max-lg:text-xs">
          Register
        </div>
      </section>
    </main>
    <footer class="flex items-center justify-end gap-3 px-10 mb-5 max-b1:px-8 max-b1:gap-2 max-b1:mt-20 max-lg:px-6 max-lg:gap-1.5 max-lg:mt-10 max-b2:justify-center max-b2:gap-3">
      <div class="flex justify-center items-center w-10 h-10 border-solid rounded-full border-2 transition-all cursor-pointer hover:border-my-soft-magenta group max-b1:w-8 max-b1:h-8" max-lg:w-6 max-lg:h-6>
        <i class="fa-brands fa-facebook-f text-white text-xl transition-all group-hover:text-my-soft-magenta max-b1:text-base max-lg:text-sm"></i>
      </div>
      <div class="flex justify-center items-center w-10 h-10 border-solid rounded-full border-2 transition-all cursor-pointer hover:border-my-soft-magenta group max-b1:w-8 max-b1:h-8" max-lg:w-6 max-lg:h-6>
        <i class="fa-brands fa-twitter text-white text-xl transition-all group-hover:text-my-soft-magenta max-b1:text-base max-lg:text-sm"></i>
      </div>
      <div class="flex justify-center items-center w-10 h-10 border-solid rounded-full border-2 transition-all cursor-pointer hover:border-my-soft-magenta group max-b1:w-8 max-b1:h-8" max-lg:w-6 max-lg:h-6>
        <i class="fa-brands fa-instagram text-white text-xl transition-all group-hover:text-my-soft-magenta max-b1:text-base max-lg:text-sm"></i>
      </div>
    </footer>
  </div>
`