import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Clock,
  Star,
  Play
} from 'lucide-react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import ProgramCard from '../components/home/ProgramCard';
import TrainerCard from '../components/home/TrainerCard';
import PricingCard from '../components/home/PricingCard';
import BMICalculator from '../components/home/BMICalculator';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Trainers",
      description: "Certified professionals with 10+ years experience"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award Winning",
      description: "Best gym in the city for 3 consecutive years"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Access",
      description: "Work out anytime that fits your schedule"
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Professional Athlete",
      text: "Transformed my fitness in just 3 months! Best decision ever.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Yoga Instructor",
      text: "The facilities are top-notch and trainers are incredibly supportive.",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
        <div className="absolute inset-0">
          <img 
            src="/images/hero.png" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <Container>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-white font-medium">🏆 #1 Rated Gym in the City</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">Body,</span> Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">Life</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join 5000+ members achieving their fitness goals with our state-of-the-art facilities, expert trainers, and personalized workout plans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300">
                <Play className="h-5 w-5" />
                <span>Watch Tour</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-red-100 rounded-xl w-fit mb-6">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <Container>
          <SectionTitle 
            subtitle="OUR PROGRAMS"
            title="Transformative Fitness Programs"
            description="Choose from our variety of programs designed for all fitness levels"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ProgramCard
              title="Strength Training"
              description="Build muscle and increase strength with personalized routines"
              image="/images/program-1.jpg"
              features={["Personal Coach", "Nutrition Plan", "Progress Tracking"]}
              color="blue"
            />
            <ProgramCard
              title="Cardio & Conditioning"
              description="Improve endurance and cardiovascular health"
              image="/images/program-2.jpg"
              features={["HIIT Sessions", "Group Classes", "Heart Monitoring"]}
              color="red"
              featured
            />
            <ProgramCard
              title="Yoga & Flexibility"
              description="Enhance flexibility and mental wellness"
              image="/images/program-3.jpg"
              features={["Mindfulness", "Flexibility Drills", "Stress Relief"]}
              color="amber"
            />
          </div>
        </Container>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Calculate Your <span className="text-blue-600">BMI</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Track your fitness progress with our BMI calculator. Get personalized recommendations based on your results.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized workout suggestions",
                  "Nutrition guidelines",
                  "Progress tracking",
                  "Expert advice"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <BMICalculator />
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <Container>
          <SectionTitle 
            subtitle="PRICING PLANS"
            title="Affordable Memberships"
            description="Choose the perfect plan for your fitness journey"
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <PricingCard
              plan="Basic"
              price="29"
              features={["Gym Access", "Locker Room", "Free WiFi", "Basic Classes"]}
              color="gray"
            />
            <PricingCard
              plan="Pro"
              price="59"
              features={["All Basic Features", "Personal Trainer", "Nutrition Plan", "24/7 Access", "Priority Booking"]}
              color="gradient"
              featured
            />
            <PricingCard
              plan="Elite"
              price="99"
              features={["All Pro Features", "Unlimited Classes", "Spa Access", "Private Locker", "Diet Consultation"]}
              color="amber"
            />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <Container>
          <SectionTitle 
            subtitle="TESTIMONIALS"
            title="What Our Members Say"
            description="Join thousands of satisfied members transforming their lives"
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={`/images/testimonial-${index + 1}.jpg`} 
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join today and get 7 days free trial + personalized fitness assessment
            </p>
            <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2">
              <span>Claim Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <p className="text-white/70 mt-4 text-sm">No credit card required</p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;