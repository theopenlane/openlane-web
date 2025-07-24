import React from "react";

interface LegalPageWrapperProps {
  children: React.ReactNode;
  activePage:
    | "privacy-policy"
    | "cookie-policy"
    | "dpa"
    | "terms-of-service"
    | "subprocessors";
  lastUpdated?: string;
}

const LegalPageWrapper: React.FC<LegalPageWrapperProps> = ({
  children,
  activePage,
  lastUpdated,
}) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1290px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {children}
        </div>
        {lastUpdated && (
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalPageWrapper;
