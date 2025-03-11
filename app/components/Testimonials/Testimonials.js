"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechCorp",
    image: "/testimonials/person1.jpg",
    text: "Tisa Group has been instrumental in our digital transformation journey. Their expertise and dedication are unmatched.",
  },
  {
    name: "Michael Chen",
    position: "CTO, InnovateCo",
    image: "/testimonials/person2.jpg",
    text: "Working with Tisa Group has been a game-changer for our business. Their solutions are innovative and effective.",
  },
  {
    name: "Emily Brown",
    position: "Marketing Director, GlobalTech",
    image: "/testimonials/person3.jpg",
    text: "The team at Tisa Group consistently delivers exceptional results. They truly understand our needs.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="testimonial-image">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
