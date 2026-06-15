import { useState, useEffect, useRef } from "react";
import { Plus, Minus, ShoppingCart, Apple, Sparkles, Check, Play, Pause, RotateCcw, Award, Phone, Heart, Share2, HelpCircle, Activity } from "lucide-react";

// Synthesizer helper for tactile physical sound feedback (Tasbih Tap / Alarms)
const playBeep = (freq: number = 800, duration: number = 0.08) => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = "sine";
    oscillator.frequency.value = freq;
    
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Fail silently if browser audio block is active
  }
};

// ----------------------------------------------------
// 1. SOFTSTORE DEMO
// ----------------------------------------------------
export function SoftStoreDemo() {
  const [cart, setCart] = useState<{ id: string; name: string; price: number; quantity: number }[]>([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [licenseKey, setLicenseKey] = useState("");

  const products = [
    { id: "api-suite", name: "Premium API Endpoint Suite", price: 49 },
    { id: "ui-pack", name: "Tailwind Component Pack", price: 19 },
    { id: "orch-engine", name: "Microservice Node Orchestrator", price: 129 }
  ];

  const addToCart = (prod: typeof products[0]) => {
    playBeep(440, 0.05);
    setCart(prev => {
      const existing = prev.find(item => item.id === prod.id);
      if (existing) {
        return prev.map(item => item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...prod, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    playBeep(320, 0.05);
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item).filter(item => item.quantity > 0));
  };

  const handleCheckout = () => {
    playBeep(880, 0.2);
    setCheckoutComplete(true);
    // Generate a beautiful mock Softquark License key string
    const key = `SQ-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-LIC`;
    setLicenseKey(key);
  };

  const resetCart = () => {
    playBeep(220, 0.1);
    setCart([]);
    setCheckoutComplete(false);
    setLicenseKey("");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-neutral-200 text-sm">
      <div className="flex justify-between items-center mb-3 border-b border-neutral-800 pb-2">
        <span className="font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
          <ShoppingCart className="w-4 h-4" /> SoftStore Sandbox
        </span>
        <button onClick={resetCart} className="text-xs text-neutral-400 hover:text-white underline">
          Reset Demo
        </button>
      </div>

      {!checkoutComplete ? (
        <div className="space-y-4">
          <div>
            <p className="text-xs text-neutral-400 mb-2">Available Digital Assets:</p>
            <div className="space-y-2">
              {products.map(prod => (
                <div key={prod.id} className="flex justify-between items-center bg-neutral-950/80 border border-neutral-800 rounded-lg p-2.5">
                  <div>
                    <div className="font-medium text-neutral-100">{prod.name}</div>
                    <div className="text-xs text-emerald-400 font-mono font-bold">${prod.price}.00</div>
                  </div>
                  <button
                    onClick={() => addToCart(prod)}
                    className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-black font-semibold text-xs py-1 px-2.5 rounded-md flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Buy
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
            <span className="text-xs text-neutral-400 block mb-1.5 font-mono">Shopping Cart Checkout</span>
            {cart.length === 0 ? (
              <p className="text-xs text-neutral-500 italic py-2 text-center">Cart is empty. Add a product to configure license purchase.</p>
            ) : (
              <div className="space-y-2">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-xs">
                    <span className="truncate max-w-[200px] text-neutral-300">{item.name} (x{item.quantity})</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-neutral-100">${item.price * item.quantity}</span>
                      <button onClick={() => removeFromCart(item.id)} className="text-neutral-500 hover:text-rose-400 p-0.5">
                        <Minus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="border-t border-neutral-800 pt-2 mt-2 flex justify-between items-center font-bold text-neutral-200 font-mono text-xs">
                  <span>Grand Total:</span>
                  <span className="text-emerald-400">${total}.00</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full mt-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-black font-bold py-2 p-2 rounded-lg text-xs tracking-tight transition-all"
                >
                  Pay Securely & Deploy License
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-lg text-center space-y-3 animate-fade-in">
          <div className="inline-block bg-emerald-500/10 p-2 rounded-full border border-emerald-500/30">
            <Check className="w-6 h-6 text-emerald-400 mx-auto" />
          </div>
          <div>
            <h4 className="font-bold text-emerald-400 text-sm">Purchase Completed Successfully!</h4>
            <p className="text-xs text-neutral-400 mt-1">Transaction verified. Instant secure digital license key generated below:</p>
          </div>
          <div className="bg-neutral-950 border border-emerald-500/10 p-2.5 rounded-lg text-center select-all font-mono text-emerald-300 text-[11px] tracking-wider font-bold">
            {licenseKey}
          </div>
          <button
            onClick={resetCart}
            className="text-xs bg-neutral-900 hover:bg-neutral-850 text-neutral-300 px-3 py-1.5 rounded-md border border-neutral-800"
          >
            Simulate Another Purchase
          </button>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// 2. MEAL PLANNER DEMO
// ----------------------------------------------------
export function MealPlannerDemo() {
  const days = ["Monday", "Tuesday", "Wednesday"];
  const options = [
    { name: "Avocado Sourdough + Scrambled Eggs", cal: 420, protein: 22, carbs: 30, fats: 18 },
    { name: "Teriyaki Grilled Chicken Breast with Jasmine Rice", cal: 580, protein: 42, carbs: 65, fats: 12 },
    { name: "Seared Atlantic Salmon with Roasted Broccoli", cal: 620, protein: 40, carbs: 15, fats: 32 },
    { name: "Lentil Vegetable Soup with Multigrain Loaf", cal: 380, protein: 18, carbs: 55, fats: 6 },
    { name: "Peanut Butter Oats with Banana & Honey", cal: 450, protein: 15, carbs: 70, fats: 14 }
  ];

  type WeekPlan = { [key: string]: typeof options[0] };

  const [plan, setPlan] = useState<WeekPlan>({
    "Monday": options[0],
    "Tuesday": options[1],
    "Wednesday": options[2]
  });

  const changeDayMeal = (day: string, mealIndex: number) => {
    playBeep(600, 0.05);
    setPlan(prev => ({
      ...prev,
      [day]: options[mealIndex]
    }));
  };

  // Aggregated macros
  const planItems = Object.values(plan) as { cal: number; protein: number; carbs: number; fats: number }[];
  const totalCalories = planItems.reduce((sum, item) => sum + item.cal, 0);
  const totalProtein = planItems.reduce((sum, item) => sum + item.protein, 0);
  const totalCarbs = planItems.reduce((sum, item) => sum + item.carbs, 0);
  const totalFats = planItems.reduce((sum, item) => sum + item.fats, 0);

  // Benchmarks for calculations
  const calorieCap = 2000;
  const proteinCap = 120;
  const carbCap = 220;
  const fatCap = 70;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-neutral-200 text-sm">
      <div className="flex justify-between items-center mb-3 border-b border-neutral-800 pb-2">
        <span className="font-mono text-amber-400 flex items-center gap-1.5 font-bold">
          <Apple className="w-4 h-4" /> Weekly Meal Scheduler
        </span>
        <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono">
          Interactive Macros
        </span>
      </div>

      <div className="space-y-3 mb-4">
        {days.map(day => (
          <div key={day} className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-neutral-950 p-2.5 rounded-lg border border-neutral-800 gap-2">
            <span className="font-bold text-neutral-300 font-mono text-xs w-20">{day}:</span>
            <select
              value={options.findIndex(o => o.name === plan[day].name)}
              onChange={(e) => changeDayMeal(day, parseInt(e.target.value))}
              className="bg-neutral-900 border border-neutral-800 text-xs rounded-md px-2 py-1 flex-1 text-neutral-200 outline-none focus:border-amber-500/50"
            >
              {options.map((opt, idx) => (
                <option key={idx} value={idx}>
                  {opt.name} ({opt.cal} cal)
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800 space-y-3">
        <h5 className="text-xs text-neutral-400 font-bold border-b border-neutral-900 pb-1.5 font-mono">Macro Aggregation Dashboard:</h5>

        <div className="space-y-2">
          {/* Calorie Bar */}
          <div>
            <div className="flex justify-between text-xs text-neutral-300 mb-1">
              <span>Total Energy Calories</span>
              <span className="font-mono text-amber-400 font-bold">{totalCalories} kcal</span>
            </div>
            <div className="w-full bg-neutral-850 h-2 rounded-full overflow-hidden">
              <div
                style={{ width: `${Math.min(100, (totalCalories / calorieCap) * 100)}%` }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1 text-[11px]">
            {/* Protein */}
            <div className="bg-neutral-900/60 p-2 rounded-lg border border-neutral-800">
              <span className="text-neutral-500 block">Protein</span>
              <span className="text-neutral-100 font-bold font-mono block mt-0.5">{totalProtein}g</span>
              <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mt-1.5">
                <div style={{ width: `${Math.min(100, (totalProtein / proteinCap) * 100)}%` }} className="bg-emerald-500 h-full" />
              </div>
            </div>

            {/* Carbs */}
            <div className="bg-neutral-900/60 p-2 rounded-lg border border-neutral-800">
              <span className="text-neutral-500 block">Carbohydrates</span>
              <span className="text-neutral-100 font-bold font-mono block mt-0.5">{totalCarbs}g</span>
              <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mt-1.5">
                <div style={{ width: `${Math.min(100, (totalCarbs / carbCap) * 100)}%` }} className="bg-indigo-500 h-full" />
              </div>
            </div>

            {/* Fats */}
            <div className="bg-neutral-900/60 p-2 rounded-lg border border-neutral-800">
              <span className="text-neutral-500 block">Healthy Fats</span>
              <span className="text-neutral-100 font-bold font-mono block mt-0.5">{totalFats}g</span>
              <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden mt-1.5">
                <div style={{ width: `${Math.min(100, (totalFats / fatCap) * 100)}%` }} className="bg-rose-500 h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 3. COUNTDOWN TIMER DEMO
// ----------------------------------------------------
export function CountdownDemo() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins in seconds
  const [isActive, setIsActive] = useState(false);
  const [eventName, setEventName] = useState("Alpha Mainnet Launch");
  const [themeColor, setThemeColor] = useState<"purple" | "rose" | "cyan">("purple");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            playBeep(980, 0.4);
            setIsActive(false);
            return 0;
          }
          // Subtly click each second to mimic ticking audio (very soft)
          playBeep(600, 0.01);
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    playBeep(isActive ? 450 : 650, 0.08);
    setIsActive(!isActive);
  };

  const resetTimer = (secs: number = 300) => {
    playBeep(350, 0.1);
    setIsActive(false);
    setTimeLeft(secs);
  };

  const formatTime = (secs: number) => {
    const mm = Math.floor(secs / 60).toString().padStart(2, "0");
    const ss = (secs % 60).toString().padStart(2, "0");
    return `${mm}:${ss}`;
  };

  const themeClasses = {
    purple: "text-purple-400 border-purple-500/20 bg-purple-500/10 hover:bg-purple-500/20",
    rose: "text-rose-400 border-rose-500/20 bg-rose-500/10 hover:bg-rose-500/20",
    cyan: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10 hover:bg-cyan-500/20"
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-neutral-200 text-sm">
      <div className="flex justify-between items-center mb-3 border-b border-neutral-800 pb-2">
        <span className="font-mono text-purple-400 flex items-center gap-1.5 font-bold">
          <Play className="w-4 h-4" /> Live Countdown Engine
        </span>
        <div className="flex gap-1.5">
          {(["purple", "rose", "cyan"] as const).map(color => (
            <button
              key={color}
              onClick={() => { playBeep(700, 0.03); setThemeColor(color); }}
              className={`w-3.5 h-3.5 rounded-full border border-neutral-700 transition-transform ${
                color === "purple" ? "bg-purple-500" : color === "rose" ? "bg-rose-500" : "bg-cyan-500"
              } ${themeColor === color ? "scale-125 ring-2 ring-white/20" : "opacity-60"}`}
            />
          ))}
        </div>
      </div>

      <div className="bg-neutral-950 rounded-lg p-4 border border-neutral-800 text-center space-y-3">
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="bg-transparent border-0 text-center text-xs font-bold font-sans tracking-wide text-neutral-300 w-full focus:ring-0 focus:outline-none focus:border-b focus:border-neutral-800"
          placeholder="Enter Event Title..."
        />

        <div className={`text-4xl sm:text-5xl font-mono font-bold tracking-tight py-2 transition-all ${
          themeColor === "purple" ? "text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]" :
          themeColor === "rose" ? "text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.3)]" :
          "text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.3)]"
        }`}>
          {formatTime(timeLeft)}
        </div>

        <div className="flex justify-center gap-2">
          <button
            onClick={toggleTimer}
            className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs font-semibold transition-all ${themeClasses[themeColor]}`}
          >
            {isActive ? <><Pause className="w-3.5 h-3.5" /> Pause</> : <><Play className="w-3.5 h-3.5" /> Start</>}
          </button>
          <button
            onClick={() => resetTimer(300)}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-lg text-xs text-neutral-400 transition-colors"
            title="Reset to 5m"
          >
            <RotateCcw className="w-3.5 h-3.5" /> 5m
          </button>
          <button
            onClick={() => resetTimer(60)}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-lg text-xs text-neutral-400 transition-colors"
            title="Reset to 1m"
          >
            <RotateCcw className="w-3.5 h-3.5" /> 1m
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 4. RAMADAN COMPANION DEMO
// ----------------------------------------------------
export function RamadanTrackerDemo() {
  const [prayList, setPrayList] = useState({
    sehri: true,
    fajr: false,
    zuhr: false,
    asr: false,
    maghrib: false,
    isha: false,
    charity: false
  });
  const [tasbihCount, setTasbihCount] = useState(0);
  const [tasbihPhrase, setTasbihPhrase] = useState("SubhanAllah");

  const phrases = ["SubhanAllah", "Alhamdulillah", "Allahu Akbar"];

  const togglePray = (key: keyof typeof prayList) => {
    playBeep(450, 0.05);
    setPrayList(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleTasbihTap = () => {
    playBeep(520, 0.04);
    setTasbihCount(prev => {
      const next = prev + 1;
      if (next === 33) {
        playBeep(880, 0.2);
        // Switch to the next phrase
        const currentIdx = phrases.indexOf(tasbihPhrase);
        const nextIdx = (currentIdx + 1) % phrases.length;
        setTasbihPhrase(phrases[nextIdx]);
        return 0;
      }
      return next;
    });
  };

  const resetTasbih = () => {
    playBeep(260, 0.1);
    setTasbihCount(0);
    setTasbihPhrase(phrases[0]);
  };

  const completedCount = Object.values(prayList).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / Object.keys(prayList).length) * 100);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-neutral-200 text-sm">
      <div className="flex justify-between items-center mb-3 border-b border-neutral-800 pb-2">
        <span className="font-mono text-yellow-400 flex items-center gap-1.5 font-bold">
          <Award className="w-4 h-4" /> Ramadan Ritual Tracker
        </span>
        <button onClick={resetTasbih} className="text-xs text-neutral-400 hover:text-white underline">
          Clear Logs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Left Side: Prayers Checkbox */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-neutral-400 mb-1 font-mono">
            <span>Daily Devotional Milestones</span>
            <span className="text-yellow-400 font-bold">{progressPercent}%</span>
          </div>
          <div className="space-y-1.5 bg-neutral-950 p-2.5 rounded-lg border border-neutral-800">
            {Object.keys(prayList).map(key => {
              const label = key === "sehri" ? "Fasting (Imsak Done)" :
                            key === "fajr" ? "Fajr (Morning Prayer)" :
                            key === "zuhr" ? "Dhuhr (Noon Prayer)" :
                            key === "asr" ? "Asr (Mid-afternoon)" :
                            key === "maghrib" ? "Maghrib (Iftar completed!)" :
                            key === "isha" ? "Isha & Tarawih" : "Acts of Generosity / Charity";
              return (
                <label key={key} className="flex items-center gap-2 cursor-pointer text-xs select-none hover:text-white">
                  <input
                    type="checkbox"
                    checked={prayList[key as keyof typeof prayList]}
                    onChange={() => togglePray(key as keyof typeof prayList)}
                    className="w-3.5 h-3.5 rounded border-neutral-800 bg-neutral-900 text-yellow-500 focus:ring-yellow-500/20"
                  />
                  <span className={prayList[key as keyof typeof prayList] ? "text-neutral-500 line-through" : "text-neutral-300"}>
                    {label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Right Side: Digital Tasbih Counter widget */}
        <div className="flex flex-col items-center justify-center bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-center">
          <span className="text-xs text-neutral-500 font-mono mb-1 uppercase tracking-wider block">Digital Tasbih Counter</span>
          
          <div className="text-xs text-yellow-500 font-bold font-mono">
            {tasbihPhrase}
          </div>

          <div className="text-3xl font-mono font-bold text-neutral-100 my-1 py-1 px-4 bg-neutral-900 rounded-md border border-neutral-800">
            {tasbihCount.toString().padStart(2, "0")}<span className="text-neutral-500 text-xs">/33</span>
          </div>

          <button
            onClick={handleTasbihTap}
            className="mt-2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black active:scale-95 transition-transform shadow-lg shadow-yellow-500/10 flex items-center justify-center focus:ring-4 focus:ring-yellow-500/20 font-bold text-xs"
          >
            TAP
          </button>
          
          <p className="text-[10px] text-neutral-500 mt-2">Resets and shifts phrases automatically at 33.</p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 5. ROKTO SEBA DEMO
// ----------------------------------------------------
export function RoktoSebaDemo() {
  const [recipientGroup, setRecipientGroup] = useState("O+");
  
  // Blood compatibility chart: Recipient O+ can receive from O+, O-
  const compatibility: { [key: string]: string[] } = {
    "A+": ["A+", "A-", "O+", "O-"],
    "A-": ["A-", "O-"],
    "B+": ["B+", "B-", "O+", "O-"],
    "B-": ["B-", "O-"],
    "AB+": ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    "AB-": ["A-", "B-", "O-", "AB-"],
    "O+": ["O+", "O-"],
    "O-": ["O-"]
  };

  const mockDonors = [
    { name: "Ashfaq Al-Mueen", type: "O+", phone: "+880 1711-234567", loc: "Dhaka" },
    { name: "Tahmid Hasan", type: "AB+", phone: "+880 1812-765432", loc: "Chittagong" },
    { name: "Nabila Tabassum", type: "A-", phone: "+880 1913-987654", loc: "Sylhet" },
    { name: "Kazi Rayhan", type: "O-", phone: "+880 1514-432109", loc: "Dhaka" }
  ];

  const handleGroupSelect = (grp: string) => {
    playBeep(400, 0.05);
    setRecipientGroup(grp);
  };

  const availableDonors = mockDonors.filter(donor => compatibility[recipientGroup].includes(donor.type));

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-neutral-200 text-sm">
      <div className="flex justify-between items-center mb-3 border-b border-neutral-800 pb-2">
        <span className="font-mono text-rose-400 flex items-center gap-1.5 font-bold">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" /> Blood Connection Map
        </span>
        <span className="text-xs text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full font-mono text-[11px] font-bold">
          Emergency Registry
        </span>
      </div>

      <div className="space-y-3.5">
        {/* Step 1: Select Recipient Blood Type */}
        <div>
          <span className="text-xs text-neutral-400 block mb-1.5 font-mono">1. Select Patient's Blood Group:</span>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
            {Object.keys(compatibility).map(grp => (
              <button
                key={grp}
                onClick={() => handleGroupSelect(grp)}
                className={`py-1 rounded-md text-xs font-bold transition-all ${
                  recipientGroup === grp
                    ? "bg-rose-500 text-black shadow-md shadow-rose-500/15"
                    : "bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Biological compatibility chips */}
        <div className="bg-neutral-950 p-2.5 rounded-lg border border-neutral-800">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-xs text-neutral-400 font-mono">Compatible Donor Blood Types for </span>
            <span className="text-xs font-bold font-mono text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded-md">{recipientGroup}</span>
            <span className="text-xs text-neutral-400 font-mono">:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {compatibility[recipientGroup].map(donorGrp => (
              <span key={donorGrp} className="bg-neutral-900 border border-neutral-800 text-rose-300 px-2.5 py-0.5 rounded-full text-xs font-semibold font-mono">
                {donorGrp}
              </span>
            ))}
          </div>
        </div>

        {/* Step 3: Match Filter result */}
        <div>
          <span className="text-xs text-neutral-400 block mb-1.5 font-mono">2. Registered Compatible Donors ({availableDonors.length}):</span>
          <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
            {availableDonors.length === 0 ? (
              <p className="text-xs text-neutral-500 italic py-2 text-center">No immediate matches in our micro-database.</p>
            ) : (
              availableDonors.map((donor, idx) => (
                <div key={idx} className="flex justify-between items-center bg-neutral-950/80 border border-neutral-805/80 p-2 rounded-lg text-xs hover:border-rose-500/30 transition-colors">
                  <div>
                    <div className="font-semibold text-neutral-250 flex items-center gap-1.5">
                      {donor.name}
                      <span className="bg-rose-500 text-black px-1.5 py-0.1 select-none text-[9px] rounded font-mono font-black">{donor.type}</span>
                    </div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">Location: {donor.loc} - Verified Volunteer</div>
                  </div>
                  <button
                    onClick={() => {
                      playBeep(980, 0.08);
                      navigator.clipboard.writeText(`${donor.name}: ${donor.phone}`);
                      alert(`Contact details for ${donor.name} copied!`);
                    }}
                    className="p-1 px-2.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 font-medium rounded border border-neutral-800 hover:border-rose-500/30 flex items-center gap-1 text-[10px] transition-colors"
                  >
                    <Phone className="w-2.5 h-2.5" /> Call / Copy
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 6. LOGIC DIAGRAM COMPOSER DEMO
// ----------------------------------------------------
export function LogicDiagramDemo() {
  const [inputA, setInputA] = useState(true);
  const [inputB, setInputB] = useState(false);
  const [selectedGate, setSelectedGate] = useState<"AND" | "OR" | "XOR">("AND");

  const toggleInput = (isA: boolean) => {
    playBeep(650, 0.04);
    if (isA) {
      setInputA(!inputA);
    } else {
      setInputB(!inputB);
    }
  };

  const handleGateSelect = (gate: "AND" | "OR" | "XOR") => {
    playBeep(450, 0.05);
    setSelectedGate(gate);
  };

  // Perform operational evaluation
  const evaluateGate = () => {
    if (selectedGate === "AND") return inputA && inputB;
    if (selectedGate === "OR") return inputA || inputB;
    if (selectedGate === "XOR") return inputA !== inputB;
    return false;
  };

  const outputValue = evaluateGate();

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-neutral-200 text-sm">
      <div className="flex justify-between items-center mb-3 border-b border-neutral-800 pb-2">
        <span className="font-mono text-cyan-400 flex items-center gap-1.5 font-bold">
          <Activity className="w-4 h-4" /> Logic Gate Workspace
        </span>
        <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-0.5 border border-cyan-500/20 rounded-full font-mono text-xs uppercase font-semibold">
          Discrete Circulating Signal
        </span>
      </div>

      <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 flex flex-col justify-center items-center relative overflow-hidden">
        {/* Schematic Circuit Graph SVG styled block */}
        <div className="w-full flex justify-between items-center max-w-[340px] py-4 relative z-10">
          
          {/* Input Handles */}
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <span className="text-[10px] text-neutral-500 block font-mono">Input A</span>
              <button
                onClick={() => toggleInput(true)}
                className={`mt-1.5 w-11 h-6 rounded-full p-0.5 transition-colors focus:ring-2 focus:ring-cyan-500/20 ${
                  inputA ? "bg-cyan-500 justify-end" : "bg-neutral-800 justify-start"
                } flex items-center`}
              >
                <div className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200" />
              </button>
              <span className="text-[10px] text-neutral-400 font-mono mt-0.5 block">{inputA ? "HIGH (1)" : "LOW (0)"}</span>
            </div>

            <div className="text-center">
              <span className="text-[10px] text-neutral-500 block font-mono">Input B</span>
              <button
                onClick={() => toggleInput(false)}
                className={`mt-1.5 w-11 h-6 rounded-full p-0.5 transition-colors focus:ring-2 focus:ring-cyan-500/20 ${
                  inputB ? "bg-cyan-500 justify-end" : "bg-neutral-800 justify-start"
                } flex items-center`}
              >
                <div className="w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200" />
              </button>
              <span className="text-[10px] text-neutral-400 font-mono mt-0.5 block">{inputB ? "HIGH (1)" : "LOW (0)"}</span>
            </div>
          </div>

          {/* Connectors Visual representation inside wire SVGs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none md:block hidden" style={{ zIndex: -1 }}>
            {/* Input A wire */}
            <path
              d="M 50,42 L 130,42 L 130,68"
              fill="none"
              stroke={inputA ? "#06b6d4" : "#262626"}
              strokeWidth="2"
              className="transition-colors duration-200"
            />
            {/* Input B wire */}
            <path
              d="M 50,118 L 130,118 L 130,92"
              fill="none"
              stroke={inputB ? "#06b6d4" : "#262626"}
              strokeWidth="2"
              className="transition-colors duration-200"
            />
            {/* Output wire */}
            <path
              d="M 210,80 L 290,80"
              fill="none"
              stroke={outputValue ? "#06b6d4" : "#262626"}
              strokeWidth="2.5"
              className="transition-colors duration-200"
            />
          </svg>

          {/* Logic Gate Selection Selector Block */}
          <div className="flex flex-col gap-1.5 bg-neutral-900 border border-neutral-800 p-2 rounded-lg text-center shadow-lg w-28 relative">
            <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-mono">Select Gate</span>
            {(["AND", "OR", "XOR"] as const).map(gate => (
              <button
                key={gate}
                onClick={() => handleGateSelect(gate)}
                className={`py-1 px-1.5 rounded text-[10px] font-bold transition-all ${
                  selectedGate === gate
                    ? "bg-cyan-500 text-black font-extrabold"
                    : "bg-neutral-950 text-neutral-400 hover:text-white"
                }`}
              >
                {gate}
              </button>
            ))}
          </div>

          {/* Output Signal display Light bulb */}
          <div className="text-center pl-2">
            <span className="text-[10px] text-neutral-500 block font-mono">Output Signal</span>
            <div className={`mt-2 w-12 h-12 rounded-full mx-auto flex items-center justify-center border transition-all duration-300 ${
              outputValue
                ? "bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                : "bg-neutral-900 border-neutral-800 text-neutral-600"
            }`}>
              <Sparkles className={`w-5 h-5 ${outputValue ? "text-cyan-400" : "text-neutral-700"}`} />
            </div>
            <span className={`text-[10px] font-mono mt-1 w-full block font-extrabold ${outputValue ? "text-cyan-400" : "text-neutral-500"}`}>
              {outputValue ? "HIGH (1)" : "LOW (0)"}
            </span>
          </div>

        </div>

        {/* Truth representation box */}
        <div className="w-full mt-2 bg-neutral-900/60 p-2 rounded-lg border border-neutral-850 text-center font-mono text-[11px] text-neutral-400">
          Boolean Formula Evaluation: <br />
          <span className="text-cyan-300 font-bold block mt-1">
            {inputA ? "1" : "0"} {selectedGate === "AND" ? "∧" : selectedGate === "OR" ? "∨" : "⊕"} {inputB ? "1" : "0"} = {outputValue ? "1" : "0"}
          </span>
        </div>
      </div>
    </div>
  );
}
