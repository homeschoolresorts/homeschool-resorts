"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Shield, MapPin, Users2, Home, CalendarDays, Lock, Sparkles, Building2, HeartHandshake, Moon, Sun } from "lucide-react";

const ENV = process.env.NEXT_PUBLIC_ENV || "production";
const ENABLE_LOGIN = process.env.NEXT_PUBLIC_ENABLE_LOGIN !== "false";
const ENABLE_HOST_WIZARD = process.env.NEXT_PUBLIC_ENABLE_HOST_WIZARD !== "false";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Parent");
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<{email: string; name?: string} | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showHostWizard, setShowHostWizard] = useState(false);

  useEffect(() => { if (typeof document !== "undefined") document.documentElement.classList.toggle("dark", darkMode); }, [darkMode]);
  function handleSubmit(e: React.FormEvent) { e.preventDefault(); setSubmitted(true); }
  const fade = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-slate-100">
      {ENV === "staging" && <div className="staging-ribbon">STAGING</div>}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-200/30 dark:bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[26rem] w-[26rem] rounded-full bg-emerald-200/30 dark:bg-emerald-500/20 blur-3xl" />
      </div>
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 dark:bg-slate-900/70 border-b shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold dark:bg-white dark:text-slate-900">HR</div>
            <span className="font-semibold tracking-tight">HomeschoolResorts {ENV === "staging" ? "(Preview)" : ""}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">How it works</a>
            <a href="#safety" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">Safety</a>
            <a href="#zones" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">Zoning</a>
            <a href="#hosts" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">Hosts</a>
            <a href="#dev" className="hover:text-slate-900/80 text-slate-600 dark:text-slate-300 transition-colors">Developers</a>
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
      <div className="bg-amber-50 dark:bg-amber-900/30 border-y border-amber-200 dark:border-amber-800">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-amber-800 dark:text-amber-200 flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between">
          <span><strong>Phase 0 Pilot:</strong> You can list your personal home now (outside a resort) with safety + parking guardrails. Resorts come later.</span>
          {!user && ENABLE_LOGIN && <Button size="sm" onClick={() => setShowLogin(true)}>Sign in to list your home</Button>}
          {user && ENABLE_HOST_WIZARD && <Button size="sm" variant="secondary" onClick={() => setShowHostWizard(true)}>List your home</Button>}
        </div>
      </div>
      {showLogin && ENABLE_LOGIN && (<LoginModal onClose={() => setShowLogin(false)} onSuccess={(u) => { setUser(u); setShowLogin(false); }}/>)}
      {showHostWizard && user && ENABLE_HOST_WIZARD && (<HostWizard user={user} onClose={() => setShowHostWizard(false)} />)}
      <section className="mx-auto max-w-7xl px-4 pt-14 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fade} initial="hidden" animate="show" className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Restore community — <span className="text-indigo-600 dark:text-indigo-400">without schooling</span></h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">Book homeschool-friendly homes inside gated resort neighborhoods. Parent-led gatherings. No drop-offs. Zoning-safe by design.</p>
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
          <motion.div variants={fade} initial="hidden" animate="show" className="">
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
      {/* ... (rest of sections unchanged for brevity) ... */}
      <footer className="border-t mt-8">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 dark:text-slate-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center font-bold text-xs dark:bg-white dark:text-slate-900">HR</div>
            <span>© {new Date().getFullYear()} HomeschoolResorts</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-70">Env: {ENV}</span>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#waitlist" className="hover:underline">Join waitlist</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LoginModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: (u: {email:string; name?:string}) => void }) {
  const [email, setEmail] = useState(""); const [name, setName] = useState(""); const [agree, setAgree] = useState(false);
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-6">
        <h3 className="text-lg font-semibold mb-4">Sign in</h3>
        <div className="space-y-3">
          <Input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
          <Input type="email" placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
            I am a parent and agree to remain present during any gatherings.
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button onClick={() => agree && email && onSuccess({ email, name })}>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
function HostWizard({ user, onClose }: { user: {email:string; name?:string}; onClose: () => void; }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ address:"", rooms:[{ name:"Living Room", adults:2 }], parkingSpots:2, availability:"Weekdays 10–2", notes:"" });
  function addRoom() { setForm(f => ({ ...f, rooms: [...f.rooms, { name: "Room", adults: 2 }] })); }
  function submit() { console.log("Host listing submitted", { user, form }); setStep(3); }
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">List your home (Pilot)</h3>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </div>
        {step === 1 && (<div className="space-y-4">
          <div><label className="text-sm font-medium">Address</label>
            <Input placeholder="123 Maple St, City, ST" value={form.address} onChange={(e)=>setForm({ ...form, address: e.target.value })} />
            <p className="text-xs text-slate-500 mt-1">We’ll use this to estimate legal parking + guest capacity. Exact address stays private until booking.</p>
          </div>
          <div><label className="text-sm font-medium">Parking spots (driveway/off-street only)</label>
            <Input type="number" min={0} value={form.parkingSpots} onChange={(e)=>setForm({ ...form, parkingSpots: Number(e.target.value) })} />
          </div>
          <div className="flex justify-end"><Button onClick={()=>setStep(2)}>Next</Button></div>
        </div>)}
        {step === 2 && (<div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Rooms to open</label>
            {form.rooms.map((r, i) => (<div key={i} className="grid grid-cols-2 gap-2">
              <Input value={r.name} onChange={(e)=>{ const rooms=[...form.rooms]; rooms[i].name = e.target.value; setForm({ ...form, rooms }); }} />
              <Input type="number" min={2} value={r.adults} onChange={(e)=>{ const rooms=[...form.rooms]; rooms[i].adults = Number(e.target.value); setForm({ ...form, rooms }); }} />
            </div>))}
            <div className="flex gap-2"><Button variant="secondary" onClick={addRoom}>Add room</Button><p className="text-xs text-slate-500 self-center">Minimum 2 adults per room. No exceptions in pilot.</p></div>
          </div>
          <div><label className="text-sm font-medium">Availability (example: Weekdays 10–2)</label>
            <Input value={form.availability} onChange={(e)=>setForm({ ...form, availability: e.target.value })} />
          </div>
          <div><label className="text-sm font-medium">House notes (optional)</label>
            <Textarea value={form.notes} onChange={(e)=>setForm({ ...form, notes: e.target.value })} placeholder="Shoes off, use side entrance, bring water bottles…" />
          </div>
          <div className="flex justify-between"><Button variant="ghost" onClick={()=>setStep(1)}>Back</Button><Button onClick={submit}>Publish pilot listing</Button></div>
        </div>)}
        {step === 3 && (<div className="space-y-3 text-center py-8">
          <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 grid place-items-center"><Check className="h-6 w-6 text-emerald-600" /></div>
          <h4 className="text-lg font-semibold">Listing submitted</h4>
          <p className="text-slate-600 dark:text-slate-300">We’ll run zoning + parking checks and email {user?.email} when your pilot listing is visible to families near you.</p>
          <div className="flex justify-center pt-2"><Button onClick={onClose}>Done</Button></div>
        </div>)}
      </div>
    </div>
  );
}
