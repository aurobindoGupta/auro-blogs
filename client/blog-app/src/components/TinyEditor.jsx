import {  useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function TinyEditor() {
  const location = useLocation();
  const editorRef = useRef(null);
  let timeout;

  const handleBlogUpdate = (value) => {
   
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      axios
        .put("http://192.168.1.4:3001/api/posts", {
          postId: location.state.id,
          body: value,
        })
        .then((res) => {
          console.log(res.data);
        });
    }, 2000);
  };

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent({ format: "text" }));
    }
  };
  return (
    <>
      <Editor
        apiKey={import.meta.env.TINY_API_URL}
        onInit={(evt, editor) => (editorRef.current = editor)}
        title={location.state.title}
        initialValue={`<p>${location.state.body}<p>`}
        onEditorChange={(newValue, editor) => {
          handleBlogUpdate(editor.getContent({ format: "text" }));
        }}
        init={{
          height: 700,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
