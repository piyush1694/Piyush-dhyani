import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Zap, Heart } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message sent successfully! 🎉",
      description: "Thank you for reaching out! I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-blue-50 to-emerald-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rotate-12 animate-float" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-amber-500/5 rounded-full animate-pulse animation-delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 via-emerald-100 to-amber-100 text-blue-700 rounded-full px-6 py-3 mb-6 font-semibold shadow-sm">
            <MessageCircle className="w-5 h-5 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-blue-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
            I'm always interested in new opportunities, collaborations, and conversations. 
            Let's build something amazing together! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information - Enhanced */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div>
              <h3 className="text-3xl font-bold mb-8 text-slate-800">
                <Zap className="inline w-8 h-8 text-amber-500 mr-2" />
                Ready to Start?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 font-medium">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-xl font-bold text-slate-800 hover:text-blue-700 transition-colors duration-200"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 font-medium">Phone</div>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-xl font-bold text-slate-800 hover:text-emerald-700 transition-colors duration-200"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 font-medium">Location</div>
                    <span className="text-xl font-bold text-slate-800">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-slate-800">
                <Heart className="inline w-6 h-6 text-red-500 mr-2" />
                Follow My Journey
              </h4>
              <div className="flex space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-black rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="font-bold text-xl mb-2">⚡ Quick Response Promise</h4>
              <p className="text-emerald-100">
                I typically respond within 24 hours. For urgent projects, 
                I'll get back to you the same day!
              </p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Send Me a Message</h3>
                <p className="text-slate-600">Tell me about your project or just say hello! 👋</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your awesome name"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl transition-all duration-300 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl transition-all duration-300 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about? 🤔"
                    required
                    className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl transition-all duration-300 h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your amazing project or idea... ✨"
                    required
                    rows={5}
                    className="bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 
                    text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 
                    py-4 text-lg font-bold rounded-xl
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Sending your message...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message 🚀
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;