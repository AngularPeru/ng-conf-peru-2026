"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import KRGlue from "@lyracom/embedded-form-glue";

const TICKET_PRICE_CENTS = "15000"; // S/ 150.00 in centavos
const TICKET_CURRENCY = "PEN";

export default function CheckoutFlow() {
  const { t } = useLanguage();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

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

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (step === 1) {
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
        if (
          !/^\d{9}$/.test(docNumClean) &&
          !/^[a-zA-Z0-9]{9}$/.test(docNumClean)
        ) {
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
    }
  };

  const handlePayment = async () => {
    setError(null);
    setIsProcessing(true);

    try {
      const transactionId = new Date().getTime().toString();

      // Step 1: Create payment token via our API
      const responseFormtoken = await fetch("/api/createPayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: TICKET_PRICE_CENTS,
          customer: {
            email: info.email,
            names: info.firstName,
            lastName: info.lastName,
            phone: "999999999",
            document: info.docNumber,
          },
          currency: TICKET_CURRENCY,
          orderId: transactionId,
        }),
      });

      const token = await responseFormtoken.json();

      if (!token) {
        setError(t.checkout.payment.error);
        setIsProcessing(false);
        return;
      }

      // Step 2: Load KR SDK
      const { KR } = await KRGlue.loadLibrary(
        "https://static.micuentaweb.pe",
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      );

      // Clean up any previous forms
      try {
        KR.removeForms();
      } catch {
        // ignore if no forms exist yet
      }

      // Step 3: Configure form
      await KR.setFormConfig({
        formToken: token,
        "kr-language": "es-ES",
      });

      // Step 4: Handle payment submission
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await KR.onSubmit(async (paymentData: any) => {
        const response = await fetch("/api/validatePayment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...paymentData,
            formData: {
              firstName: info.firstName,
              lastName: info.lastName,
              email: info.email,
              docType: info.docType,
              docNumber: info.docNumber,
              tshirtSize: info.tshirtSize,
              dietary: info.dietary,
            },
          }),
        });

        if (response.status === 200) {
          setStep(3);
          setError(null);
        } else {
          setError(t.checkout.payment.error);
        }

        setIsProcessing(false);
        return false; // Prevent Izipay redirect
      });

      // Step 5: Open popup when form is ready
      await KR.onFormReady(async () => {
        await KR.openPopin(token);
        setIsProcessing(false);
      });

      // Step 6: Cleanup on popup close
      await KR.onPopinClosed(() => {
        KR.removeForms();
        setIsProcessing(false);
      });

      // Step 7: Render the KR elements into the mount point
      await KR.renderElements("#myPaymentForm");
    } catch {
      setIsProcessing(false);
      setError(t.checkout.payment.error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Column: Form */}
      <div className="md:col-span-2">
        {/* Step Indicator */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className={`flex items-center gap-2 ${step >= 1 ? "text-[#E5097F]" : "text-gray-500"}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? "bg-[#E5097F] text-white" : "bg-gray-800"}`}
            >
              1
            </div>
            <span className="font-semibold text-sm hidden sm:block">
              {t.checkout.steps.info}
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-[#E5097F] transition-all duration-300 ${step >= 2 ? "w-full" : "w-0"}`}
            />
          </div>
          <div
            className={`flex items-center gap-2 ${step >= 2 ? "text-[#E5097F]" : "text-gray-500"}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? "bg-[#E5097F] text-white" : "bg-gray-800"}`}
            >
              2
            </div>
            <span className="font-semibold text-sm hidden sm:block">
              {t.checkout.steps.payment}
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-[#E5097F] transition-all duration-300 ${step >= 3 ? "w-full" : "w-0"}`}
            />
          </div>
          <div
            className={`flex items-center gap-2 ${step >= 3 ? "text-[#E5097F]" : "text-gray-500"}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 3 ? "bg-[#E5097F] text-white" : "bg-gray-800"}`}
            >
              3
            </div>
            <span className="font-semibold text-sm hidden sm:block">
              {t.checkout.steps.success}
            </span>
          </div>
        </div>

        {/* Step 1: Info */}
        {step === 1 && (
          <form
            onSubmit={handleNext}
            className="space-y-6 bg-[#121215] p-6 sm:p-8 rounded-2xl border border-white/5"
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-outfit">
              {t.checkout.info.title}
            </h2>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  {t.checkout.info.firstName}
                </label>
                <input
                  required
                  type="text"
                  value={info.firstName}
                  onChange={(e) =>
                    setInfo({ ...info, firstName: e.target.value })
                  }
                  className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  {t.checkout.info.lastName}
                </label>
                <input
                  required
                  type="text"
                  value={info.lastName}
                  onChange={(e) =>
                    setInfo({ ...info, lastName: e.target.value })
                  }
                  className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                {t.checkout.info.email}
              </label>
              <input
                required
                type="email"
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  {t.checkout.info.docType}
                </label>
                <select
                  value={info.docType}
                  onChange={(e) =>
                    setInfo({ ...info, docType: e.target.value })
                  }
                  className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors"
                >
                  <option value="DNI">{t.checkout.info.docTypeDNI}</option>
                  <option value="CE">{t.checkout.info.docTypeCE}</option>
                  <option value="PASAPORTE">
                    {t.checkout.info.docTypePasaporte}
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  {t.checkout.info.docNumber}
                </label>
                <input
                  required
                  type="text"
                  value={info.docNumber}
                  onChange={(e) =>
                    setInfo({ ...info, docNumber: e.target.value })
                  }
                  className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  {t.checkout.info.tshirtSize}
                </label>
                <select
                  value={info.tshirtSize}
                  onChange={(e) =>
                    setInfo({ ...info, tshirtSize: e.target.value })
                  }
                  className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors"
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  {t.checkout.info.dietary}
                </label>
                <input
                  type="text"
                  value={info.dietary}
                  onChange={(e) =>
                    setInfo({ ...info, dietary: e.target.value })
                  }
                  className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E5097F] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-8 rounded-xl bg-[#E5097F] hover:bg-[#FF007A] text-white font-bold shadow-lg shadow-[#E5097F]/30 transition-all duration-200"
            >
              {t.checkout.info.next}
            </button>
          </form>
        )}

        {/* Step 2: Payment - Triggers Izipay popup */}
        {step === 2 && (
          <div className="space-y-6 bg-[#121215] p-6 sm:p-8 rounded-2xl border border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
              >
                {t.checkout.payment.back}
              </button>
              <h2 className="text-2xl font-bold text-white font-outfit m-0">
                {t.checkout.payment.title}
              </h2>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <div className="text-center space-y-4 py-6">
              <p className="text-gray-300">
                {t.checkout.payment.izipayDescription}
              </p>
              <button
                type="button"
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full py-4 rounded-xl bg-[#E5097F] hover:bg-[#FF007A] text-white font-bold shadow-lg shadow-[#E5097F]/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    {t.checkout.payment.processing}
                  </span>
                ) : (
                  t.checkout.payment.pay
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="bg-[#121215] p-8 sm:p-12 rounded-2xl border border-[#E5097F]/20 text-center space-y-6">
            <div className="w-20 h-20 bg-[#E5097F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-[#E5097F]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white font-outfit">
              {t.checkout.success.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              {t.checkout.success.desc}
            </p>
            <div className="pt-8">
              <Link
                href="/"
                className="inline-block px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all duration-200"
              >
                {t.checkout.success.homeBtn}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Order Summary */}
      <div className="md:col-span-1">
        <div className="bg-[#121215] p-6 rounded-2xl border border-white/5 sticky top-24">
          <h3 className="text-xl font-bold text-white mb-6 font-outfit">
            {t.checkout.summary.title}
          </h3>

          <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10">
            <div>
              <p className="font-semibold text-gray-200">
                {t.checkout.summary.ticketName}
              </p>
              <p className="text-sm text-gray-400 mt-1">1x</p>
            </div>
            <p className="font-semibold text-white">
              {t.checkout.summary.price}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-bold text-gray-300">{t.checkout.summary.total}</p>
            <p className="text-2xl font-bold text-[#E5097F]">
              {t.checkout.summary.price}
            </p>
          </div>
        </div>
      </div>

      {/* Izipay KR SDK mount point — must be in the DOM (not display:none) for KR to render */}
      <div
        id="myPaymentForm"
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <div
          className="kr-smart-form"
          kr-popin="true"
          style={{ position: "relative", zIndex: "9999" }}
          kr-card-form-expanded="true"
        />
      </div>

      {/* Izipay styles */}
      <link
        rel="stylesheet"
        href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.css"
      />
      <style>{`
        .kr-embedded .kr-payment-button {
          background-color: #E5097F !important;
        }
        .kr-smart-form-modal-button.kr-disabled {
          display: none !important;
        }
        .kr-smart-form .kr-smart-form-wrapper.kr-type-popin .kr-smart-form-modal-button.kr-loading {
          display: none !important;
        }
        .kr-smart-form .kr-smart-form-wrapper.kr-type-popin .kr-smart-form-modal-button {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
