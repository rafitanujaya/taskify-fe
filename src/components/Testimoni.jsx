import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimoni = () => {
  const testimonials = [
    {
      name: "Alya Rahma",
      role: "Project Manager",
      feedback:
        "Taskify completely transformed how my team collaborates. The AI assistant feature is a game changer!",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "Dimas Prasetyo",
      role: "Frontend Developer",
      feedback:
        "I love how intuitive and minimal Taskify feels. Everything just works seamlessly!",
      avatar: "https://i.pravatar.cc/100?img=33",
    },
    {
      name: "Rani Oktaviani",
      role: "UI/UX Designer",
      feedback:
        "The design and UX are top-notch. It’s clean, fast, and makes task tracking effortless!",
      avatar: "https://i.pravatar.cc/100?img=56",
    },
    {
      name: "Bagas Setiawan",
      role: "Marketing Lead",
      feedback:
        "Taskify helps me stay organized across all campaigns — super efficient and fun to use!",
      avatar: "https://i.pravatar.cc/100?img=58",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">
        What Our Users Say
      </h2>
      <div className="max-w-5xl mx-auto overflow-x-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {testimonials.concat(testimonials).map((user, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[320px] bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center mx-2 hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-gray-600 italic mb-4">“{user.feedback}”</p>
              <img
                src={user.avatar}
                alt={user.name}
                className="w-14 h-14 rounded-full mx-auto mb-3 border-2 border-blue-500 object-cover"
              />
              <h4 className="font-semibold text-gray-800">{user.name}</h4>
              <p className="text-sm text-gray-500">{user.role}</p>
              <div className="flex justify-center mt-3 text-yellow-400">
                {Array(5)
                  .fill(null)
                  .map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-yellow-500" />
                  ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimoni;
