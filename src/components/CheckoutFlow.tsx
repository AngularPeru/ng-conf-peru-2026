"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CheckoutFlow() {
  const { t } = useLanguage();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    docType: "DNI",
    docNumber: "",
    tshirtSize: "M",
    dietary: "",
  });

  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (step === 1) {
      // Validate step 1
      if (!info.firstName.trim() || !info.lastName.trim()) {
        setError("Name and Last Name are required and cannot be empty.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(info.email)) {
        setError("Please enter a valid email address.");
        return;
      }

      const docNumClean = info.docNumber.trim();
      if (!docNumClean) {
        setError("Document Number is required.");
        return;
      }

      if (info.docType === "DNI") {
        if (!/^\d{8}$/.test(docNumClean)) {
          setError("DNI must be exactly 8 digits.");
          return;
        }
      } else if (info.docType === "CE") {
        if (!/^\d{9}$/.test(docNumClean) && !/^[a-zA-Z0-9]{9}$/.test(docNumClean)) {
           setError("CE must be 9 alphanumeric characters.");
           return;
        }
      } else if (info.docType === "PASAPORTE") {
        if (docNumClean.length < 6 || docNumClean.length > 20) {
           setError("Passport must be between 6 and 20 characters.");
           return;
        }
      }

      setStep(2);
    } else if (step === 2) {
      // Fake validation
      if (
        payment.cardNumber.replace(/\s/g, "") === "1111111111111111" &&
        payment.expiry === "01/01" &&
        payment.cvv === "111"
      ) {
        setStep(3);
        setError(null);
      } else {
        setError(t.checkout.payment.error);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Column: Form */}
      <div className="md:col-span-2">
        {/* Step Indicator */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`flex items-center gap-2 ${step >= 1 ? "text-[#E5097F]" : "text-gray-500"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? "bg-[#E5097F] text-white" : "bg-gray-800"}`}>1</div>
            <span className="font-semibold text-sm hidden sm:block">{t.checkout.steps.info}</span>
          </div>
          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className={`h-full bg-[#E5097F] transition-all duration-300 ${step >= 2 ? "w-full" : "w-0"}`} />
          </div>
          <div className={`flex items-center gap-2 ${step >= 2 ? "text-[#E5097F]" : "text-gray-500"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? "bg-[#E5097F] text-white" : "bg-gray-800"}`}>2</div>
            <span className="font-semibold text-sm hidden sm:block">{t.checkout.steps.payment}</span>
          </div>
          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className={`h-full bg-[#E5097F] transition-all duration-300 ${step >= 3 ? "w-full" : "w-0"}`} />
          </div>
          <div className={`flex items-center gap-2 ${step >= 3 ? "text-[#E5097F]" : "text-gray-500"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 3 ? "bg-[#E5097F] text-white" : "bg-gray-800"}`}>3</div>
            <span className="font-semibold text-sm hidden sm:block">{t.checkout.steps.success}</span>
          </div>
        </div>

        {/* Step 1: Info */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6 bg-[#121215] p-6 sm:p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 font-outfit">{t.checkout.info.title}</h2>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.checkout.info.firstName}</label>
                <input required type="text" value={info.firstName} onChange={(e) => setInfo({...info, firstName: e.target.value})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.checkout.info.lastName}</label>
                <input required type="text" value={info.lastName} onChange={(e) => setInfo({...info, lastName: e.target.value})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">{t.checkout.info.email}</label>
              <input required type="email" value={info.email} onChange={(e) => setInfo({...info, email: e.target.value})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.checkout.info.docType}</label>
                <select value={info.docType} onChange={(e) => setInfo({...info, docType: e.target.value})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors">
                  <option value="DNI">{t.checkout.info.docTypeDNI}</option>
                  <option value="CE">{t.checkout.info.docTypeCE}</option>
                  <option value="PASAPORTE">{t.checkout.info.docTypePasaporte}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.checkout.info.docNumber}</label>
                <input required type="text" value={info.docNumber} onChange={(e) => setInfo({...info, docNumber: e.target.value})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.checkout.info.tshirtSize}</label>
                <select value={info.tshirtSize} onChange={(e) => setInfo({...info, tshirtSize: e.target.value})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.checkout.info.dietary}</label>
                <input type="text" value={info.dietary} onChange={(e) => setInfo({...info, dietary: e.target.value})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors" />
              </div>
            </div>

            <button type="submit" className="w-full py-4 mt-8 rounded-xl bg-[#E5097F] hover:bg-[#FF007A] text-white font-bold shadow-lg shadow-[#E5097F]/30 transition-all duration-200">
              {t.checkout.info.next}
            </button>
          </form>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-6 bg-[#121215] p-6 sm:p-8 rounded-2xl border border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <button type="button" onClick={() => setStep(1)} className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                ← {t.checkout.payment.back}
              </button>
              <h2 className="text-2xl font-bold text-white font-outfit m-0">{t.checkout.payment.title}</h2>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">{t.checkout.payment.cardName}</label>
              <input required type="text" value={payment.cardName} onChange={(e) => setPayment({...payment, cardName: e.target.value})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">{t.checkout.payment.cardNumber}</label>
              <input required type="text" maxLength={19} placeholder="1111 1111 1111 1111" value={payment.cardNumber} onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                setPayment({...payment, cardNumber: val});
              }} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors tracking-widest font-mono" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.checkout.payment.expiry}</label>
                <input required type="text" maxLength={5} placeholder="01/01" value={payment.expiry} onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, '');
                  if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2, 4);
                  setPayment({...payment, expiry: val});
                }} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">{t.checkout.payment.cvv}</label>
                <input required type="text" maxLength={4} placeholder="111" value={payment.cvv} onChange={(e) => setPayment({...payment, cvv: e.target.value.replace(/\D/g, '')})} className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors" />
              </div>
            </div>

            <button type="submit" className="w-full py-4 mt-8 rounded-xl bg-[#E5097F] hover:bg-[#FF007A] text-white font-bold shadow-lg shadow-[#E5097F]/30 transition-all duration-200">
              {t.checkout.payment.pay}
            </button>
          </form>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="bg-[#121215] p-8 sm:p-12 rounded-2xl border border-[#E5097F]/20 text-center space-y-6">
            <div className="w-20 h-20 bg-[#E5097F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#E5097F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white font-outfit">{t.checkout.success.title}</h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">{t.checkout.success.desc}</p>
            <div className="pt-8">
              <Link href="/" className="inline-block px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all duration-200">
                {t.checkout.success.homeBtn}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Order Summary */}
      <div className="md:col-span-1">
        <div className="bg-[#121215] p-6 rounded-2xl border border-white/5 sticky top-24">
          <h3 className="text-xl font-bold text-white mb-6 font-outfit">{t.checkout.summary.title}</h3>

          <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10">
            <div>
              <p className="font-semibold text-gray-200">{t.checkout.summary.ticketName}</p>
              <p className="text-sm text-gray-400 mt-1">1x</p>
            </div>
            <p className="font-semibold text-white">{t.checkout.summary.price}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-bold text-gray-300">{t.checkout.summary.total}</p>
            <p className="text-2xl font-bold text-[#E5097F]">{t.checkout.summary.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}