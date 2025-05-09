"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70">
          <Image
            src="https://images.pexels.com/photos/7367/startup-photos.jpg"
            alt="Contact Us"
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Get in touch with our team to discuss your logistics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Have questions about our services or want to request a quote?
                Our team is ready to assist you. Contact us using any of the
                methods below.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-[#032D60] rounded-full p-3 text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Our Location</h3>
                      <p className="text-muted-foreground">
                        TRADEX HOUSE - Liwatoni Road,
                        <br />
                        Off Moi Avenue, Opp Cosmos Motors,
                        <br />
                        PO BOX 87284—80100,
                        <br />
                        MOMBASA, KENYA
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-[#032D60] rounded-full p-3 text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                      <p className="text-muted-foreground">
                        Tel: +254 41 2220924
                        <br />
                        Cell: +254 721596259
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-[#032D60] rounded-full p-3 text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Address</h3>
                      <p className="text-muted-foreground">
                        info@kenyatradex.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <div>Monday - Friday:</div>
                  <div>8:00 AM - 6:00 PM</div>
                  <div>Saturday:</div>
                  <div>9:00 AM - 1:00 PM</div>
                  <div>Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#032D60] hover:bg-[#022348] flex items-center gap-2 py-6"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our office in Nairobi, conveniently located on Mombasa Road.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden h-[400px] shadow-md bg-white dark:bg-slate-900 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.344893805396!2d36.81866041553633!3d-1.3031676205774986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4504f4307%3A0x1ec0cf2e4e551b30!2sMombasa%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1629280319424!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#032D60] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Contact us today for a free consultation and quote. Our team is
            ready to help you optimize your logistics and supply chain.
          </p>
          <Button className="bg-[#FFA500] hover:bg-[#E59400] text-black font-semibold px-8 py-6 text-lg">
            Get a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
