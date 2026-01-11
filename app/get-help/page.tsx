"use client";
import { useState } from "react";
import { PortfolioNavbar } from "@/components/PortfolioNavbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Users,
  BookOpen,
  Phone,
  ExternalLink,
  ChevronDown,
  Shield,
  Lightbulb,
  Activity,
} from "lucide-react";

export default function HelpPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const disorders = [
    {
      name: "Anxiety Disorders",
      icon: <Activity className="w-6 h-6" />,
      definition:
        "Anxiety disorders involve excessive fear or anxiety that interferes with daily activities. Unlike normal feelings of nervousness, these disorders persist and can worsen over time.",
      types: [
        "Generalized Anxiety Disorder (GAD)",
        "Panic Disorder",
        "Social Anxiety Disorder",
        "Specific Phobias",
        "Agoraphobia",
      ],
      symptoms:
        "Excessive worry, restlessness, fatigue, difficulty concentrating, irritability, muscle tension, sleep disturbances, panic attacks",
      prevalence:
        "Affects approximately 31.1% of U.S. adults at some point in their lives",
      color: "from-teal-500 to-cyan-600",
    },
    {
      name: "Depression",
      icon: <Brain className="w-6 h-6" />,
      definition:
        "Major Depressive Disorder is characterized by persistent sadness and loss of interest in activities, affecting how you feel, think, and handle daily activities.",
      types: [
        "Major Depressive Disorder",
        "Persistent Depressive Disorder (Dysthymia)",
        "Postpartum Depression",
        "Seasonal Affective Disorder (SAD)",
        "Bipolar Depression",
      ],
      symptoms:
        "Persistent sad mood, loss of interest, changes in appetite or weight, sleep disturbances, fatigue, feelings of worthlessness, difficulty concentrating, thoughts of death",
      prevalence:
        "Affects approximately 21 million adults in the U.S. (8.4% of the population)",
      color: "from-teal-600 to-cyan-700",
    },
    {
      name: "Bipolar Disorder",
      icon: <Activity className="w-6 h-6" />,
      definition:
        "Bipolar disorder causes unusual shifts in mood, energy, activity levels, and concentration. Episodes can range from manic (elevated mood) to depressive periods.",
      types: [
        "Bipolar I Disorder",
        "Bipolar II Disorder",
        "Cyclothymic Disorder",
      ],
      symptoms:
        "Manic episodes: elevated mood, increased activity, decreased need for sleep, racing thoughts. Depressive episodes: similar to major depression",
      prevalence: "Affects approximately 2.8% of U.S. adults",
      color: "from-cyan-500 to-teal-600",
    },
    {
      name: "Post-Traumatic Stress Disorder (PTSD)",
      icon: <Shield className="w-6 h-6" />,
      definition:
        "PTSD develops after exposure to a traumatic event. It involves persistent re-experiencing of the trauma, avoidance behaviors, and hyperarousal.",
      types: [
        "Acute PTSD",
        "Chronic PTSD",
        "Complex PTSD",
        "Delayed-Onset PTSD",
      ],
      symptoms:
        "Intrusive memories, nightmares, flashbacks, avoidance of trauma reminders, negative changes in thinking, hypervigilance, exaggerated startle response",
      prevalence: "Affects approximately 3.6% of U.S. adults annually",
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "Obsessive-Compulsive Disorder (OCD)",
      icon: <Brain className="w-6 h-6" />,
      definition:
        "OCD is characterized by unreasonable thoughts and fears (obsessions) that lead to compulsive behaviors performed to ease anxiety.",
      types: [
        "Contamination OCD",
        "Checking OCD",
        "Symmetry and Ordering",
        "Intrusive Thoughts",
        "Hoarding Disorder",
      ],
      symptoms:
        "Recurrent unwanted thoughts, repetitive behaviors or mental acts, excessive cleaning, checking, or counting, significant distress",
      prevalence: "Affects approximately 1.2% of U.S. adults",
      color: "from-cyan-600 to-teal-700",
    },
    {
      name: "Eating Disorders",
      icon: <Heart className="w-6 h-6" />,
      definition:
        "Eating disorders involve serious disturbances in eating behaviors and related thoughts and emotions, often focused on food, body weight, and shape.",
      types: [
        "Anorexia Nervosa",
        "Bulimia Nervosa",
        "Binge-Eating Disorder",
        "Avoidant/Restrictive Food Intake Disorder (ARFID)",
      ],
      symptoms:
        "Preoccupation with weight, restrictive eating, binge eating, purging behaviors, distorted body image, extreme weight changes",
      prevalence:
        "Affects approximately 9% of the U.S. population in their lifetime",
      color: "from-teal-500 to-cyan-600",
    },
    {
      name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      icon: <Lightbulb className="w-6 h-6" />,
      definition:
        "ADHD is characterized by persistent patterns of inattention and/or hyperactivity-impulsivity that interfere with functioning or development.",
      types: [
        "Predominantly Inattentive Type",
        "Predominantly Hyperactive-Impulsive Type",
        "Combined Type",
      ],
      symptoms:
        "Difficulty sustaining attention, easily distracted, forgetfulness, fidgeting, excessive talking, difficulty waiting turns, impulsivity",
      prevalence: "Affects approximately 4.4% of U.S. adults",
      color: "from-cyan-500 to-teal-600",
    },
    {
      name: "Schizophrenia and Psychotic Disorders",
      icon: <Brain className="w-6 h-6" />,
      definition:
        "Schizophrenia involves distortions in thinking, perception, emotions, language, sense of self, and behavior, often including psychotic experiences.",
      types: [
        "Schizophrenia",
        "Schizoaffective Disorder",
        "Delusional Disorder",
        "Brief Psychotic Disorder",
      ],
      symptoms:
        "Hallucinations, delusions, disorganized speech, disorganized or catatonic behavior, negative symptoms (diminished emotional expression)",
      prevalence: "Affects approximately 0.3-0.7% of the population",
      color: "from-teal-600 to-cyan-700",
    },
  ];

  const nationalResources = [
    {
      name: "988 Suicide & Crisis Lifeline",
      description:
        "24/7 free and confidential support for people in distress, prevention and crisis resources",
      contact: "Call or text 988",
      website: "https://988lifeline.org",
      color: "bg-teal-600",
    },
    {
      name: "National Alliance on Mental Illness (NAMI)",
      description:
        "Advocacy, education, support, and public awareness for mental health",
      contact: "1-800-950-NAMI (6264)",
      website: "https://www.nami.org",
      color: "bg-teal-500",
    },
    {
      name: "SAMHSA National Helpline",
      description:
        "Treatment referral and information service (in English and Spanish)",
      contact: "1-800-662-HELP (4357)",
      website: "https://www.samhsa.gov/find-help/national-helpline",
      color: "bg-cyan-600",
    },
    {
      name: "Crisis Text Line",
      description: "Free, 24/7 support for those in crisis via text",
      contact: "Text HOME to 741741",
      website: "https://www.crisistextline.org",
      color: "bg-cyan-500",
    },
    {
      name: "National Institute of Mental Health (NIMH)",
      description: "Leading federal agency for research on mental disorders",
      contact: "1-866-615-6464",
      website: "https://www.nimh.nih.gov",
      color: "bg-teal-700",
    },
    {
      name: "Mental Health America (MHA)",
      description:
        "Community-based nonprofit dedicated to mental health advocacy",
      contact: "Online screening tools available",
      website: "https://www.mhanational.org",
      color: "bg-cyan-700",
    },
    {
      name: "The Trevor Project",
      description:
        "Crisis intervention and suicide prevention for LGBTQ+ youth",
      contact: "1-866-488-7386 or text START to 678-678",
      website: "https://www.thetrevorproject.org",
      color: "bg-teal-600",
    },
    {
      name: "Veterans Crisis Line",
      description: "24/7 support for veterans and their families",
      contact: "Call 988 then press 1, or text 838255",
      website: "https://www.veteranscrisisline.net",
      color: "bg-cyan-600",
    },
    {
      name: "Anxiety and Depression Association of America (ADAA)",
      description: "Resources for anxiety, depression, and related disorders",
      contact: "Online resources and professional directory",
      website: "https://adaa.org",
      color: "bg-teal-500",
    },
    {
      name: "National Eating Disorders Association (NEDA)",
      description:
        "Support, resources, and treatment options for eating disorders",
      contact: "Call/text 1-800-931-2237",
      website: "https://www.nationaleatingdisorders.org",
      color: "bg-cyan-500",
    },
  ];

  const additionalResources = [
    {
      category: "Therapy & Treatment Directories",
      items: [
        {
          name: "Psychology Today Therapist Finder",
          url: "https://www.psychologytoday.com/us/therapists",
        },
        { name: "GoodTherapy", url: "https://www.goodtherapy.org" },
        {
          name: "Therapy for Black Girls",
          url: "https://therapyforblackgirls.com",
        },
        {
          name: "Open Path Collective (Low-cost therapy)",
          url: "https://openpathcollective.org",
        },
        {
          name: "BetterHelp (Online therapy)",
          url: "https://www.betterhelp.com",
        },
        {
          name: "Talkspace (Online therapy)",
          url: "https://www.talkspace.com",
        },
      ],
    },
    {
      category: "Self-Help & Educational Resources",
      items: [
        {
          name: "MindTools Mental Health Resources",
          url: "https://www.mindtools.com",
        },
        {
          name: "Headspace (Meditation & mindfulness)",
          url: "https://www.headspace.com",
        },
        { name: "Calm (Mental fitness)", url: "https://www.calm.com" },
        {
          name: "DBSA (Depression and Bipolar Support Alliance)",
          url: "https://www.dbsalliance.org",
        },
        { name: "International OCD Foundation", url: "https://iocdf.org" },
        {
          name: "Postpartum Support International",
          url: "https://www.postpartum.net",
        },
      ],
    },
    {
      category: "Specific Populations",
      items: [
        {
          name: "AAKOMA Project (Black mental health)",
          url: "https://aakomaproject.org",
        },
        {
          name: "National Queer and Trans Therapists of Color Network",
          url: "https://nqttcn.com",
        },
        {
          name: "Asian Mental Health Collective",
          url: "https://www.asianmhc.org",
        },
        {
          name: "National Latinx Psychological Association",
          url: "https://www.nlpa.ws",
        },
        {
          name: "Strong Minds Strong Communities (Native American)",
          url: "https://nativewellness.com",
        },
        {
          name: "Inclusive Therapists",
          url: "https://www.inclusivetherapists.com",
        },
      ],
    },
    {
      category: "Support Groups & Communities",
      items: [
        {
          name: "7 Cups (Free emotional support)",
          url: "https://www.7cups.com",
        },
        {
          name: "SMART Recovery (Addiction support)",
          url: "https://www.smartrecovery.org",
        },
        { name: "Al-Anon (Family support)", url: "https://al-anon.org" },
        { name: "Grief Share", url: "https://www.griefshare.org" },
        {
          name: "The Mighty (Chronic illness community)",
          url: "https://themighty.com",
        },
        {
          name: "18 Percent (Anxiety community)",
          url: "https://18percent.org",
        },
      ],
    },
    {
      category: "Apps & Digital Tools",
      items: [
        { name: "Sanvello (Mood tracking)", url: "https://www.sanvello.com" },
        {
          name: "MindShift CBT (Anxiety relief)",
          url: "https://www.anxietycanada.com/resources/mindshift-cbt",
        },
        {
          name: "PTSD Coach",
          url: "https://www.ptsd.va.gov/appvid/mobile/ptsdcoach_app.asp",
        },
        {
          name: "Moodpath (Depression screening)",
          url: "https://mymoodpath.com",
        },
        { name: "Wysa (AI chatbot support)", url: "https://www.wysa.io" },
        {
          name: "What's Up (CBT & ACT techniques)",
          url: "https://www.whatsupapp.com",
        },
      ],
    },
  ];

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

    

        {/* Crisis Resources Section */}
        <section className="pb-14 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-4">
                <Phone className="w-5 h-5 text-teal-700" />
                <span className="text-sm font-semibold text-teal-900">
                  IMMEDIATE HELP
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Crisis & Emergency Resources
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                If you or someone you know is in crisis, help is available 24/7
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-4 border-teal-500">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  988 Suicide & Crisis Lifeline
                </h3>
                <p className="text-xl text-gray-700">
                  24/7, free and confidential support
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <a
                    href="tel:988"
                    className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg"
                  >
                    Call 988
                  </a>
                  <a
                    href="sms:988"
                    className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg"
                  >
                    Text 988
                  </a>
                  <a
                    href="https://988lifeline.org/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg"
                  >
                    Chat Online
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Crisis Text Line
                </h4>
                <p className="text-gray-700 mb-4">
                  Free, 24/7 support via text
                </p>
                <a
                  href="sms:741741&body=HOME"
                  className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Text HOME to 741741 <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Veterans Crisis Line
                </h4>
                <p className="text-gray-700 mb-4">
                  Support for veterans and families
                </p>
                <a
                  href="tel:988"
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Call 988, press 1 <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* National Organizations Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                National Mental Health Organizations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted resources for information, support, and treatment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nationalResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 group"
                >
                  <div className={`h-2 ${resource.color}`} />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                      {resource.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-900 font-semibold">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{resource.contact}</span>
                      </div>
                      <a
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Additional Support & Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find therapy, support groups, apps, and specialized resources
              </p>
            </div>

            <div className="space-y-12">
              {additionalResources.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <BookOpen className="w-7 h-7 text-teal-600" />
                    {section.category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 rounded-lg hover:bg-teal-50 transition-all duration-200 border border-transparent hover:border-teal-200"
                      >
                        <span className="text-gray-900 group-hover:text-teal-700 font-medium">
                          {item.name}
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
