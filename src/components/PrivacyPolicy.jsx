import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0E1014] text-white px-6 md:px-20 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-green-400 mb-6">Privacy Policy</h1>

      <p className="text-lg mb-4">
        At <span className="text-green-300 font-semibold">DevBuddy</span>, we care deeply about your privacy. This policy explains what information we collect, how we use it, and how we protect it.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-8 mb-2">1. Information We Collect</h2>
      <p className="text-lg mb-4">
        When you use DevBuddy, we may collect:
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Your name and email address (when you register or contact us)</li>
          <li>Messages or content you submit through the platform</li>
          <li>Usage data (like which pages you visit)</li>
        </ul>
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="text-lg mb-4">
        We use your information to:
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Connect you with other developers</li>
          <li>Improve the platform experience</li>
          <li>Respond to your messages and support requests</li>
        </ul>
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">3. Data Security</h2>
      <p className="text-lg mb-4">
        We take data protection seriously. Your information is stored securely and is never sold to third parties.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">4. Cookies</h2>
      <p className="text-lg mb-4">
        We may use cookies to improve your experience, such as remembering your login or preferences.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">5. Third-Party Services</h2>
      <p className="text-lg mb-4">
        We may use third-party tools like analytics or email services. These services have their own privacy policies.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">6. Your Rights</h2>
      <p className="text-lg mb-4">
        You can always contact us to view, edit, or delete your personal data. We respect your control over your own info.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="text-lg mb-4">
        We may update this policy from time to time. If we make major changes, we’ll notify you via email or in-app.
      </p>

      {/* Section 8 */}
      <h2 className="text-2xl font-semibold text-green-300 mt-6 mb-2">8. Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions about this Privacy Policy, feel free to reach out at <span className="text-green-300">DevBuddy2025@gmail.com</span>.
      </p>

      <p className="mt-10 text-sm text-gray-400">
        Last Updated: April 7, 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
