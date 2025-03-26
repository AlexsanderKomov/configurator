interface ILabelForm {
  children: React.ReactNode;
  label: string;
  textError?: string;
}

function LabelForm(props: ILabelForm) {
  const { children, label, textError } = props;

  return (
    <div>
      {textError && <p className="text-red-500">{textError}</p>}
      <label className="block text-sm font-medium mb-1">
        {label}
        {children}
      </label>
    </div>
  );
}

export default LabelForm;
