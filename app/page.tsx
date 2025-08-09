"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AerialPlan from "@/components/AerialPlan";
import {
  Check,
  Shield,
  MapPin,
  Users2,
  Home,
  CalendarDays,
  Lock,
  Sparkles,
  Building2,
  HeartHandshake,
  Moon,
  Sun,
} from "lucide-react";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Parent");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Banner + modals
  const [user, setUser] = useState<any>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showHostWizard, setShowHostWizard] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const fade = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-slate-100">
      {/* BG Orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-200/30 dark:bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-emerald-200/30 dark:bg-emerald-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 dark:bg-slate-900/70 border-b shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold dark:bg-white dark:text-slate-900">
              HR
            </div>
            <span className="font-semibold tracking-tight">HomeschoolResorts</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">How it works</a>
            <a href="#safety" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">Safety</a>
            <a href="#zones" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">Zoning</a>
            <a href="#hosts" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">Hosts</a>
            <a href="#design" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">Design</a>
            <a href="#faq" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" className="hidden sm:inline-flex" onClick={()=>document.getElementById("waitlist")?.scrollIntoView({behavior:"smooth"})}>Join waitlist</Button>
            <Button className="inline-flex" onClick={()=>document.getElementById("host")?.scrollIntoView({behavior:"smooth"})}>Become a host</Button>
          </div>
        </div>
      </header>

      {/* Pilot banner */}
      <div className="bg-amber-50 dark:bg-amber-900/30 border-y border-amber-200 dark:border-amber-800">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-amber-800 dark:text-amber-200 flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between">
          <span><strong>Phase 0 Pilot:</strong> You can list your personal home now (outside a resort) with safety + parking guardrails. Resorts come later.</span>
          {!user && <Button size="sm" onClick={() => setShowLogin(true)}>Sign up / Log in</Button>}
          {user && <Button size="sm" variant="secondary" onClick={() => setShowHostWizard(true)}>List your home</Button>}
        </div>
      </div>

      {/* Modals */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} onSuccess={(u) => { setUser(u); setShowLogin(false); }}/>
      )}
      {showHostWizard && user && (
        <HostWizard user={user} onClose={() => setShowHostWizard(false)} />
      )}

      {/* HERO — video/render placeholder (NEW) */}
      <section id="hero-video" className="mx-auto max-w-7xl px-4 pt-10 pb-8">
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-800 grid place-items-center">
            <div className="text-center p-6">
              <div className="text-sm uppercase tracking-widest text-slate-600 dark:text-slate-300">Hero Video Placeholder</div>
              <div className="mt-2 text-xl font-semibold text-slate-700 dark:text-slate-200">
                Future: zoom-in of Baseball Stadium • Teen Commons • Auditorium • Homes (school hours)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero copy */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fade} initial="hidden" animate="show" className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Restore community — <span className="text-indigo-600 dark:text-indigo-400">without schooling</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Book homeschool-friendly homes inside gated resort neighborhoods. Parent-led gatherings. No drop-offs. Zoning-safe by design.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={()=>document.getElementById("waitlist")?.scrollIntoView({behavior:"smooth"})}>Join the waitlist</Button>
              <Button variant="outline" onClick={()=>document.getElementById("how")?.scrollIntoView({behavior:"smooth"})}>See how it works</Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-800/70 border px-3 py-1"><Shield className="h-4 w-4"/> Two adults per room</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-800/70 border px-3 py-1"><Lock className="h-4 w-4"/> Invite-based access</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-800/70 border px-3 py-1"><MapPin className="h-4 w-4"/> Zone-aware listings</span>
            </div>
          </motion.div>
          <motion.div variants={fade} initial="hidden" animate="show">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-emerald-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border shadow-inner grid place-items-center">
              <div className="text-center p-6">
                <div className="text-sm uppercase tracking-widest text-slate-500">Preview</div>
                <div className="mt-2 text-xl font-semibold">Gated resort layout • Central amenities • Overflow parking</div>
                <div className="mt-4 text-slate-600 dark:text-slate-300">Auditorium • Gym • Baseball stadium • Teen courtyard • Airbnb homes cluster</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilot Home */}
      <section id="pilot-home" className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Replace with a real image or <video> later */}
            <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 grid place-items-center">
              <span className="text-slate-600 dark:text-slate-300">Pilot Home — photo/video placeholder</span>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 text-xs mb-3">
              Phase 0 • Hosting now
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Book the Pilot Home</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Parent-led gatherings during school hours. Driveway parking only. Two-adult coverage per active room.
            </p>
            <ul className="text-slate-700 dark:text-slate-200 space-y-1 mb-4">
              <li>• Open kitchen + living space</li>
              <li>• Morning, mid-day, or afternoon blocks</li>
              <li>• No drop-offs. Parents stay.</li>
            </ul>
            <div className="flex gap-3">
              <Button onClick={() => alert("Booking flow placeholder")}>Book the Pilot Home</Button>
              <Button variant="outline" onClick={() => document.getElementById("design")?.scrollIntoView({behavior: "smooth"})}>
                See the Resort Design
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: Home, title: "Pick a home", text: "Choose a homeschool-ready home near the central amenities."},
            {icon: Users2, title: "Add your group", text: "Parents stay. Two adults per room. No drop-offs."},
            {icon: CalendarDays, title: "Book a time", text: "Morning, afternoon, or evening blocks — with simple repeats."},
          ].map((item, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center gap-3">
                <item.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 dark:text-slate-300">{item.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How the resort is designed (diagram moved here) */}
      <section id="design" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">How the resort is designed</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Teen-first: a central auditorium for performances and talks, a real baseball stadium for daily league play,
          and a Teen Commons for projects, clubs, and hanging out. Bookable homes cluster around the hub, with clear overflow parking.
        </p>
        <AerialPlan />
      </section>

      {/* Safety */}
      <section id="safety" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Safety, by design</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: Shield, title: "Two-adult coverage", text: "Every active room must have two adults. No exceptions."},
            {icon: Lock, title: "Invite-based access", text: "Only known parents can book. Tutors join by parent invite."},
            {icon: Check, title: "Zoning aware", text: "Parking + capacity logic keeps bookings compliant and calm."},
          ].map((item, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center gap-3">
                <item.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 dark:text-slate-300">{item.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Zoning */}
      <section id="zones" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Zoning-safe neighborhoods</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5"/> Central amenities</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">Auditorium, gym, baseball stadium, and teen courtyard sit at the center — with overflow parking so residential streets stay quiet.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Building2 className="h-5 w-5"/> Airbnb homes cluster</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">Purpose-built homes for daily enrichment use. No beds. No overnight stays. Just beautiful, bookable spaces.</CardContent>
          </Card>
        </div>
      </section>

      {/* Hosts */}
      <section id="host" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">Become a host</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">Offer a homeschool-friendly home inside resort neighborhoods. Parking, capacity, and safety are built into the listing flow.</p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4"/> Open-concept kitchens with pizza + ice cream add-ons</li>
              <li className="flex items-center gap-2"><Users2 className="h-4 w-4"/> Parent-led groups only — no drop-offs</li>
              <li className="flex items-center gap-2"><Shield className="h-4 w-4"/> Two adults per room required</li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Host interest</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We'll be in touch.");}}>
                <Input placeholder="Full name" required />
                <Input placeholder="Email" type="email" required />
                <Input placeholder="City, State" required />
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Developers */}
      <section id="dev" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">For developers</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">License the platform for homeschool-friendly neighborhoods. Booking engine, safety logic, and zoning overlays included.</p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Regrid / GIS integration</li>
              <li className="flex items-center gap-2"><Lock className="h-4 w-4"/> Private, zone-gated access</li>
              <li className="flex items-center gap-2"><HeartHandshake className="h-4 w-4"/> HOA-friendly governance</li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Request a walkthrough</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert("Thanks! We'll reach out.");}}>
                <Input placeholder="Your name" required />
                <Input placeholder="Work email" type="email" required />
                <Textarea placeholder="Tell us about your project (city, lots, amenities)" rows={4} />
                <Button type="submit" className="w-full">Contact me</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-7xl px-4 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Join the waitlist</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-emerald-600 dark:text-emerald-400">Thanks! We’ll keep you posted.</div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-3">
                <Input placeholder="Email address" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <select className="rounded-md border bg-white dark:bg-slate-900 dark:border-slate-700 px-3 py-2" value={role} onChange={(e)=>setRole(e.target.value)}>
                  <option>Parent</option>
                  <option>Host</option>
                  <option>Developer</option>
                </select>
                <Button type="submit">Notify me</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Is this a school or co-op?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">No. It’s a booking tool for parent-led gatherings inside resort neighborhoods. No drop-offs. No curriculum. No classes sold.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How is safety enforced?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">Two adults per room, invite-only access, and parking/capacity logic. Tutors join by parent invite only.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What about zoning?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">Resort neighborhoods are planned for hospitality + enrichment use from day one. Overflow parking keeps streets clear.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can I become a host?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 dark:text-slate-300">Yes. Submit interest above and we’ll reach out as new resorts open.</CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-8">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 dark:text-slate-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center font-bold text-xs dark:bg-white dark:text-slate-900">HR</div>
            <span>© {new Date().getFullYear()} HomeschoolResorts</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#waitlist" className="hover:underline">Join waitlist</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- Simple Login Modal (frontend-only placeholder) --- */
function LoginModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: (u:{email:string;name:string}) => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-6">
        <h3 className="text-lg font-semibold mb-4">Sign up / Log in</h3>
        <div className="space-y-3">
          <Input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
          <Input type="email" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
            I am a parent and agree to remain present during any gatherings.
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button onClick={() => agree && email && onSuccess({ email, name })}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Host Listing Wizard (Phase 0 Pilot) --- */
function HostWizard({ user, onClose }: { user: { email: string; name?: string } | null; onClose: () => void; }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    address: "",
    rooms: [{ name: "Living Room", adults: 2 }],
    parkingSpots: 2,
    availability: "Weekdays 10–2",
    notes: "",
  });

  function addRoom() {
    setForm(f => ({ ...f, rooms: [...f.rooms, { name: "Room", adults: 2 }] }));
  }

  function submit() {
    console.log("Host listing submitted", { user, form });
    setStep(3);
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">List your home (Pilot)</h3>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Address</label>
              <Input placeholder="123 Maple St, City, ST" value={form.address} onChange={(e)=>setForm({ ...form, address: e.target.value })} />
              <p className="text-xs text-slate-500 mt-1">We’ll use this to estimate legal parking + guest capacity. Exact address stays private until booking.</p>
            </div>
            <div>
              <label className="text-sm font-medium">Parking spots (driveway/off-street only)</label>
              <Input type="number" min={0} value={form.parkingSpots} onChange={(e)=>setForm({ ...form, parkingSpots: Number((e.target as HTMLInputElement).value) })} />
            </div>
            <div className="flex justify-end">
              <Button onClick={()=>setStep(2)}>Next</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rooms to open</label>
              {form.rooms.map((r, i) => (
                <div key={i} className="grid grid-cols-2 gap-2">
                  <Input value={r.name} onChange={(e)=>{
                    const rooms = [...form.rooms];
                    rooms[i].name = e.target.value; setForm({ ...form, rooms });
                  }} />
                  <Input type="number" min={2} value={r.adults} onChange={(e)=>{
                    const rooms = [...form.rooms];
                    rooms[i].adults = Number((e.target as HTMLInputElement).value); setForm({ ...form, rooms });
                  }} />
                </div>
              ))}
              <div className="flex gap-2">
                <Button variant="secondary" onClick={addRoom}>Add room</Button>
                <p className="text-xs text-slate-500 self-center">Minimum 2 adults per room. No exceptions in pilot.</p>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Availability (example: Weekdays 10–2)</label>
              <Input value={form.availability} onChange={(e)=>setForm({ ...form, availability: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium">House notes (optional)</label>
              <Textarea value={form.notes} onChange={(e)=>setForm({ ...form, notes: e.target.value })} placeholder="Shoes off, use side entrance, bring water bottles…" />
            </div>
            <div className="flex justify-between">
              <Button variant="ghost" onClick={()=>setStep(1)}>Back</Button>
              <Button onClick={submit}>Publish pilot listing</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3 text-center py-8">
            <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 grid place-items-center">
              <Check className="h-6 w-6 text-emerald-600" />
            </div>
            <h4 className="text-lg font-semibold">Listing submitted</h4>
            <p className="text-slate-600 dark:text-slate-300">We’ll run zoning + parking checks and email {user?.email} when your pilot listing is visible to families near you.</p>
            <div className="flex justify-center pt-2">
              <Button onClick={onClose}>Done</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
