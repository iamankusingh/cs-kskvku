interface textLineProps {
  text: string;
}

const TextLine: React.FC<textLineProps> = ({ text }) => {
  return (
    <div>
      <span className="text-xl border-b-2">{text}</span>
    </div>
  );
};

export default TextLine;
