import anisha from "../assets/avatar-anisha.png";
import ali from "../assets/avatar-ali.png";
import richard from "../assets/avatar-richard.png";
// import shanai from "../assets/avatar-shanai.png";
import Card from "./Card";

const testimonial = [
  {
    image: anisha,
    name: "Anisha Li",
    comment:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    image: ali,
    name: "Ali Bravo",
    comment:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    image: richard,
    name: "Richard Watts",
    comment:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  // {
  //   image: shanai,
  //   name: "Shanai Gough",
  //   comment:
  //     "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  // },
];
const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="max-w-6xl px-5 mt-32 mx-auto text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex gap-12 flex-col md:flex-row mt-24 md:space-x-6 snap-x">
          {testimonial.map((item) => {
            return (
              <Card
                key={item.name}
                image={item.image}
                name={item.name}
                comment={item.comment}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/"
            className="bg-brightRed rounded-full p-3 pt-2 px-6 text-white hover:bg-brightRedLight shadow-sm shadow-brightRed"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
