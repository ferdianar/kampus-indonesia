import React, { useRef, forwardRef } from "react";
import { Editor as Tinymce } from "@tinymce/tinymce-react";

const Editor = forwardRef<any, any>(({ ...props }, ref) => {
  const editorRef = useRef(null);
  return (
    <Tinymce
      ref={props.ref}
      apiKey={process.env.NEXT_PUBLIC_TINYMCE}
      initialValue={props.defaultValue}
      onInit={(evt, editor) => {
        editorRef.current = editor;
        props?.onInit();
      }}
      textareaName={props.name}
      value={props.value}
      onEditorChange={props.onChange}
      init={{
        height: 300,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />
  );
});

Editor.displayName = "Editor";

export default Editor;
