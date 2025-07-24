import React from "react";

interface SubprocessorsProps {
  lastUpdated?: string;
}

const Subprocessors: React.FC<SubprocessorsProps> = ({ lastUpdated }) => {
  return (
    <div className="max-w-[1290px] mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-6xl font-normal leading-[100%] tracking-[-1.5px] mb-2">
          Subprocessors
        </h1>
        {lastUpdated && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>
      <div className="text-color font-normal leading-6 space-y-8">
        <div>
          <p className="text-sm mb-8">
            To support the delivery of our Services, theopenlane Inc. may engage
            and use data processors with access to certain Customer Data. This
            page provides important information about the identity, location,
            and role of each subprocessor.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4 font-semibold">Vendor</th>
                <th className="text-left py-4 px-4 font-semibold">Location</th>
                <th className="text-left py-4 px-4 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-4">Cloudflare, Inc.</td>
                <td className="py-4 px-4">USA</td>
                <td className="py-4 px-4">Web application firewall</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-4">Vercel Inc.</td>
                <td className="py-4 px-4">USA</td>
                <td className="py-4 px-4">Website hosting and deployment</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-4">Google LLC</td>
                <td className="py-4 px-4">USA</td>
                <td className="py-4 px-4">Infrastructure provider</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-4">Amazon Web Services</td>
                <td className="py-4 px-4">USA</td>
                <td className="py-4 px-4">Cloud storage</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-4">Salesforce, Inc.</td>
                <td className="py-4 px-4">USA</td>
                <td className="py-4 px-4">(Slack) Team Communication</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-4">Stripe, Inc.</td>
                <td className="py-4 px-4">USA</td>
                <td className="py-4 px-4">Payment processing</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-4 px-4">Plus Five Five, Inc.</td>
                <td className="py-4 px-4">USA</td>
                <td className="py-4 px-4">(Resend) Email Provider</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subprocessors;
