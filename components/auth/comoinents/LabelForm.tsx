import React from "react";

interface ILabelForm {
  children: React.ReactNode;
  text: string;
  textError?: string;
}

function LabelForm(props: ILabelForm) {
  const { children, text, textError } = props;

  return (
    <div>
      {textError && <p className="text-red-500">{textError}</p>}
      <label className="block text-sm font-medium mb-1">
        {text}
        {children}
      </label>
    </div>
  );
}

export default LabelForm;
