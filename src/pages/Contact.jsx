import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <div class="mx-auto max-w-xl">
          <div class="mt-5 text-center">
            <div class="relative flex flex-col items-center">
              <div class="absolute -top-14 left-0 hidden text-[120px] font-bold text-gray-400 opacity-10 md:block">
                Contact
              </div>
              <h1 class="text-4xl font-bold dark:text-white">
                {" "}
                Our <span class="text-red-500"> Contact</span>{" "}
              </h1>
              <div class="mb-10 mt-1 flex w-24 overflow-hidden rounded">
                <div class="h-2 flex-1 bg-red-200"></div>
                <div class="h-2 flex-1 bg-red-400"></div>
                <div class="h-2 flex-1 bg-red-600"></div>
              </div>
            </div>
            <p class="mb-16 text-center text-base text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              magni eius eaque? Pariatur numquam, odio quod nobis ipsum ex
              cupiditate?
            </p>
          </div>
        </div>

        <div class="rounded-md border bg-white px-8 py-8 shadow-md dark:border-gray-800 dark:bg-gray-800">
          <form action="">
            <div class="mb-6">
              <h2 class="text-gray-00 text-xl font-bold dark:text-gray-400">
                Please send message for futher information!{" "}
              </h2>
            </div>
            <div class="-mx-2 mb-4 flex flex-wrap">
              <div class="mb-4 w-full px-2 lg:mb-0 lg:w-1/2">
                <input
                  class="w-full rounded-md border bg-gray-50 px-3 py-2 leading-loose dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400"
                  type="text"
                  placeholder="First Name.."
                />
              </div>
              <div class="w-full px-2 lg:w-1/2">
                <input
                  className="w-full rounded-md border bg-gray-50 px-3 py-2 leading-loose dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400"
                  type="text"
                  placeholder="Last Name.."
                />
              </div>
            </div>
            <input
              className="mb-4 w-full rounded-md border bg-gray-50 px-3 py-2 leading-loose dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400"
              type="email"
              placeholder="abc@gmail.com"
            />
            <textarea
              rows="4"
              type="message"
              placeholder="Write a message..."
              class="mb-4 block w-full rounded border bg-gray-50 px-4 py-7 leading-tight text-gray-700 dark:border-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 "
            ></textarea>
            <button class="w-full rounded-md bg-red-600 py-4 text-sm font-bold leading-normal text-white transition-all duration-300 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600">
              Send Message
            </button>
          </form>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5190186332275!2d-7.612445924970957!3d33.59183544190202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd62408f3ef9%3A0xf0df71d96535da97!2s7%20Rue%20Bouchaib%20El%20Machrouhi%2C%20Casablanca%2020250!5e0!3m2!1sfr!2sma!4v1709150151948!5m2!1sfr!2sma"
          width="600"
          height="450"
          style={{ border: "0" }} // Notice the use of curly braces to pass a JavaScript object
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
