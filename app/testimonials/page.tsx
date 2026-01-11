"use client";
import { useState } from "react";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah M.",
      age: 28,
      condition: "Anxiety & Depression",
      story: "For years, I struggled with anxiety and depression, thinking I had to handle everything on my own. Reaching out for help was the hardest and best decision I ever made. Through therapy and medication, I learned coping strategies that transformed my life. Today, I'm not just surviving—I'm thriving. I have a job I love, meaningful relationships, and most importantly, hope for the future.",
      quote: "Asking for help isn't giving up—it's choosing to fight.",
      yearOfRecovery: "2021",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      name: "Marcus J.",
      age: 35,
      condition: "PTSD",
      story: "After serving in the military, I came home with invisible wounds. I experienced nightmares, flashbacks, and couldn't connect with my family. PTSD made me feel like a stranger in my own life. With the support of the Veterans Crisis Line and specialized trauma therapy, I slowly began to heal. It wasn't easy, and recovery isn't linear, but I'm learning to live with my experiences rather than being controlled by them.",
      quote: "Healing doesn't mean the damage never existed. It means it no longer controls my life.",
      yearOfRecovery: "2019",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Jennifer L.",
      age: 42,
      condition: "Bipolar Disorder",
      story: "My diagnosis of Bipolar II came after years of extreme mood swings that destroyed relationships and nearly cost me my career. Learning to manage my condition through medication, therapy, and lifestyle changes has been life-changing. I track my moods, maintain a regular sleep schedule, and stay connected with my support group. I'm proof that you can live a full, successful life with bipolar disorder.",
      quote: "My diagnosis wasn't a limitation—it was the beginning of understanding myself.",
      yearOfRecovery: "2018",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      name: "David K.",
      age: 23,
      condition: "Eating Disorder",
      story: "My struggle with anorexia started in high school and nearly killed me by my sophomore year of college. Recovery felt impossible—food was the enemy, and my eating disorder was my identity. Through intensive outpatient treatment, nutritional counseling, and the support of NEDA, I learned that recovery is possible. I graduated college, and now I'm training to become a nutritionist to help others facing similar battles.",
      quote: "Recovery isn't about food—it's about discovering who you are beyond the illness.",
      yearOfRecovery: "2022",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    },
    {
      name: "Aisha R.",
      age: 31,
      condition: "OCD",
      story: "OCD consumed hours of my day with intrusive thoughts and compulsive rituals. I was convinced I had to perform these rituals to keep my loved ones safe. Exposure and Response Prevention (ERP) therapy changed everything. It was terrifying at first, but gradually I learned that my fears weren't facts. Now I can enjoy life without being controlled by obsessions and compulsions.",
      quote: "The thoughts are still there sometimes, but they don't define me anymore.",
      yearOfRecovery: "2020",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
    },
    {
      name: "Robert T.",
      age: 56,
      condition: "Depression",
      story: "After my wife passed away, I fell into a deep depression. I isolated myself, stopped taking care of my health, and couldn't see a reason to go on. My daughter convinced me to call the 988 Lifeline one night when things felt unbearable. That call saved my life. I started grief counseling and joined a support group. While I still miss my wife every day, I've found ways to honor her memory while rebuilding my life.",
      quote: "It's never too late to ask for help, no matter your age or circumstances.",
      yearOfRecovery: "2023",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Maya P.",
      age: 19,
      condition: "Social Anxiety",
      story: "College was supposed to be the best years of my life, but social anxiety made it a nightmare. I couldn't participate in class, make friends, or even go to the dining hall without panic attacks. Cognitive Behavioral Therapy (CBT) and gradual exposure helped me challenge my negative thoughts. Now I'm president of a campus organization and actually enjoy social events. I still get nervous, but I don't let fear stop me.",
      quote: "Courage isn't the absence of fear—it's taking action despite it.",
      yearOfRecovery: "2024",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
    },
    {
      name: "James C.",
      age: 45,
      condition: "Substance Use & Depression",
      story: "I used alcohol to numb the pain of depression for over a decade. It cost me my marriage, my job, and nearly my life. Getting into a dual-diagnosis treatment program that addressed both my addiction and depression was crucial. SMART Recovery meetings, therapy, and reconnecting with my kids gave me reasons to stay sober. Five years clean, and I'm finally the father my children deserve.",
      quote: "Recovery gave me back everything addiction took, and more.",
      yearOfRecovery: "2019",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
    }
  ];

  const quickStories = [
    {
      name: "Emily S.",
      condition: "Panic Disorder",
      message: "I haven't had a panic attack in six months. Therapy taught me I'm stronger than my anxiety.",
      duration: "In recovery for 2 years"
    },
    {
      name: "Carlos M.",
      condition: "ADHD",
      message: "Getting diagnosed at 30 explained so much. Medication and coaching helped me finally reach my potential.",
      duration: "Diagnosed in 2022"
    },
    {
      name: "Lisa W.",
      condition: "Postpartum Depression",
      message: "I thought I was a terrible mother. Treatment helped me realize I was just sick and needed help. Now I can truly enjoy my baby.",
      duration: "Recovered in 2023"
    },
    {
      name: "Kevin H.",
      condition: "Schizophrenia",
      message: "My symptoms are managed with medication and therapy. I have a job, an apartment, and hope for the future.",
      duration: "Stable since 2020"
    },
    {
      name: "Priya N.",
      condition: "Generalized Anxiety",
      message: "Mindfulness and CBT changed my relationship with worry. I can finally sleep through the night.",
      duration: "In treatment since 2021"
    },
    {
      name: "Tyler B.",
      condition: "Body Dysmorphia",
      message: "I spent years hating my reflection. Therapy helped me see myself with compassion instead of criticism.",
      duration: "In recovery for 3 years"
    }
  ];

  const familyTestimonials = [
    {
      name: "Patricia R.",
      relation: "Mother",
      story: "Watching my daughter struggle with depression was heartbreaking. I felt helpless and didn't know how to support her. Family therapy taught me how to help without enabling, how to listen without fixing, and how to take care of myself too. Today, my daughter is thriving, and our relationship is stronger than ever. To other parents: educate yourself, be patient, and never give up hope.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80"
    },
    {
      name: "Michael D.",
      relation: "Husband",
      story: "When my wife was diagnosed with bipolar disorder, I didn't understand it. I took her mood swings personally and felt like I was walking on eggshells. Joining a NAMI support group for families changed everything. I learned that her illness wasn't about me, and I discovered ways to support her effectively. We're partners in managing her condition now, and our marriage is stronger for it.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
    },
    {
      name: "Rachel K.",
      relation: "Sister",
      story: "My brother's suicide attempt devastated our family. We didn't see the signs, and the guilt was overwhelming. Through family counseling and support groups, we learned about suicide prevention and how to have difficult conversations. My brother is in recovery now, and we've all learned to talk openly about mental health. I wish we had known sooner that it's okay to ask for help.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <PortfolioNavbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl pt-10 text-center">
                Getting Help
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Featured Testimonial Carousel */}
        <section className="pt-16 pb-20 bg-teal-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Featured Recovery Stories
            </h2>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-96 md:h-auto">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-lg opacity-90">
                        Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].condition}
                      </p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Quote className="w-12 h-12 text-teal-500 mb-6" />
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {testimonials[currentTestimonial].story}
                    </p>

                    <blockquote className="border-l-4 border-teal-500 pl-6 mb-6">
                      <p className="text-xl font-semibold text-gray-900 italic">
                        "{testimonials[currentTestimonial].quote}"
                      </p>
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Journey to recovery began:</span>{" "}
                        {testimonials[currentTestimonial].yearOfRecovery}
                      </div>
                      <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-teal-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-teal-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-teal-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-teal-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-teal-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stories Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Voices of Hope
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Brief messages from individuals on their recovery journeys
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quickStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{story.name}</h3>
                      <p className="text-sm text-teal-700 font-semibold">{story.condition}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 italic">
                    "{story.message}"
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {story.duration}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Family Perspectives */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Supporting Loved Ones
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stories from family members and friends who learned to support those with mental health challenges
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {familyTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-sm opacity-90">{testimonial.relation}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {testimonial.story}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Recovery in Numbers
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">70-90%</div>
                <p className="text-gray-700">
                  of people see significant symptom reduction with treatment
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-600 mb-2">80%</div>
                <p className="text-gray-700">
                  of people with depression improve with treatment
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">90%</div>
                <p className="text-gray-700">
                  of people with panic disorder respond to treatment
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-600 mb-2">60-80%</div>
                <p className="text-gray-700">
                  reduction in symptoms with proper bipolar treatment
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}