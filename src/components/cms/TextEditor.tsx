import { FC, useRef, forwardRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  label: string;
  value?: string;
  placeholder: string;
  height: string;
  onChange?: (content: string) => void;
}

const QuillWrapper = forwardRef((props: any, ref: any) => {
  return <ReactQuill {...props} ref={ref} />;
});

const TextEditor: FC<TextEditorProps> = ({ label, value, placeholder, height, onChange }) => {
  const quillRef = useRef<ReactQuill | null>(null);

  return (
    <>
      <label htmlFor="textEditor" className="mb-2 block">
        {label}
      </label>
      <QuillWrapper
        theme="snow"
        value={value}
        onChange={onChange}
        ref={quillRef}
        placeholder={placeholder}
        style={{ height, marginBottom: "60px" }}
      />
    </>
  );
};

export default TextEditor;
