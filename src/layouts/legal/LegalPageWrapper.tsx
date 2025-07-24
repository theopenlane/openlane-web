import React from "react";

interface LegalPageWrapperProps {
  children: React.ReactNode;
}

const LegalPageWrapper: React.FC<LegalPageWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1290px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalPageWrapper;
