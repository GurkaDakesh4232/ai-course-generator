"use client"
import React from 'react';
import { FaCrown, FaRocket, FaStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

function UpgradePage() {
  const router = useRouter();

  const plans = [
    {
      icon: <FaStar size={40} className="text-yellow-500" />,
      title: 'Basic Plan',
      price: '$9.99/mo',
      features: ['Access to basic courses', 'Community support', 'Standard resources'],
      bgColor: '#f0f4ff', // Light blue
    },
    {
      icon: <FaRocket size={40} className="text-purple-500" />,
      title: 'Pro Plan',
      price: '$19.99/mo',
      features: ['All Basic features', 'Advanced courses', 'Priority support', 'Exclusive webinars'],
      bgColor: '#f5e8ff', // Light purple
    },
    {
      icon: <FaCrown size={40} className="text-yellow-600" />,
      title: 'Premium Plan',
      price: '$29.99/mo',
      features: ['All Pro features', '1-on-1 mentorship', 'Certification programs', 'Lifetime access'],
      bgColor: '#fff8e1', // Light yellow
    },
  ];

  const handleUpgrade = () => {
    router.push('/congratulations');  // Redirect to the Congratulations page
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Upgrade Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: plan.bgColor }}
          >
            <div className="flex justify-center mb-4">{plan.icon}</div>
            <h3 className="text-2xl font-semibold text-center mb-2">{plan.title}</h3>
            <p className="text-center text-xl font-bold text-gray-800 mb-4">{plan.price}</p>
            <ul className="text-center text-gray-700 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-1">- {feature}</li>
              ))}
            </ul>
            <button
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg transition-colors hover:bg-blue-700"
              onClick={handleUpgrade}
            >
              Upgrade Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpgradePage;
