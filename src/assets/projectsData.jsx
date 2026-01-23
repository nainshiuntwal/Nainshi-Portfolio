import busImg from "../assets/busImg.jpg";
import ecommerceImg from "../assets/ecommerce.jpg";
import studentImg from "../assets/studentImg.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Bus Ticket Reservation System (MERN)",
    description:
      "A full-stack bus ticket booking system where users can search routes, book seats, manage bookings, and admins can manage buses & schedules.",
    image: busImg,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce website with modern UI, product listing, and smooth user experience deployed on Vercel.",
    image: ecommerceImg,
    tech: ["React", "CSS", "JavaScript", "Vercel"],
  },
  {
    id: 3,
    title: "Student Management System (Node + React)",
    description:
      "A web application to manage student data with CRUD operations, search functionality, and clean dashboard UI.",
    image: studentImg,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
  },
];
