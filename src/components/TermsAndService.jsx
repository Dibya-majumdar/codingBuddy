import React from "react";

const TermsAndService = () => {
  return (
    <div className="bg-[#1D232A] text-white px-6 md:px-20 py-12 min-h-screen mt-2 mb-2  lg:w-1/2  flex flex-col lg:ml-[350px] rounded-md overflow-hidden ">
      <h1 className="text-4xl font-bold text-green-400 mb-6">Terms & Conditions</h1>

      <p className="mb-4 text-lg">
        Welcome to <span className="text-green-300 font-semibold">DevBuddy</span>! By using our website, you agree to the following terms and conditions. Please read them carefully.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-8 mb-2">1. Use of the Platform</h2>
      <p className="text-lg mb-4">
        DevBuddy is a platform to connect developers with potential project partners. You agree to use the platform responsibly and for its intended purpose only.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">2. User Conduct</h2>
      <p className="text-lg mb-4">
        You must not use DevBuddy to harass, spam, or harm other users. Any such behavior can result in a permanent ban from the platform.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">3. Content Ownership</h2>
      <p className="text-lg mb-4">
        You retain ownership of the content you post, but by submitting it, you grant DevBuddy the right to display and distribute it on the platform.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">4. Privacy</h2>
      <p className="text-lg mb-4">
        We respect your privacy. Your data will never be sold or shared with third parties without your consent. For more details, please read our Privacy Policy.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">5. Disclaimer</h2>
      <p className="text-lg mb-4">
        DevBuddy does not guarantee successful collaborations. Users are responsible for their own interactions and projects.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">6. Changes to Terms</h2>
      <p className="text-lg mb-4">
        We may update these terms from time to time. You will be notified of major changes, and continued use of DevBuddy means you accept those changes.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">7. Contact Us</h2>
      <p className="text-lg mb-4">
        For any questions or concerns regarding these terms, contact us at <span className="text-green-300">DevBuddy2025@gmail.com</span>.
      </p>

      <p className="mt-10 text-sm text-gray-400">
        Last Updated: April 7, 2025
      </p>
    </div>
  );
};

export default TermsAndService;
