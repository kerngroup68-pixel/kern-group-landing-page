"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  ShieldCheck,
  Phone,
  MapPin,
  CheckCircle2,
  BedDouble,
  Clock,
  HeartHandshake,
  Coffee,
  Sun,
  KeyRound,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IndependentColivingLandingPage() {
  const businessName = "Kern Group LLC";
  const city = "Dallas-Fort Worth Area";
  const phone = "844-753-7647";
  const email = "kerngroupllc@yahoo.com";

  const features = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "A Comfortable Place to Call Home",
      text: "Clean, furnished shared living designed for independent adults who want stability, comfort, and simplicity.",
    },
    {
      icon: <BedDouble className="h-6 w-6" />,
      title: "Shared Rooms Available",
      text: "Room layouts may include two beds per room, depending on availability and the right resident fit.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Peaceful House Structure",
      text: "Clear house rules help create a respectful environment where everyone can feel comfortable.",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Simple Everyday Living",
      text: "Shared kitchen, shared common areas, and practical housing for people who want a fresh start or stable place to stay.",
    },
  ];

  const residentFit = [
    "Independent adults who can care for themselves",
    "People seeking affordable shared housing",
    "Residents who respect house rules and shared spaces",
    "Individuals looking for a stable, quiet, and welcoming home environment",
  ];

  const included = [
    "Furnished sleeping space",
    "Private room option",
    "Shared kitchen access",
    "Shared bathroom access",
    "Utilities explained clearly",
    "Peaceful household expectations",
    "Simple move-in screening",
  ];

  const photos = [
    {
      src: "https://images.pexels.com/photos/19916712/pexels-photo-19916712.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
      alt: "Comfortable common area with sofa, natural light, and simple home decor",
      label: "Comfortable common areas",
      description: "A relaxed shared space for everyday living and respectful household time.",
    },
    {
      src: "https://images.pexels.com/photos/28054887/pexels-photo-28054887.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
      alt: "Furnished sleeping space with two twin beds",
      label: "Furnished sleeping spaces",
      description: "Two separate twin beds in a clean, simple shared room setup.",
    },
    {
      src: "https://images.pexels.com/photos/10847178/pexels-photo-10847178.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop",
      alt: "Shared kitchen with wood cabinets, microwave, sink, and appliances",
      label: "Shared kitchen access",
      description: "A practical kitchen area residents can use for daily meals and routines.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] text-slate-900">
      <section className="relative overflow-hidden bg-[#ffffff]">
        <div className="absolute inset-0 bg-[#ffffff]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:px-10 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-amber-300 bg-white/90 px-5 py-3 shadow-md backdrop-blur">
              <span className="rounded-full bg-amber-100 p-2 text-amber-800"><Sun className="h-5 w-5" /></span>
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-extrabold tracking-tight text-slate-950">{businessName}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">Independent Co-Living Housing</span>
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">Welcome home to simple, affordable shared living.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">Kern Group LLC offers a clean, calm, and structured co-living home for independent adults who want a stable place to live and a respectful household community.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl bg-slate-950 px-7 py-6 text-base text-white hover:bg-slate-800" asChild><a href={`tel:${phone.replace(/[^0-9]/g, "")}`}>Call About Availability</a></Button>
              <Button variant="secondary" className="rounded-2xl bg-white px-7 py-6 text-base text-slate-950 shadow-sm ring-1 ring-slate-100 hover:bg-amber-100" asChild><a href="#apply">Start Move-In Inquiry</a></Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-100">Clean shared home</span>
              <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-100">Respectful environment</span>
              <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-100">Dallas-Fort Worth Area Co-Living</span>
            </div>
            <p className="mt-5 text-sm text-slate-600">Independent housing only. No medical, nursing, supervision, or assisted living services are provided.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-[2rem] border border-slate-100 bg-white p-4 shadow-2xl">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-900 shadow-sm">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div><p className="text-sm font-medium text-amber-700">Now accepting inquiries</p><h2 className="text-2xl font-bold">{city} Co-Living</h2></div>
                <div className="rounded-2xl bg-amber-100 p-3 text-amber-800"><KeyRound className="h-7 w-7" /></div>
              </div>
              <div className="mb-5 overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80" alt="Older affordable residential home exterior" className="h-56 w-full object-cover" /></div>
              <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">A smoother move-in</p>
                <h3 className="mt-2 text-2xl font-bold">Simple steps. Clear expectations. A welcoming home.</h3>
                <p className="mt-3 text-slate-600">Ask about available beds, monthly cost, house rules, and what to bring before moving in.</p>
              </div>
              <div className="mt-5 space-y-3">{["Shared room options", "Peaceful household rules", "Simple resident screening", "Friendly move-in conversation"].map((item) => (<div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"><CheckCircle2 className="h-5 w-5 shrink-0 text-amber-700" /><span className="font-medium">{item}</span></div>))}</div>
              <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white"><p className="text-sm text-slate-300">Call or email today</p><p className="mt-1 text-xl font-bold">{phone}</p><p className="text-sm text-slate-300">{email}</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">What We Offer</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">A warm, respectful place to settle in.</h2><p className="mt-4 text-lg text-slate-600">Our co-living home is built for independent residents who want practical housing, shared costs, and a peaceful environment.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{features.map((feature) => (<Card key={feature.title} className="rounded-3xl border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><CardContent className="p-6"><div className="mb-5 inline-flex rounded-2xl bg-amber-100 p-3 text-amber-800">{feature.icon}</div><h3 className="text-lg font-bold">{feature.title}</h3><p className="mt-3 text-slate-600">{feature.text}</p></CardContent></Card>))}</div>
      </section>

      <section className="bg-[#ffffff] py-16"><div className="mx-auto max-w-7xl px-6 md:px-10"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">A Look Inside</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Warm spaces that feel like home.</h2><p className="mt-4 text-lg text-slate-600">Give visitors a quick feel for the type of clean, peaceful, shared home environment you provide.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{photos.map((photo) => (<div key={photo.label} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg"><img src={photo.src} alt={photo.alt} className="h-64 w-full object-cover" /><div className="p-5"><p className="font-bold text-slate-950">{photo.label}</p><p className="mt-2 text-sm text-slate-600">{photo.description}</p></div></div>))}</div></div></section>

      <section className="bg-[#ffffff] py-16"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-10"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Resident Fit</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Who this home is designed for</h2><p className="mt-4 text-lg text-slate-600">This home is for adults who can live independently and want a shared household that feels calm, clean, and respectful.</p><div className="mt-8 space-y-3">{residentFit.map((item) => (<div key={item} className="flex gap-3 rounded-2xl bg-amber-50 p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" /><p className="font-medium">{item}</p></div>))}</div></div><div className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-white shadow-xl"><HeartHandshake className="h-10 w-10 text-amber-200" /><h3 className="mt-6 text-2xl font-bold">Independent living with clear boundaries</h3><p className="mt-4 leading-7 text-slate-200">Kern Group LLC provides independent co-living housing. Residents must be able to manage their own daily living needs.</p><p className="mt-4 leading-7 text-slate-200">We do not provide medical care, nursing care, medication management, transportation services, assisted living services, personal care, or supervision.</p></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10"><div className="grid gap-10 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 md:grid-cols-2 md:p-10"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">Included</p><h2 className="mt-3 text-3xl font-bold">What residents can expect</h2><p className="mt-4 text-lg text-slate-700">Clear expectations from day one help create a comfortable home for everyone.</p></div><div className="grid gap-3 sm:grid-cols-2">{included.map((item) => (<div key={item} className="rounded-2xl bg-white p-4 font-medium shadow-sm ring-1 ring-slate-100">{item}</div>))}</div></div></section>

      <section id="apply" className="bg-[#ffffff] py-16"><div className="mx-auto max-w-5xl px-6 md:px-10"><div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12"><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Move-In Inquiry</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">Ready to ask about a bed?</h2><p className="mt-4 text-lg leading-8 text-slate-200">Call, text, or email today to ask about available beds, house rules, monthly cost, and move-in requirements.</p></div><div className="space-y-3"><Button className="w-full rounded-2xl bg-amber-100 px-7 py-6 text-base text-slate-950 hover:bg-amber-200" asChild><a href={`tel:${phone.replace(/[^0-9]/g, "")}`}><Phone className="mr-2 h-5 w-5" /> Call {phone}</a></Button><Button variant="secondary" className="w-full rounded-2xl bg-white px-7 py-6 text-base text-slate-950 hover:bg-slate-100" asChild><a href={`mailto:${email}?subject=Co-Living%20Move-In%20Inquiry`}>Email Us</a></Button></div></div><form action=https://formspree.io/f/mykvjrol method="post" className="mt-10 grid gap-4 rounded-[1.5rem] bg-white p-5 text-slate-950 md:grid-cols-2"><div className="md:col-span-2"><h3 className="text-xl font-bold">Quick Inquiry Form</h3><p className="mt-1 text-sm text-slate-600">Send your basic details and we will follow up about availability.</p></div><input className="rounded-2xl border border-amber-100 bg-white px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white" name="Full Name" placeholder="Full name" required /><input className="rounded-2xl border border-amber-100 bg-white px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white" name="Phone" placeholder="Phone number" required /><input className="rounded-2xl border border-amber-100 bg-white px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white" name="Email" placeholder="Email address" /><input className="rounded-2xl border border-amber-100 bg-white px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white" name="Move-In Date" placeholder="Desired move-in date" /><select className="rounded-2xl border border-amber-100 bg-white px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white" name="Housing Need" defaultValue=""><option value="" disabled>Housing need</option><option>Shared room</option><option>Private room if available</option><option>Not sure yet</option></select><select className="rounded-2xl border border-amber-100 bg-white px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white" name="Can Live Independently" defaultValue=""><option value="" disabled>Can you live independently?</option><option>Yes</option><option>No</option><option>I need to discuss</option></select><textarea className="min-h-28 rounded-2xl border border-amber-100 bg-white px-4 py-3 outline-none transition focus:border-amber-400 focus:bg-white md:col-span-2" name="Message" placeholder="Tell us briefly about your housing situation" /><button className="rounded-2xl bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-slate-800 md:col-span-2" type="submit">Submit Inquiry</button></form></div></div></section>

      <footer className="border-t border-slate-100 bg-[#ffffff] py-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-10"><p>© {new Date().getFullYear()} {businessName}. All rights reserved.</p><div className="flex flex-wrap gap-4"><span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> By appointment only</span><span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {city}</span></div></div></footer>
    </main>
  );
}
