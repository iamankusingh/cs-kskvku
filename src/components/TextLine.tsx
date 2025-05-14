interface textLineProps {
  text: string;
}

const TextLine: React.FC<textLineProps> = ({ text }) => {
  // page heading
  return (
    <div className="py-2">
      <h3 className="w-fit mx-auto text-xl font-bold border-b-2 cursor-default">
        {text}
      </h3>
    </div>
  );
};

export default TextLine;
