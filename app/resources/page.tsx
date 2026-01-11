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

export default function ResourcesPage() {
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
              <h1 className="text-6xl py-10 text-center">
                Understanding Mental Health
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Definition Section */}
        <section className="pb-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  What Are Mental Health Disorders?
                </h2>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    According to the{" "}
                    <strong>
                      U.S. Department of Health and Human Services
                    </strong>{" "}
                    and the{" "}
                    <strong>National Institute of Mental Health (NIMH)</strong>,
                    mental health disorders are defined as:
                  </p>
                  <blockquote className="border-l-4 border-teal-500 pl-6 italic bg-teal-50 p-4 rounded-r-lg">
                    "Health conditions involving changes in emotion, thinking,
                    or behavior (or a combination of these). Mental illnesses
                    are associated with distress and/or problems functioning in
                    social, work, or family activities."
                  </blockquote>
                  <p className="leading-relaxed">
                    Mental health disorders are{" "}
                    <strong>medical conditions</strong> that affect a person's
                    thinking, feeling, mood, ability to relate to others, and
                    daily functioning. They are not character flaws or signs of
                    weakness, and like physical illnesses, they require proper
                    diagnosis and treatment.
                  </p>
                  <p className="leading-relaxed">
                    The{" "}
                    <strong>
                      Diagnostic and Statistical Manual of Mental Disorders
                      (DSM-5)
                    </strong>
                    , published by the American Psychiatric Association, serves
                    as the authoritative guide for diagnosing mental health
                    conditions in the United States.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl transform rotate-3" />
                <img
                  src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&q=80"
                  alt="Mental health support"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Common Disorders Section */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Common Mental Health Disorders
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the most prevalent mental health conditions, their
                symptoms, and what they mean
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {disorders.map((disorder, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${disorder.color}`}
                  />

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${disorder.color} text-white shadow-lg`}
                      >
                        {disorder.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {disorder.name}
                      </h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {disorder.definition}
                    </p>

                    <button
                      onClick={() => toggleSection(disorder.name)}
                      className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors group/btn"
                    >
                      <span>Learn more</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${expandedSection === disorder.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expandedSection === disorder.name && (
                      <div className="space-y-4 pt-4 border-t border-gray-200 animate-fadeIn">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Types:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            {disorder.types.map((type, i) => (
                              <li key={i}>{type}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Common Symptoms:
                          </h4>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {disorder.symptoms}
                          </p>
                        </div>

                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${disorder.color} bg-opacity-10`}
                        >
                          <p className="text-sm font-semibold text-gray-900">
                            {disorder.prevalence}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Recognizing the Warning Signs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Early identification of mental health concerns can lead to better outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Emotional Changes</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Prolonged feelings of sadness, anxiety, or emptiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Excessive fears, worries, or feelings of guilt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Extreme mood swings or irritability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Inability to cope with daily stress</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-xl font-bold text-gray-900">Behavioral Changes</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Withdrawal from friends, family, and activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Changes in eating or sleeping patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Increased use of alcohol or drugs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Difficulty concentrating or making decisions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-600">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-teal-700" />
                  <h3 className="text-xl font-bold text-gray-900">Physical Symptoms</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 mt-1">•</span>
                    <span>Unexplained physical ailments or chronic pain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 mt-1">•</span>
                    <span>Significant weight loss or gain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 mt-1">•</span>
                    <span>Low energy or fatigue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-700 mt-1">•</span>
                    <span>Changes in personal hygiene habits</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-600">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-cyan-700" />
                  <h3 className="text-xl font-bold text-gray-900">Social Changes</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-700 mt-1">•</span>
                    <span>Declining performance at work or school</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-700 mt-1">•</span>
                    <span>Problems with relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-700 mt-1">•</span>
                    <span>Loss of interest in hobbies or activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-700 mt-1">•</span>
                    <span>Increased social isolation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-bold text-gray-900">Cognitive Changes</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Confused thinking or reduced ability to concentrate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Excessive paranoia or suspiciousness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Unusual or exaggerated beliefs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>Detachment from reality (delusions, hallucinations)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-xl font-bold text-gray-900">Crisis Signs</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Talking about dying or suicide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Feeling trapped or hopeless</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Engaging in risky or self-destructive behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Sudden calmness after severe depression</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact on Daily Life Section */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  The Impact of Mental Health on Daily Life
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Mental health disorders don't just affect emotions—they can have wide-ranging impacts on every aspect of a person's life. Understanding these effects is crucial for recognizing when someone may need support.
                  </p>
                  
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-teal-600" />
                      Relationships & Social Connections
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Mental health conditions can strain relationships with family, friends, and colleagues. Communication difficulties, emotional withdrawal, or unpredictable behavior may create distance in once-close relationships. Social anxiety can make it challenging to form new connections or maintain existing ones.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-cyan-600" />
                      Work & Academic Performance
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Concentration problems, decreased productivity, absenteeism, and difficulty meeting deadlines are common when struggling with mental health. Students may see declining grades, while professionals might face challenges completing projects or maintaining job performance.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-teal-600" />
                      Physical Health
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Mental and physical health are deeply interconnected. Untreated mental health conditions can contribute to chronic diseases, weaken the immune system, disrupt sleep patterns, and lead to unhealthy coping mechanisms like substance use or poor nutrition.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-cyan-600" />
                      Daily Functioning
                    </h4>
                    <p className="text-sm leading-relaxed">
                      Basic self-care tasks like maintaining personal hygiene, preparing meals, managing finances, or keeping up with household responsibilities can become overwhelming. What others might consider routine activities can feel insurmountable during mental health struggles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                  alt="Mental health impact on daily life"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatment and Recovery Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Understanding Treatment & Recovery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mental health conditions are treatable, and recovery is possible with the right support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Psychotherapy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Talk therapy approaches like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and psychodynamic therapy help individuals understand their thoughts, feelings, and behaviors while developing coping strategies.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Medication</h3>
                <p className="text-gray-700 leading-relaxed">
                  Psychiatric medications including antidepressants, anti-anxiety medications, mood stabilizers, and antipsychotics can help manage symptoms. Medication is often most effective when combined with therapy.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-700 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Support Systems</h3>
                <p className="text-gray-700 leading-relaxed">
                  Peer support groups, family therapy, community programs, and lifestyle changes like exercise, nutrition, and mindfulness practices play crucial roles in comprehensive mental health care and long-term recovery.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Early Intervention</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="leading-relaxed mb-4">
                    Research consistently shows that early intervention in mental health leads to better long-term outcomes. When mental health concerns are addressed promptly, individuals often experience:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Reduced severity and duration of symptoms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Lower risk of developing additional mental health conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Better response to treatment interventions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="leading-relaxed mb-4">
                    Delaying treatment can lead to worsening symptoms and complications. Early intervention helps prevent:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">✓</span>
                      <span>Disruption to education, career, and relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">✓</span>
                      <span>Development of unhealthy coping mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1">✓</span>
                      <span>Increased risk of physical health problems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mental Health Facts Section */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Important Mental Health Facts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding these facts helps reduce stigma and promotes better mental health awareness
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Illness is Common</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Mental health conditions are not rare. Nearly 1 in 5 U.S. adults experience mental illness each year. This means millions of people are navigating similar challenges, and seeking help is a normal, responsible step toward wellness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Illness is Not a Character Flaw</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Mental health disorders are medical conditions caused by complex interactions between genetics, brain chemistry, life experiences, and environmental factors. They are not signs of weakness, personal failure, or lack of willpower.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recovery is Possible</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With appropriate treatment and support, people with mental health conditions can and do recover. Many lead fulfilling, productive lives. Recovery doesn't always mean "cured"—it often means learning to manage symptoms effectively and thriving despite challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health Affects Everyone</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Mental health conditions do not discriminate. They affect people of all ages, races, religions, income levels, and educational backgrounds. No one is immune, and everyone deserves access to quality mental health care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Early Intervention Matters</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Half of all mental illness begins by age 14, and 75% by age 24. Early identification and treatment can significantly improve long-term outcomes and prevent more serious complications from developing over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Stigma is a Barrier</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Fear of judgment, discrimination, and misunderstanding prevent many people from seeking help. Breaking down stigma through education, open conversations, and compassion is essential to improving mental health outcomes for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Note Section */}
        <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <Heart className="w-16 h-16 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">You Are Not Alone</h2>
            <p className="text-xl leading-relaxed">
              Mental health conditions are treatable, and recovery is possible. Seeking help is a sign of strength, not weakness. 
              Whether you're experiencing symptoms yourself or supporting someone who is, these resources are here to help.
            </p>
            <div className="pt-4">
              <p className="text-lg font-semibold">Remember: Mental health is just as important as physical health.</p>
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
